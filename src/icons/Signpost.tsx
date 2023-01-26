/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M248.9,104l-36-40a11.8,11.8,0,0,0-8.9-4H140V32a12,12,0,0,0-24,0V60H40A20.1,20.1,0,0,0,20,80v64a20.1,20.1,0,0,0,20,20h76v60a12,12,0,0,0,24,0V164h64a11.8,11.8,0,0,0,8.9-4l36-40A11.9,11.9,0,0,0,248.9,104Zm-50.2,36H44V84H198.7l25.2,28Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path
      d="M240,112l-36,40H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H204Z"
      opacity="0.2"
    />
    <path d="M245.9,106.6l-36-40A8.1,8.1,0,0,0,204,64H136V32a8,8,0,0,0-16,0V64H40A16,16,0,0,0,24,80v64a16,16,0,0,0,16,16h80v64a8,8,0,0,0,16,0V160h68a8.1,8.1,0,0,0,5.9-2.6l36-40A8,8,0,0,0,245.9,106.6ZM200.4,144H40V80H200.4l28.8,32Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M245.9,117.4l-36,40A8.1,8.1,0,0,1,204,160H136v64a8,8,0,0,1-16,0V160H40a16,16,0,0,1-16-16V80A16,16,0,0,1,40,64h80V32a8,8,0,0,1,16,0V64h68a8.1,8.1,0,0,1,5.9,2.6l36,40A8,8,0,0,1,245.9,117.4Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M244.5,108l-36-40a6.1,6.1,0,0,0-4.5-2H134V32a6,6,0,0,0-12,0V66H40A14,14,0,0,0,26,80v64a14,14,0,0,0,14,14h82v66a6,6,0,0,0,12,0V158h70a6.1,6.1,0,0,0,4.5-2l36-40A6.1,6.1,0,0,0,244.5,108Zm-43.2,38H40a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2H201.3l30.6,34Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M245.9,106.6l-36-40A8.1,8.1,0,0,0,204,64H136V32a8,8,0,0,0-16,0V64H40A16,16,0,0,0,24,80v64a16,16,0,0,0,16,16h80v64a8,8,0,0,0,16,0V160h68a8.1,8.1,0,0,0,5.9-2.6l36-40A8,8,0,0,0,245.9,106.6ZM200.4,144H40V80H200.4l28.8,32Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M243,109.3l-36-40a4.3,4.3,0,0,0-3-1.3H132V32a4,4,0,0,0-8,0V68H40A12,12,0,0,0,28,80v64a12,12,0,0,0,12,12h84v68a4,4,0,0,0,8,0V156h72a4.3,4.3,0,0,0,3-1.3l36-40A4.2,4.2,0,0,0,243,109.3ZM202.2,148H40a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H202.2l32.4,36Z" />
  </>
);

const Signpost = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Signpost.displayName = "Signpost";

export default Signpost;
