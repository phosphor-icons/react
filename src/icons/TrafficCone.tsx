/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M232,204H216.5L157.2,33.4A20.1,20.1,0,0,0,138.3,20H117.7A20.1,20.1,0,0,0,98.8,33.4L39.5,204H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM98.3,108h59.4l13.9,40H84.4Zm22.2-64h15l13.9,40H106.6ZM76,172H180l11.1,32H64.9Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M188.5,160H67.5L89.7,96h76.6Z" opacity="0.2" />
    <path d="M232,208H213.7L153.4,34.7A16,16,0,0,0,138.3,24H117.7a16,16,0,0,0-15.1,10.7L42.3,208H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM95.4,104h65.2l16.7,48H78.7Zm22.3-64h20.6L155,88H101ZM73.2,168H182.8l13.9,40H59.3Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M232,208H213.7L153.4,34.7A16,16,0,0,0,138.3,24H117.7a16,16,0,0,0-15.1,10.7L42.3,208H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM95.4,104h65.2l16.7,48H78.7Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M232,210H212.3L151.5,35.4A13.9,13.9,0,0,0,138.3,26H117.7a13.9,13.9,0,0,0-13.2,9.4L43.7,210H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM94,102h68l18.1,52H75.9Zm21.8-62.7a2,2,0,0,1,1.9-1.3h20.6a2,2,0,0,1,1.9,1.3L157.8,90H98.2ZM71.7,166H184.3l15.3,44H56.4Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M232,208H213.7L153.4,34.7A16,16,0,0,0,138.3,24H117.7a16,16,0,0,0-15.1,10.7L42.3,208H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM95.4,104h65.2l16.7,48H78.7Zm22.3-64h20.6L155,88H101ZM73.2,168H182.8l13.9,40H59.3Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M232,212H210.8L149.6,36.1A11.8,11.8,0,0,0,138.3,28H117.7a11.8,11.8,0,0,0-11.3,8.1L45.2,212H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM92.6,100h70.8l19.5,56H73.1Zm21.3-61.3a4.1,4.1,0,0,1,3.8-2.7h20.6a4.1,4.1,0,0,1,3.8,2.7L160.6,92H95.4ZM70.3,164H185.7l16.7,48H53.6Z" />
  </>
);

const TrafficCone = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

TrafficCone.displayName = "TrafficCone";

export default TrafficCone;
