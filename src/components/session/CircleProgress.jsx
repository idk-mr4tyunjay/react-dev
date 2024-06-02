import React, { useEffect, useRef, useState } from 'react';

const CircleProgress = ({ percentage }) => {
  const canvasRef = useRef(null);
  const xCenter = 100; // Assuming the canvas is 200x200
  const yCenter = 100;
  const radius = 90;
  const startAngle = -0.5 * Math.PI; // Start from the top
  const endAngle = 2 * Math.PI; // Full circle
  const animationDuration = 1000; // 1 second animation duration
  const animationSteps = 60; // Number of animation steps
  const animationStepDuration = animationDuration / animationSteps;
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let step = 0;

    function animateCircle() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const progressPercentage = currentPercentage + (percentage - currentPercentage) * step / animationSteps;

      // Background circle
      ctx.beginPath();
      ctx.arc(xCenter, yCenter, radius, 0, endAngle);
      ctx.strokeStyle = '#e6e6e6';
      ctx.lineWidth = 20;
      ctx.stroke();

      // Progress arc
      const progressEndAngle = startAngle + (2 * Math.PI * (progressPercentage / 100));
      ctx.beginPath();
      ctx.arc(xCenter, yCenter, radius, startAngle, progressEndAngle);
      ctx.strokeStyle = '#2E20C7';
      ctx.lineWidth = 20;
      ctx.stroke();

      // Display percentage text
      ctx.font = '40px Arial';
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${Math.round(progressPercentage)}%`, xCenter, yCenter);

      step++;
      if (step < animationSteps) {
        animationFrameId = requestAnimationFrame(animateCircle);
      } else {
        setCurrentPercentage(percentage);
      }
    }

    animateCircle();

    return () => {
      cancelAnimationFrame(animationFrameId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [percentage, currentPercentage]);

  return <canvas ref={canvasRef} width="200" height="200" />;
};

export default CircleProgress;
