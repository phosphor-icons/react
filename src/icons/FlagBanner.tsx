/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M191.4,108l42-52.5A12,12,0,0,0,224,36H40A12,12,0,0,0,28,48V216a12,12,0,0,0,24,0V180H224a12,12,0,0,0,9.4-19.5ZM52,156V60H199l-32.4,40.5a12,12,0,0,0,0,15L199,156Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M176,108l48,60H40V48H224Z" opacity="0.2" />
    <path d="M186.2,108l44-55A8,8,0,0,0,224,40H40a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V176H224a8,8,0,0,0,6.2-13ZM48,160V56H207.4l-37.6,47a7.8,7.8,0,0,0,0,10l37.6,47Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M230.2,163a8,8,0,0,1-6.2,13H48v40a8,8,0,0,1-16,0V48a8,8,0,0,1,8-8H224a8,8,0,0,1,6.2,13l-44,55Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M183.7,108l45-56.3A6,6,0,0,0,224,42H40a6,6,0,0,0-6,6V216a6,6,0,0,0,12,0V174H224a6,6,0,0,0,4.7-9.7ZM46,162V54H211.5l-40.2,50.3a6,6,0,0,0,0,7.4L211.5,162Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M186.2,108l44-55A8,8,0,0,0,224,40H40a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V176H224a8,8,0,0,0,6.2-13ZM48,160V56H207.4l-37.6,47a7.8,7.8,0,0,0,0,10l37.6,47Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M181.1,108l46-57.5a3.8,3.8,0,0,0,.5-4.2A4.1,4.1,0,0,0,224,44H40a4,4,0,0,0-4,4V216a4,4,0,0,0,8,0V172H224a4.1,4.1,0,0,0,3.6-2.3,3.8,3.8,0,0,0-.5-4.2ZM44,164V52H215.7l-42.8,53.5a3.9,3.9,0,0,0,0,5L215.7,164Z" />
  </>
);

const FlagBanner = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

FlagBanner.displayName = "FlagBanner";

export default FlagBanner;
