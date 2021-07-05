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
    <circle
      cx="104"
      cy="152"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="154.91169"
      y1="101.08831"
      x2="216"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="168 40 216 40 216 88"
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
    <circle cx="104" cy="152" r="72" opacity="0.2" />
    <circle
      cx="104"
      cy="152"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="154.91169"
      y1="101.08831"
      x2="216"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="168 40 216 40 216 88"
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
    <path d="M223.96008,39.20947c-.01111-.11377-.03271-.22412-.04858-.33642-.02063-.146-.038-.29248-.06677-.4375-.02588-.13086-.06214-.2583-.09449-.38721-.03112-.124-.05835-.24854-.09545-.37158-.03846-.12647-.08594-.24854-.13038-.37256-.04394-.12256-.08435-.24609-.13427-.3667-.04785-.11523-.104-.22559-.157-.33838-.05835-.124-.11364-.249-.17871-.3706-.05774-.10791-.12353-.21-.186-.315-.07105-.11914-.13867-.24023-.21655-.35644-.07593-.11328-.16065-.22022-.242-.3291-.0747-.1001-.14429-.20264-.22436-.3003-.1521-.185-.31372-.36181-.48169-.53271-.0166-.01709-.0304-.03564-.04712-.05225-.019-.019-.04-.03466-.05908-.05322-.16895-.16553-.34351-.32568-.52662-.47607-.0913-.07471-.1875-.14014-.28125-.21-.1156-.08692-.22888-.17627-.34924-.25684-.10754-.07227-.21936-.13428-.32971-.2002-.114-.06884-.22595-.14013-.34363-.20312-.109-.05811-.22131-.10742-.3324-.16016-.12573-.06006-.24975-.12207-.37915-.17578-.10327-.04248-.209-.07666-.31372-.11474-.1416-.05176-.2821-.10547-.42736-.14942-.09778-.02978-.197-.05029-.29554-.07617-.15417-.04-.30737-.08252-.46484-.11328-.10376-.02051-.20874-.03174-.31323-.04785-.15284-.02393-.30445-.05127-.46021-.06641-.15869-.01562-.31787-.01807-.477-.02441C216.20215,32.01172,216.10254,32,216,32H168a8,8,0,0,0,0,16h28.68591L154.62817,90.05762a80.001,80.001,0,1,0,11.31385,11.314L208,59.314V88a8,8,0,0,0,16,0V40.00244C224,39.73779,223.98608,39.47314,223.96008,39.20947Zm-74.7052,158.04541a63.96974,63.96974,0,1,1,0-90.50976A64.07169,64.07169,0,0,1,149.25488,197.25488Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="104"
      cy="152"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="154.91169"
      y1="101.08831"
      x2="216"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="168 40 216 40 216 88"
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
    <circle
      cx="104"
      cy="152"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="154.91169"
      y1="101.08831"
      x2="216"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="168 40 216 40 216 88"
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
    <circle
      cx="104"
      cy="152"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="154.91169"
      y1="101.08831"
      x2="216"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="168 40 216 40 216 88"
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

const GenderMale = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GenderMale.displayName = "GenderMale";

export default GenderMale;
