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
      d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="132" cy="128" r="16" />
    <circle cx="180" cy="128" r="16" />
    <circle cx="84" cy="128" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
      opacity="0.2"
    />
    <path
      d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="132" cy="128" r="12" />
    <circle cx="84" cy="128" r="12" />
    <circle cx="180" cy="128" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M132,23.99219a100.113,100.113,0,0,0-100,100v84.33349a15.68449,15.68449,0,0,0,15.667,15.66651H132a100,100,0,0,0,0-200Zm-48.00195,116.001a12,12,0,1,1,12-12A12,12,0,0,1,83.99805,139.99316Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,131.99805,139.99316Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,179.99805,139.99316Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="132" cy="128" r="10" />
    <circle cx="180" cy="128" r="10" />
    <circle cx="84" cy="128" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="132" cy="128" r="8" />
    <circle cx="84" cy="128" r="8" />
    <circle cx="180" cy="128" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="132" cy="128" r="12" />
    <circle cx="84" cy="128" r="12" />
    <circle cx="180" cy="128" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ChatTeardropDots = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ChatTeardropDots.displayName = "ChatTeardropDots";

export default ChatTeardropDots;
