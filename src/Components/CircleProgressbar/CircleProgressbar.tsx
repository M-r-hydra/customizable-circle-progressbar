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
      circleRef.current.children[1].style.strokeDashoffset =
        200 * (100 - progressValue) * 0.01;
    }, 200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [circleRef, progressValue]);
  const copyOfPrimaryolors = [...primaryColors];
  copyOfPrimaryolors.pop();
  copyOfPrimaryolors.shift();

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
              {primaryColors.reverse().map((item, index) => (
                <stop
                  offset={((): string => {
                    if (index === 0) return "0%";
                    else if (index === primaryColors.length - 1) return "100%";
                    else {
                      return 100 / (index + 1) + "%";
                    }
                  })()}
                  stopColor={item}
                />
              ))}
              {}
            </linearGradient>
          </defs>
          <circle
            cx={width / 2.85 + 8}
            cy={width / 2.85 + 8}
            r={width / 2.85 - strokeSize - 4}
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
