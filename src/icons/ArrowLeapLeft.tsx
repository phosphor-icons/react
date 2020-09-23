/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <polyline points="92.118 148.118 28.118 148.118 28.118 84.118" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <polyline points="92.118 148.118 28.118 148.118 28.118 84.118" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M201.53906,110.46094a103.99978,103.99978,0,0,0-147.07812,0L36.11816,128.80371V84.11816a8,8,0,0,0-16,0v63.99512c-.00024.26563.01368.53174.04.79688.0105.10742.031.21093.04566.31689.02124.15283.03979.30566.06982.45752.0249.125.05957.24609.09009.36914.03247.13037.06128.26123.10034.39014.03662.1206.08228.23681.12427.355.04565.1289.08838.25781.14062.38476.04493.10743.09766.21094.147.31641.06152.13184.1206.26465.18969.39355.052.09717.11158.189.16724.28321.0769.13037.15088.26172.23584.38818.06616.09863.14038.19141.21094.28662.08423.11475.1643.231.25537.3418.116.14111.24194.27344.36719.40625.05444.0581.10229.11914.15869.17578.05346.05322.11157.09863.166.1499.13623.12891.27222.25782.417.377.10376.085.21289.15966.31958.23877.10327.07666.20361.15673.31079.22851.11718.07813.23925.14649.35962.21826.10424.062.20581.12744.313.18506.11817.063.23975.1167.36036.17334.11669.05518.23168.11328.35131.16309.11255.04638.22754.084.3418.125.13257.04834.26367.09863.39917.13965.10889.03271.21948.05664.32959.085.14307.03662.28491.07617.43091.105.11963.02343.24072.03711.36133.05517.13745.02051.27319.0459.41259.05957.20191.01953.40455.02637.60718.03077.05957.001.11719.00878.177.00878h64a8,8,0,0,0,0-16H47.43262l18.34277-18.34277A88,88,0,0,1,216,184a8,8,0,0,0,16,0A103.322,103.322,0,0,0,201.53906,110.46094Z"/>

</>)
    case "light":
      return (<>
  <polyline points="92.118 148.118 28.118 148.118 28.118 84.118" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <polyline points="92.118 148.118 28.118 148.118 28.118 84.118" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <polyline points="92.118 148.118 28.118 148.118 28.118 84.118" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowLeapLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
});

ArrowLeapLeft.displayName = "ArrowLeapLeft";

export default ArrowLeapLeft;
