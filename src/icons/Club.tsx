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
    <path
      d="M104.512,186.61814a47.9857,47.9857,0,1,1-17.29771-85.30105l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00516,48.00516,0,1,1-17.28893,85.299L160,232H96Z"
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
    <path
      d="M112.51708,179.15431a47.97767,47.97767,0,1,1-25.30276-77.83722l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00575,48.00575,0,1,1-25.29289,77.8364L160,232H96Z"
      opacity="0.2"
    />
    <path
      d="M112.51708,179.15431a47.97767,47.97767,0,1,1-25.30276-77.83722l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00575,48.00575,0,1,1-25.29289,77.8364L160,232H96Z"
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
    <path d="M232,148a52.00505,52.00505,0,0,1-80.459,43.52539l10.6538,34.08789A7.99984,7.99984,0,0,1,154.55908,236H101.44092a7.99954,7.99954,0,0,1-7.63526-10.38672L104.45459,191.542a51.7046,51.7046,0,0,1-29.9624,8.43653c-27.72657-.78516-50.377-24.00489-50.4917-51.75977A51.99976,51.99976,0,0,1,76,96q2.02881,0,4.04883.15625a52.00294,52.00294,0,1,1,95.89648,0,53.33621,53.33621,0,0,1,5.46387-.1377A51.70261,51.70261,0,0,1,232,148Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M112.51708,179.15431a47.97767,47.97767,0,1,1-25.30276-77.83722l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00575,48.00575,0,1,1-25.29289,77.8364L160,232H96Z"
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
    <path
      d="M112.51708,179.15431a47.97767,47.97767,0,1,1-25.30276-77.83722l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00575,48.00575,0,1,1-25.29289,77.8364L160,232H96Z"
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
    <path
      d="M112.51708,179.15431a47.97767,47.97767,0,1,1-25.30276-77.83722l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00575,48.00575,0,1,1-25.29289,77.8364L160,232H96Z"
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

const Club = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Club.displayName = "Club";

export default Club;
