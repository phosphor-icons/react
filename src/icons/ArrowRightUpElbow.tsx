/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 96 176 48 224 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <polyline points="32 192 176 192 176 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 96 176 48 224 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="32 192 176 192 176 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M235.31348,84.68652,187.31934,36.69238q-.5625-.56286-1.18018-1.06738c-.17822-.14648-.36645-.27344-.54956-.411-.23389-.17566-.46314-.35681-.70679-.51965-.22558-.15113-.46-.28186-.6914-.42017-.21631-.12915-.42774-.26489-.65015-.38416-.23828-.12756-.4834-.23547-.72681-.35009-.22973-.10852-.45556-.22315-.6914-.32093-.23828-.09863-.48194-.17846-.72412-.26513-.25-.08972-.49707-.18567-.75269-.26319-.24512-.07421-.4939-.12866-.7417-.19079-.25806-.06482-.51294-.13733-.77612-.18946-.28833-.05725-.57959-.09167-.87012-.13293-.22607-.032-.44849-.0752-.67773-.09766a16.09006,16.09006,0,0,0-3.16114,0c-.22949.02246-.4519.06568-.67822.09778-.29053.04126-.58154.07556-.86963.13269-.26318.05225-.51806.12476-.77661.1897-.24756.06213-.49634.11646-.74121.19067-.25562.07752-.50269.17347-.75269.26319-.24218.08667-.48584.1665-.72412.26513-.23584.09778-.46167.21241-.6914.32093-.24317.11462-.48853.22253-.72681.35-.2229.11939-.43481.25562-.65112.385-.231.13806-.46485.26843-.69019.41919-.24414.16333-.47412.34473-.70849.521-.18238.1372-.37037.26379-.5481.40991q-.616.505-1.18018,1.06738L116.68652,84.68652a15.99968,15.99968,0,0,0,22.627,22.627L160,86.6272V176H32a16,16,0,0,0,0,32H176a15.99985,15.99985,0,0,0,16-16V86.6272l20.68652,20.68628a15.99968,15.99968,0,0,0,22.627-22.627Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 96 176 48 224 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <polyline points="32 192 176 192 176 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  </g>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 96 176 48 224 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <polyline points="32 192 176 192 176 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 96 176 48 224 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="32 192 176 192 176 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowRightUpElbow = forwardRef<SVGSVGElement, IconProps>(
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

ArrowRightUpElbow.displayName = "ArrowRightUpElbow";

export default ArrowRightUpElbow;
