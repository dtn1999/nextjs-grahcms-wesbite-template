import React from "react";
import cn from "classnames";
import ReactCounUp, { CountUpProps } from "react-countup";
import { useInView } from "react-intersection-observer";


const CountUp: React.FC<CountUpProps> = React.memo(({ ...props }) => {
  const [hasRun, setHasRun] = React.useState<boolean>(false);
  const [startValue, setStartValue] = React.useState<number>();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  
  const { redraw, duration, ...rest } = props;

  React.useEffect(() => {
    if (inView) {
      setStartValue(0);
      // start the count up
    } else {
      setStartValue(undefined);
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <ReactCounUp start={startValue} duration={5} redraw {...rest} />
    </div>
  );
});
export default CountUp;
