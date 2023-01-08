// React
import React, { useEffect } from "react";
// React
// CSS
import styles from "./CircleProgressbar.module.css";
// CSS

type CircleProgressbarProps = {
  progressValue: number;
  width: number;
  strokeSize: number;
  primaryColors: string[];
  innerHtml: React.ReactElement;
  fontColor: string;
};

const CircleProgressbar: React.FunctionComponent<CircleProgressbarProps> = ({
  progressValue,
  width,
  strokeSize,
  primaryColors,
  innerHtml,
  fontColor,
}) => {
  const circleRef = React.createRef<any>();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log(
        (circleRef.current.children[1].style.strokeDashoffset =
          100 - progressValue)
      );
    }, 200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [circleRef, progressValue]);
  return (
    <>
      <div
        className={`${styles.skill}`}
        style={{ width: `${width}px`, height: `${width}px` }}
      >
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div id={styles.number} style={{ color: fontColor }}>
              {innerHtml}
            </div>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width - 16}px`}
          height={`${width - 16}px`}
          ref={circleRef}
          className={styles.circleSvg}
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor={`${primaryColors[0]}`} />
              <stop offset="100%" stopColor={`${primaryColors[1]}`} />
              {primaryColors.reverse().map((item, index) => (
                <stop
                  key={item}
                  offset={
                    index === 0
                      ? "0%"
                      : index === primaryColors.length
                      ? "100%"
                      : primaryColors.length / index
                  }
                  stopColor={`${primaryColors[0]}`}
                />
              ))}
              <stop />
            </linearGradient>
          </defs>
          <circle
            cx={width / 2.5 - 2}
            cy={width / 2.5 - 2}
            r={width / 2.5 - 2}
            data-test={progressValue}
            strokeLinecap="round"
            strokeWidth={strokeSize}
          />
        </svg>
      </div>
    </>
  );
};

export default CircleProgressbar;
