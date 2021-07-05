/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(0 256) rotate(-90)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="148 156 100 156 100 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="156"
      y1="100"
      x2="100"
      y2="156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(0 256) rotate(-90)"
      opacity="0.2"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(0 256) rotate(-90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="148 156 100 156 100 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="156"
      y1="100"
      x2="100"
      y2="156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M224,208V48a16.01833,16.01833,0,0,0-16-16H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16H208A16.01833,16.01833,0,0,0,224,208ZM161.65674,105.65723,119.314,148H148a8,8,0,0,1,0,16H100c-.05981,0-.11768-.00781-.17725-.00879-.20251-.00488-.405-.01123-.60693-.03076-.13867-.01367-.27344-.03857-.41-.05908-.12171-.01856-.24366-.03174-.36451-.05567-.14636-.02881-.2882-.06884-.43151-.10547-.10938-.02783-.21949-.05175-.32789-.084-.13732-.042-.27014-.09277-.40429-.1416-.11231-.04053-.22547-.07715-.33618-.123-.12281-.05078-.24073-.11035-.36036-.167-.1173-.05566-.23559-.10742-.35058-.169-.11231-.06054-.219-.1289-.32813-.19384-.11523-.06885-.23181-.13428-.34423-.20948-.1167-.07812-.22669-.165-.339-.249-.09681-.07227-.19629-.13965-.29053-.21728-.1825-.14991-.35657-.30909-.525-.47413-.01953-.01953-.041-.03515-.0603-.05468-.01672-.01661-.03052-.03516-.04712-.05225-.168-.1709-.32959-.34766-.48169-.53271-.08007-.09766-.14966-.2002-.22436-.3003-.0813-.10888-.166-.21582-.242-.3291-.07788-.11621-.1455-.2373-.21655-.35644-.0625-.105-.12829-.207-.186-.315-.06482-.12109-.11988-.2456-.178-.36914-.05322-.11328-.10987-.22461-.158-.34033-.04956-.11963-.0896-.24219-.13318-.36377-.04468-.125-.09253-.24756-.13123-.375-.0371-.123-.06433-.24756-.09545-.37158-.03235-.12891-.06861-.25635-.09449-.38721-.02881-.145-.04614-.2915-.06677-.4375-.01587-.1123-.03747-.22265-.04858-.33642-.026-.26367-.03992-.52832-.03992-.793V108a8,8,0,0,1,16,0v28.686l42.34326-42.34327a8.00018,8.00018,0,1,1,11.31348,11.31446Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(0 256) rotate(-90)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="148 156 100 156 100 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="156"
      y1="100"
      x2="100"
      y2="156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(0 256) rotate(-90)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="148 156 100 156 100 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="156"
      y1="100"
      x2="100"
      y2="156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(0 256) rotate(-90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="148 156 100 156 100 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="156"
      y1="100"
      x2="100"
      y2="156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ArrowSquareDownLeft = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

ArrowSquareDownLeft.displayName = "ArrowSquareDownLeft";

export default ArrowSquareDownLeft;
