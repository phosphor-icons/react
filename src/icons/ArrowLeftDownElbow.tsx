/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 160 80 208 32 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <polyline points="224 64 80 64 80 208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 160 80 208 32 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="224 64 80 64 80 208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M224,48H80A15.99985,15.99985,0,0,0,64,64V169.3728L43.31348,148.68652a15.99968,15.99968,0,0,0-22.627,22.627l47.99414,47.99414q.5625.56286,1.18018,1.06738c.17725.14563.36426.27173.54639.40857.2351.17664.46582.35876.71069.52258.22339.14942.45532.27881.68433.41577.2185.13086.43237.26807.65771.38868.2356.126.478.23266.71851.34619.23266.10986.46118.22583.6997.3247.23511.09717.47535.17566.71363.26123.2539.09131.50439.18848.76391.26709.239.07227.48169.12525.72315.186.26465.06677.52588.14075.79541.19409.27759.05518.55786.08765.83764.12793.23682.03394.47.07886.71.10254C78.94678,223.97205,79.47314,224,80,224s1.05322-.028,1.57812-.07959c.23975-.02356.47266-.06836.70948-.10242.27978-.04028.56054-.07287.83838-.12805.26928-.05334.53027-.1272.79467-.194.24146-.06091.48462-.11377.72364-.18616.25952-.07861.51-.17578.76391-.26709.23828-.08557.47852-.16406.71363-.26123.23852-.09887.467-.21484.6997-.3247.24048-.11353.48291-.22022.71875-.34619.22461-.12037.43824-.25733.6565-.38794.22925-.13733.46191-.267.68554-.41675.24463-.16333.47461-.345.70923-.52124.18238-.13721.36988-.26367.54761-.40967q.616-.505,1.18018-1.06738l47.99414-47.99414a15.99968,15.99968,0,0,0-22.627-22.627L96,169.3728V80H224a16,16,0,0,0,0-32Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 160 80 208 32 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <polyline points="224 64 80 64 80 208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  </g>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 160 80 208 32 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <polyline points="224 64 80 64 80 208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 160 80 208 32 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="224 64 80 64 80 208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowLeftDownElbow = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { color, size, weight, mirrored, ...rest } = props;
    const {
      color: contextColor,
      size: contextSize,
      weight: contextWeight,
      mirrored: contextMirrored,
      ...contextRest
    } = useContext(IconContext);

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? contextSize}
        height={size ?? contextSize}
        fill={color ?? contextColor}
        viewBox="0 0 256 256"
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

ArrowLeftDownElbow.displayName = "ArrowLeftDownElbow";

export default ArrowLeftDownElbow;
