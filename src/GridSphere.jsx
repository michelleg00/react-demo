import { useEffect, useRef } from "react";

export default function FluidBlob() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const size = 420;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2, cy = size / 2;
    let rotY = 0, rotX = 0.3, t = 0;
    let dragging = false, lastX, lastY;
    let animId;

    canvas.style.cursor = "grab";

    const onDown = (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY; canvas.style.cursor = "grabbing"; };
    const onMove = (e) => {
      if (!dragging) return;
      rotY += (e.clientX - lastX) * 0.01;
      rotX += (e.clientY - lastY) * 0.01;
      lastX = e.clientX; lastY = e.clientY;
    };
    const onUp = () => { dragging = false; canvas.style.cursor = "grab"; };

    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseup", onUp);
    canvas.addEventListener("mouseleave", onUp);

    const noise = (x, y, z, t) => {
      const s = Math.sin, c = Math.cos;
      return (
        s(x * 1.7 + t * 0.7) * c(y * 1.3 + t * 0.5) * 0.4 +
        s(y * 2.1 + t * 0.9) * c(z * 1.5 + t * 0.6) * 0.3 +
        s(z * 1.4 + t * 1.1) * c(x * 1.8 + t * 0.8) * 0.3 +
        s(x * 0.8 + y * 0.6 + t * 0.4) * 0.2 +
        c(y * 0.9 + z * 1.1 + t * 0.3) * 0.15
      );
    };

    const getBlobRadius = (lat, lon, t) => {
      const x = Math.cos(lat) * Math.cos(lon);
      const y = Math.sin(lat);
      const z = Math.cos(lat) * Math.sin(lon);
      return 150 * (1 + noise(x, y, z, t) * 0.28);
    };

    const rotatePoint = ([x, y, z]) => {
      const y1 = y * Math.cos(rotX) - z * Math.sin(rotX);
      const z1 = y * Math.sin(rotX) + z * Math.cos(rotX);
      const x2 = x * Math.cos(rotY) + z1 * Math.sin(rotY);
      const z2 = -x * Math.sin(rotY) + z1 * Math.cos(rotY);
      return [x2, y1, z2];
    };

    const project = ([x, y, z]) => {
      const fov = 600, s = fov / (fov + z);
      return [cx + x * s, cy - y * s];
    };

    const segs = 22;

    function draw() {
      ctx.clearRect(0, 0, size, size);
      t += 0.012;

      const allLines = [];

      for (let i = 0; i <= segs; i++) {
        const lat = (i / segs) * Math.PI - Math.PI / 2;
        const pts = [];
        for (let j = 0; j <= segs * 2; j++) {
          const lon = (j / (segs * 2)) * Math.PI * 2;
          const r = getBlobRadius(lat, lon, t);
          pts.push(rotatePoint([r * Math.cos(lat) * Math.cos(lon), r * Math.sin(lat), r * Math.cos(lat) * Math.sin(lon)]));
        }
        allLines.push(pts);
      }

      for (let j = 0; j < segs * 2; j += 2) {
        const pts = [];
        for (let i = 0; i <= segs; i++) {
          const lat = (i / segs) * Math.PI - Math.PI / 2;
          const lon = (j / (segs * 2)) * Math.PI * 2;
          const r = getBlobRadius(lat, lon, t);
          pts.push(rotatePoint([r * Math.cos(lat) * Math.cos(lon), r * Math.sin(lat), r * Math.cos(lat) * Math.sin(lon)]));
        }
        allLines.push(pts);
      }

      allLines.forEach((pts) => {
        ctx.beginPath();
        let drawing = false;
        pts.forEach((p) => {
          const [px, py] = project(p);
          if (p[2] > -20) {
            if (!drawing) { ctx.moveTo(px, py); drawing = true; }
            else ctx.lineTo(px, py);
          } else {
            if (drawing) { ctx.stroke(); ctx.beginPath(); drawing = false; }
          }
        });
        if (drawing) ctx.stroke();
        ctx.strokeStyle = "rgba(140,120,255,0.5)";
        ctx.lineWidth = 0.75;
        ctx.stroke();
      });

      const grd = ctx.createRadialGradient(cx - 40, cy - 40, 10, cx, cy, 170);
      grd.addColorStop(0, "rgba(180,160,255,0.13)");
      grd.addColorStop(0.5, "rgba(120,100,240,0.07)");
      grd.addColorStop(1, "rgba(80,60,200,0.0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 200, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      if (!dragging) rotY += 0.004;
      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("mouseleave", onUp);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}