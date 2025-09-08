"use client";

import React, { useRef, useEffect } from "react";

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}

const randomColor = () => {
  const colors = ["#F87171", "#60A5FA", "#34D399", "#FBBF24", "#A78BFA"];
  return colors[Math.floor(Math.random() * colors.length)];
};

interface Props {
  width?: number;   // optional fixed width
  height?: number;  // optional fixed height
}

export const Canvas: React.FC<Props> = ({ width = 300, height = 300 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ballsRef = useRef<Ball[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const ballCount = 10; // fewer balls for small showcase

    const createBalls = () => {
      const balls: Ball[] = [];
      const minRadius = Math.max(5, width / 50);
      const maxRadius = Math.max(15, width / 25);

      for (let i = 0; i < ballCount; i++) {
        const radius = Math.random() * (maxRadius - minRadius) + minRadius;
        balls.push({
          x: Math.random() * (canvas.width - radius * 2) + radius,
          y: Math.random() * (canvas.height - radius * 2) + radius,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          radius,
          color: randomColor(),
        });
      }
      ballsRef.current = balls;
    };

    createBalls();

    const drawGrid = () => {
      const spacing = Math.max(30, width / 10); // responsive for small canvas
      ctx.strokeStyle = "rgba(200,200,200,0.2)";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      ballsRef.current.forEach((ball) => {
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) ball.dx = -ball.dx;
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) ball.dy = -ball.dy;

        ball.x += ball.dx;
        ball.y += ball.dy;

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
        ctx.closePath();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      className="rounded-xl shadow-md border border-gray-200"
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};
