import { useEffect, useRef } from "react";

export default function MetaballBlob() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let size = Math.max(window.innerWidth, window.innerHeight);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let t = 0;
    let animId;

    const blobs = [
      { x: 200, y: 250, vx: 1.0, vy: 0.9, r: 120 },
      { x: 320, y: 260, vx: -1.0, vy: 1.1, r: 140 },
      { x: 260, y: 170, vx: 0.8, vy: -1.3, r: 90 },
    ];

    function updateBlobs() {
      blobs.forEach((b) => {
        b.x += Math.cos(t * 0.8 + b.r) * 1.2 + b.vx;
        b.y += Math.sin(t * 0.9 + b.r) * 1.2 + b.vy;

        if (b.x < 100 || b.x > canvas.width - 100) b.vx *= -1;
        if (b.y < 100 || b.y > canvas.height - 100) b.vy *= -1;
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
      const image = ctx.createImageData(canvas.width, canvas.height);
      const data = image.data;

      const threshold = 1.2;

      for (let x = 0; x < canvas.width; x += 2) {
        for (let y = 0; y < canvas.height; y += 2) {
          const v = field(x, y);

          if (v > threshold) {
            const i = (x + y * canvas.width) * 4;

            const base = 60;
            const intensity = Math.min(120, (v - threshold) * 100);

            const grey = base + intensity;

            data[i] = grey;      
            data[i + 1] = grey;  
            data[i + 2] = grey;  
            data[i + 3] = 255;

            const i2 = ((x + 1) + y * canvas.width) * 4;
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
      t += 0.008;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      updateBlobs();
      drawMetaballs();
      drawGlow();

      animId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}