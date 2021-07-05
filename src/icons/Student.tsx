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
    <line
      x1="32"
      y1="64"
      x2="32"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M54.23194,215.99924a88.02249,88.02249,0,0,1,147.53587-.00038"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="224 64 128 96 32 64 128 32 224 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M169.33686,82.22033a56,56,0,1,1-82.67374,0"
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
    <polygon points="224 64 128 96 32 64 128 32 224 64" opacity="0.2" />
    <line
      x1="32"
      y1="64"
      x2="32"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M54.23194,215.99924a88.02249,88.02249,0,0,1,147.53587-.00038"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="224 64 128 96 32 64 128 32 224 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M169.33686,82.22033a56,56,0,1,1-82.67374,0"
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
    <path d="M226.52979,56.41016l-96-32a8.00672,8.00672,0,0,0-5.05958,0L29.6239,56.35889l-.00976.00341-.14393.04786c-.02819.00927-.053.02465-.08105.03442a7.91407,7.91407,0,0,0-1.01074.42871c-.03748.019-.07642.03516-.11353.05469a7.97333,7.97333,0,0,0-.93139.58325c-.06543.04688-.129.09522-.19288.144a8.08459,8.08459,0,0,0-.81872.71119c-.0238.02416-.04443.05053-.06787.0747a8.0222,8.0222,0,0,0-.661.783c-.04163.05567-.08472.10986-.12476.16675a8.00177,8.00177,0,0,0-.56714.92993c-.02588.04981-.04809.10083-.073.15112a7.97024,7.97024,0,0,0-.40515.97608c-.01062.03149-.0238.06128-.03405.093a7.95058,7.95058,0,0,0-.26282,1.08544c-.01331.07666-.02405.15308-.035.23A8.02888,8.02888,0,0,0,24,64v80a8,8,0,0,0,16,0V75.09985L73.58521,86.29492a63.9717,63.9717,0,0,0,20.42944,87.89746,95.88087,95.88087,0,0,0-46.48389,37.4375,7.9997,7.9997,0,1,0,13.40235,8.73828,80.023,80.023,0,0,1,134.1333,0,7.99969,7.99969,0,1,0,13.40234-8.73828,95.87941,95.87941,0,0,0-46.4834-37.43725,63.972,63.972,0,0,0,20.42944-87.89771l44.115-14.70508a8.0005,8.0005,0,0,0,0-15.17968ZM128,168A47.99154,47.99154,0,0,1,89.34875,91.54932l36.12146,12.04052a8.00672,8.00672,0,0,0,5.05958,0l36.12146-12.04052A47.99154,47.99154,0,0,1,128,168Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="32"
      y1="64"
      x2="32"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M54.23194,215.99924a88.02249,88.02249,0,0,1,147.53587-.00038"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polygon
      points="224 64 128 96 32 64 128 32 224 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M169.33686,82.22033a56,56,0,1,1-82.67374,0"
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
    <line
      x1="32"
      y1="64"
      x2="32"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M54.23194,215.99924a88.02249,88.02249,0,0,1,147.53587-.00038"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polygon
      points="224 64 128 96 32 64 128 32 224 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M169.33686,82.22033a56,56,0,1,1-82.67374,0"
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
    <line
      x1="32"
      y1="64"
      x2="32"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M54.23194,215.99924a88.02249,88.02249,0,0,1,147.53587-.00038"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="224 64 128 96 32 64 128 32 224 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M169.33686,82.22033a56,56,0,1,1-82.67374,0"
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

const Student = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Student.displayName = "Student";

export default Student;
