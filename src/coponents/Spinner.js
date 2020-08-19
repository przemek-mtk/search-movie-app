import React, { useRef, useEffect } from "react";

/*te ustawienia obecne są dla małego spinera w search */

const Spinner = (props) => {
  const canvas = useRef(null);

  const draw = (ctx, current, last, color, lineWidth) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth; //dla mniejszych linia będzie cieńsza
    ctx.moveTo(last.x, last.y); //stara pozycja
    ctx.lineTo(current.x, current.y); //nowa pozycja
    ctx.stroke();
    ctx.closePath();
  };

  useEffect(() => {
    const { side, color, bg } = props; //długosć boku = 100
    const ctx = canvas.current.getContext("2d");

    ctx.fillStyle = `rgb(${bg})`; //tutaj potrzbuje koloru tła!!
    ctx.fillRect(0, 0, side, side);

    let radians = 4.65; // tak na oko żeby zaczynał od kąta 90 stopni
    const distanceFromCenter = side - side / 1.5; //40; //zmienne ze względu na długość boku - side

    let x = side / 2 + Math.cos(radians) * distanceFromCenter; //  side / 2; //połowa szerokości canvas - wyznaczam środek
    let y = side / 2 + Math.sin(radians) * distanceFromCenter; //  side / 2; //połowa szerokości canvas- wyznaczam środek
    let current = { x, y };
    let last = { x, y };

    let velocity = 0.1; // prędkość musi być miejszy dla większych lineWidth
    let animatinFrameId; // potrzbebnr przy unmount

    const update = () => {
      radians += velocity;
      last = { x, y }; //zapamietaj starą pozycje
      x = side / 2 + Math.cos(radians) * distanceFromCenter; //oblicz nową pozycje
      y = side / 2 + Math.sin(radians) * distanceFromCenter; //oblicz nową pozycje
      current = { x, y };

      draw(ctx, current, last, `rgb(${color})`, 2);
    };

    const animation = () => {
      animatinFrameId = requestAnimationFrame(animation);
      ctx.fillStyle = `rgba(${bg},0.02)`;
      // console.log(side)
      ctx.fillRect(0, 0, side, side);

      update();
    };

    animation();

    return () => {
      cancelAnimationFrame(animatinFrameId);
    };
  }, []);

  return <canvas ref={canvas} width={props.side} height={props.side} {...props} />
};

export default Spinner;
