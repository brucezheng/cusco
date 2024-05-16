"use client"

import styles from "./cardCarousel.module.css";
import { Card, CardProps } from "../card/Card";
import { MouseEvent, useCallback, useState } from "react";
import useResizeObserver from "use-resize-observer";

interface CardCarouselProps {
  cards: CardProps[];
}

const PI = 3.14159;
const OPACITY_MIN_CUTOFF = (6 * PI / 8);
const OPACITY_MAX_CUTOFF = (10 * PI / 8);

export function CardCarousel({cards}: CardCarouselProps) {
  const numCards = cards.length;
  const [activeCard, setActiveCard] = useState(0);

  const { ref, width } = useResizeObserver<HTMLDivElement>();
  const cardWidth = (width && width < 600) ? 250 : 300;
  const circleRadius = cardWidth * 2.1;
  const getStyle = useCallback((index: number) => {
    const circleSize = (numCards * 2) + 1;
    const maxActiveCard = (numCards * 2);
    let circlePosition = (index - activeCard + maxActiveCard) % (maxActiveCard);
    if (circlePosition >= numCards) {
      circlePosition = circlePosition + 1;
    }
    const angle = 2 * PI * circlePosition / (circleSize); // 0 degrees is pointed at camera
    const left = Math.cos(angle - (PI / 2)) * circleRadius + ((width!) / 2) - (cardWidth / 2);
    let rotateY = angle * 180 / PI;
    if (rotateY > 180) rotateY -= 360;
    const opacity = Math.max(angle - OPACITY_MAX_CUTOFF, OPACITY_MIN_CUTOFF - angle) / OPACITY_MIN_CUTOFF;
    // const distance = MAX_DISTANCE * Math.sqrt(Math.pow(1 - Math.cos(angle), 2) + Math.pow(Math.sin(angle), 2));
    const scale = (7 + opacity) / 8;
    const blur = Math.pow((1 - opacity), 4) * 32;
    return {
      left: `${left}px`,
      transformOrigin: "center",
      transform: `rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      filter: `blur(${blur}px)`,
    };
  }, [activeCard, width]);
  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const mouseX = e.clientX;
    const carouselX = (e.currentTarget as any).getBoundingClientRect().x;
    const disp = mouseX - carouselX;
    if (disp > ((width ?? 500) / 2 + cardWidth / 3)) {
      setActiveCard((activeCard + 1) % (numCards * 2))
    } else if (disp < ((width ?? 500) / 2 - cardWidth / 3)) {
      setActiveCard((activeCard + numCards * 2 - 1) % (numCards * 2))
    }
  }, [width, activeCard])

  return <div onClick={handleClick} ref={ref} className={styles.cardCarousel}>
    {width && <>
      {cards.map((cardProps, index) => <div key={index} style={getStyle(index)} data-active={index == activeCard} className={styles.carouselItem}>
        <Card key={index} {...cardProps} width={`${cardWidth}px`} height="300px" />
      </div> )}
      {cards.map((cardProps, index) => <div style={getStyle(index + numCards)} data-active={index == activeCard} className={styles.carouselItem}>
        <Card key={index + numCards} {...cardProps} width={`${cardWidth}px`} height="300px" />
      </div> )}
    </>}
  </div>;
}