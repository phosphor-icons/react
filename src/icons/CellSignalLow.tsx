/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M199.7,24.8a19.9,19.9,0,0,0-21.8,4.4L13.2,193.8A20,20,0,0,0,27.3,228H192a20.1,20.1,0,0,0,20-20V43.3A19.9,19.9,0,0,0,199.7,24.8ZM68,173v31H37Zm120,31H92V149l96-96Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <path d="M80,216H27.3a8,8,0,0,1-5.6-13.7L80,144Z" />
    </g>
    <path d="M198.1,28.5A15.9,15.9,0,0,0,180.7,32L74.4,138.3h-.1L16,196.7A16,16,0,0,0,27.3,224H192a16,16,0,0,0,16-16V43.3A16,16,0,0,0,198.1,28.5ZM72,163.3V208H27.3ZM192,208H88V147.3l104-104Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M198.1,28.5A15.9,15.9,0,0,0,180.7,32L74.4,138.3h-.1L16,196.7A16,16,0,0,0,27.3,224H192a16,16,0,0,0,16-16V43.3A16,16,0,0,0,198.1,28.5ZM192,208H88V147.3l104-104Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M197.4,30.4a14,14,0,0,0-15.3,3L75.8,139.7h0L17.4,198.1A14,14,0,0,0,27.3,222H192a14,14,0,0,0,14-14V43.3A13.9,13.9,0,0,0,197.4,30.4ZM25.5,208.8a1.9,1.9,0,0,1,.4-2.2L74,158.5V210H27.3A2,2,0,0,1,25.5,208.8ZM194,208a2,2,0,0,1-2,2H86V146.5L190.6,41.9a1.8,1.8,0,0,1,1.4-.6l.8.2a1.8,1.8,0,0,1,1.2,1.8Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M198.1,28.5A15.9,15.9,0,0,0,180.7,32L74.4,138.3h-.1L16,196.7A16,16,0,0,0,27.3,224H192a16,16,0,0,0,16-16V43.3A16,16,0,0,0,198.1,28.5ZM72,163.3V208H27.3ZM192,208H88V147.3l104-104Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M196.6,32.2a11.8,11.8,0,0,0-13.1,2.6L77.2,141.2h0L18.8,199.5A12,12,0,0,0,27.3,220H192a12,12,0,0,0,12-12V43.3A11.8,11.8,0,0,0,196.6,32.2ZM23.6,209.5a3.8,3.8,0,0,1,.9-4.3L76,153.6V212H27.3A4,4,0,0,1,23.6,209.5ZM196,208a4,4,0,0,1-4,4H84V145.6L189.2,40.5a3.4,3.4,0,0,1,2.7-1.2,4,4,0,0,1,1.6.3,3.8,3.8,0,0,1,2.5,3.7Z" />
  </>
);

const CellSignalLow = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

CellSignalLow.displayName = "CellSignalLow";

export default CellSignalLow;
