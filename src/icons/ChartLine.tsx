/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0v85.6L88.1,95a11.9,11.9,0,0,1,15.1-.6l56.2,42.2L216.1,87a12,12,0,0,1,15.8,18l-64,56a11.9,11.9,0,0,1-15.1.6L96.6,119.4,44,165.4V196H224A12,12,0,0,1,236,208Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.4L90.7,98a8,8,0,0,1,10.1-.4l58.8,44.1L218.7,90a8,8,0,1,1,10.6,12l-64,56a8,8,0,0,1-10.1.4L96.4,114.3,40,163.6V200H224A8,8,0,0,1,232,208Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.4L90.7,98a8,8,0,0,1,10.1-.4l58.8,44.1L218.7,90a8,8,0,1,1,10.6,12l-64,56a8,8,0,0,1-10.1.4L96.4,114.3,40,163.6V200H224A8,8,0,0,1,232,208Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0v98.8L92,99.5a6,6,0,0,1,7.6-.3l60.1,45.1L220,91.5a6,6,0,0,1,8,9l-64,56a6,6,0,0,1-7.6.3L96.3,111.7,38,162.7V202H224A6,6,0,0,1,230,208Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.4L90.7,98a8,8,0,0,1,10.1-.4l58.8,44.1L218.7,90a8,8,0,1,1,10.6,12l-64,56a8,8,0,0,1-10.1.4L96.4,114.3,40,163.6V200H224A8,8,0,0,1,232,208Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V151.2L93.4,101a3.9,3.9,0,0,1,5-.2l61.4,46.1L221.4,93a4,4,0,0,1,5.2,6l-64,56a3.9,3.9,0,0,1-5,.2L96.2,109.1,36,161.8V204H224A4,4,0,0,1,228,208Z" />
  </>
);

const ChartLine = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ChartLine.displayName = "ChartLine";

export default ChartLine;
