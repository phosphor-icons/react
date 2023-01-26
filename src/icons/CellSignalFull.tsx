/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M199.7,24.8a19.9,19.9,0,0,0-21.8,4.4L13.2,193.8A20,20,0,0,0,27.3,228H192a20.1,20.1,0,0,0,20-20V43.3A19.9,19.9,0,0,0,199.7,24.8ZM132,109l16-16V204H132Zm-24,95H92V149l16-16ZM68,173v31H37Zm120,31H172V69l16-16Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <path d="M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.6A8.1,8.1,0,0,1,200,43.3Z" />
    </g>
    <path d="M192,224H27.3A16,16,0,0,1,16,196.7L180.7,32A16,16,0,0,1,208,43.3V208A16,16,0,0,1,192,224ZM27.3,208H192V43.3L27.3,208Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M208,43.3V208a16,16,0,0,1-16,16H27.3A16,16,0,0,1,16,196.7L180.7,32A16,16,0,0,1,208,43.3Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M197.4,30.4a14,14,0,0,0-15.3,3L115.8,99.7h0l-40,39.9h0L17.4,198.1A14,14,0,0,0,27.3,222H192a14,14,0,0,0,14-14V43.3A13.9,13.9,0,0,0,197.4,30.4ZM126,106.5l28-28V210H126ZM114,210H86V146.5l28-28Zm-88.5-1.2a1.9,1.9,0,0,1,.4-2.2L74,158.5V210H27.3A2,2,0,0,1,25.5,208.8ZM194,208a2,2,0,0,1-2,2H166V66.5l24.6-24.6a1.8,1.8,0,0,1,1.4-.6l.8.2a1.8,1.8,0,0,1,1.2,1.8Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M198.1,28.5A15.9,15.9,0,0,0,180.7,32L74.4,138.3h-.1L16,196.7A16,16,0,0,0,27.3,224H192a16,16,0,0,0,16-16V43.3A16,16,0,0,0,198.1,28.5ZM88,147.3l24-24V208H88ZM72,208H27.3L72,163.3Zm56-100.7,24-24V208H128ZM192,208H168V67.3l24-24Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M196.6,32.2a11.8,11.8,0,0,0-13.1,2.6l-66.3,66.4h0l-40,40h0L18.8,199.5A12,12,0,0,0,27.3,220H192a12,12,0,0,0,12-12V43.3A11.8,11.8,0,0,0,196.6,32.2ZM124,105.6l32-32V212H124ZM116,212H84V145.6l32-32Zm-92.4-2.5a3.8,3.8,0,0,1,.9-4.3L76,153.6V212H27.3A4,4,0,0,1,23.6,209.5ZM196,208a4,4,0,0,1-4,4H164V65.6l25.2-25.1a3.4,3.4,0,0,1,2.7-1.2,4,4,0,0,1,1.6.3,3.8,3.8,0,0,1,2.5,3.7Z" />
  </>
);

const CellSignalFull = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

CellSignalFull.displayName = "CellSignalFull";

export default CellSignalFull;
