/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <line x1="152" y1="108" x2="184" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="72" y1="108" x2="104" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="88" y1="92" x2="88" y2="124" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M172.01831,55.7398,84.00446,56A52.01509,52.01509,0,0,0,32.78594,98.96873l.00852.00156-16.3644,84.16289A28.00192,28.00192,0,0,0,63.80532,207.796l-.00165-.00173L107.03924,160l64.97907-.2602a52,52,0,0,0,0-104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M223.22831,98.71009l16.351,84.42309A28.00192,28.00192,0,0,1,192.204,207.796l.00166-.00173L149,159.832" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M149,159.832l23.01835-.09217a52.04589,52.04589,0,0,0,51.21853-61.03119l-.00853.00148,16.351,84.42309A28.00192,28.00192,0,0,1,192.204,207.796l.00166-.00173L149,159.832Z" opacity="0.2"/>
  <line x1="152" y1="108" x2="184" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="72" y1="108" x2="104" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="92" x2="88" y2="124" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M172.01831,55.7398,84.00446,56A52.01509,52.01509,0,0,0,32.78594,98.96873l.00852.00156-16.3644,84.16289A28.00192,28.00192,0,0,0,63.80532,207.796l-.00165-.00173L107.03924,160l64.97907-.2602a52,52,0,0,0,0-104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M223.22831,98.71009l16.351,84.42309A28.00192,28.00192,0,0,1,192.204,207.796l.00166-.00173L149,159.832" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M172.01807,47.74023h-.02344L84.00439,48A59.86832,59.86832,0,0,0,24.90625,97.58887c-.0127.07226-.02441.14551-.03516.21777L8.57715,181.60547c-.00879.0459-.01709.0918-.02539.13769A36.00238,36.00238,0,0,0,69.45752,213.457q.21753-.2168.416-.44726l40.729-45.02442,61.41553-.24512a60,60,0,0,0,0-120ZM104,116H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V92a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm80,0H152a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Z"/>
  <path d="M247.45752,181.74316c-.00781-.04394-.01563-.08789-.02441-.13086l-3.98047-20.55468a8.00025,8.00025,0,0,0-13.90821-3.709,75.43474,75.43474,0,0,1-52.48974,26.22754,7.999,7.999,0,0,0-5.41944,13.33594l14.48877,16.083q.20289.2373.42774.46191a36.00125,36.00125,0,0,0,60.90576-31.71387Z"/>

</>)
    case "light":
      return (<>
  <line x1="152" y1="108" x2="184" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="72" y1="108" x2="104" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="88" y1="92" x2="88" y2="124" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M172.01831,55.7398,84.00446,56A52.01509,52.01509,0,0,0,32.78594,98.96873l.00852.00156-16.3644,84.16289A28.00192,28.00192,0,0,0,63.80532,207.796l-.00165-.00173L107.03924,160l64.97907-.2602a52,52,0,0,0,0-104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M223.22831,98.71009l16.351,84.42309A28.00192,28.00192,0,0,1,192.204,207.796l.00166-.00173L149,159.832" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <line x1="152" y1="108" x2="184" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="72" y1="108" x2="104" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="88" y1="92" x2="88" y2="124" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M172.01831,55.7398,84.00446,56A52.01509,52.01509,0,0,0,32.78594,98.96873l.00852.00156-16.3644,84.16289A28.00192,28.00192,0,0,0,63.80532,207.796l-.00165-.00173L107.03924,160l64.97907-.2602a52,52,0,0,0,0-104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M223.22831,98.71009l16.351,84.42309A28.00192,28.00192,0,0,1,192.204,207.796l.00166-.00173L149,159.832" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <line x1="152" y1="108" x2="184" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="72" y1="108" x2="104" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="92" x2="88" y2="124" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M172.01831,55.7398,84.00446,56A52.01509,52.01509,0,0,0,32.78594,98.96873l.00852.00156-16.3644,84.16289A28.00192,28.00192,0,0,0,63.80532,207.796l-.00165-.00173L107.03924,160l64.97907-.2602a52,52,0,0,0,0-104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M223.22831,98.71009l16.351,84.42309A28.00192,28.00192,0,0,1,192.204,207.796l.00166-.00173L149,159.832" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const GameController = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

GameController.displayName = "GameController";

export default GameController;
