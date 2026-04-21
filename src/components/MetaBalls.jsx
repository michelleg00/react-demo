import { useEffect, useRef } from "react";

export default function MetaballBlob() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const size = 800;
    canvas.width = size;
    canvas.height = size;

    const cx = size / 2;
    const cy = size / 2;

    let t = 0;
    let animId;

    const blobs = [
      { x: 200, y: 250, vx: 1.2, vy: 0.9, r: 90 },
      { x: 320, y: 260, vx: -1.0, vy: 1.1, r: 100 },
      { x: 260, y: 170, vx: 0.8, vy: -1.3, r: 85 },
    ];

    function updateBlobs() {
      blobs.forEach((b) => {
        b.x += Math.cos(t * 0.8 + b.r) * 1.2 + b.vx;
        b.y += Math.sin(t * 0.9 + b.r) * 1.2 + b.vy;

        // bounce
        if (b.x < 100 || b.x > size - 100) b.vx *= -1;
        if (b.y < 100 || b.y > size - 100) b.vy *= -1;
      });
    }

    function field(x, y) {
      let v = 0;

      for (const b of blobs) {
        const dx = x - b.x;
        const dy = y - b.y;
        const dist2 = dx * dx + dy * dy;

        v += (b.r * b.r) / (dist2 + 50);
      }

      return v;
    }

    function drawMetaballs() {
      const image = ctx.createImageData(size, size);
      const data = image.data;

      const threshold = 1.2;

      for (let x = 0; x < size; x += 2) {
        for (let y = 0; y < size; y += 2) {
          const v = field(x, y);

          if (v > threshold) {
            const i = (x + y * size) * 4;

            const intensity = Math.min(255, (v - threshold) * 180);

            data[i] = 120 + intensity;     // R
            data[i + 1] = 100 + intensity; // G
            data[i + 2] = 255;             // B
            data[i + 3] = 255;             // A

            // fill 2x2 block for speed
            const i2 = ((x + 1) + y * size) * 4;
            data[i2] = data[i];
            data[i2 + 1] = data[i + 1];
            data[i2 + 2] = data[i + 2];
            data[i2 + 3] = 255;
          }
        }
      }

      ctx.putImageData(image, 0, 0);
    }

    function drawGlow() {
      ctx.globalCompositeOperation = "lighter";
      ctx.filter = "blur(20px)";
      ctx.drawImage(canvas, 0, 0);
      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";
    }

    function animate() {
      t += 0.015;

      ctx.clearRect(0, 0, size, size);

      updateBlobs();
      drawMetaballs();
      drawGlow();

      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} />;
}