import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  format?: "default" | "compact";
}

function formatValue(value: number, format: "default" | "compact") {
  if (format === "compact" && value >= 1000) {
    const rounded = Math.round(value / 1000);
    return `${rounded}K`;
  }
  return Math.round(value).toLocaleString();
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  format = "default",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-60px" });

  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) =>
    formatValue(current, format),
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(0);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
