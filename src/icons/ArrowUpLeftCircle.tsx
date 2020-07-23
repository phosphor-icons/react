import React, { forwardRef } from "react";
import { IconProps } from "../lib";
import ArrowUpRightCircle from "./ArrowUpRightCircle";

const ArrowUpLeftCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ mirrored = false, ...rest }, ref) => (
    <ArrowUpRightCircle mirrored={!mirrored} {...rest} ref={ref} />
  )
);

ArrowUpLeftCircle.displayName = "ArrowUpLeftCircle";

export default ArrowUpLeftCircle;
