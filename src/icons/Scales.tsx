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
      x1="128"
      y1="40"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="104"
      y1="216"
      x2="152"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="56"
      y1="88"
      x2="200"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M24,168c0,17.67311,20,24,32,24s32-6.32689,32-24L56,88Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M168,136c0,17.67311,20,24,32,24s32-6.32689,32-24L200,56Z"
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
      d="M24,168c0,17.67311,20,24,32,24s32-6.32689,32-24L56,88Z"
      opacity="0.2"
    />
    <path
      d="M168,136c0,17.67311,20,24,32,24s32-6.32689,32-24L200,56Z"
      opacity="0.2"
    />
    <line
      x1="128"
      y1="40"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="216"
      x2="152"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="88"
      x2="200"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,168c0,17.67311,20,24,32,24s32-6.32689,32-24L56,88Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M168,136c0,17.67311,20,24,32,24s32-6.32689,32-24L200,56Z"
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
    <path d="M239.42773,133.0293l-32-80c-.0122-.03076-.03076-.05762-.04345-.08838a7.94631,7.94631,0,0,0-.481-.98145c-.01465-.02441-.03125-.04687-.0459-.07129a7.93042,7.93042,0,0,0-.5708-.82275c-.04443-.05615-.08691-.11328-.13281-.168a7.96437,7.96437,0,0,0-.71143-.75635c-.0459-.04248-.09472-.08007-.1416-.12158a8.00092,8.00092,0,0,0-.69189-.54639c-.06787-.04785-.13428-.09765-.20362-.144a8.16785,8.16785,0,0,0-.87256-.50146c-.06787-.03321-.13769-.06153-.20654-.09278a7.92639,7.92639,0,0,0-.82617-.32519c-.06494-.02149-.12842-.0459-.19434-.06592a8.04279,8.04279,0,0,0-1.0249-.23584c-.06445-.01025-.12939-.0166-.19385-.02588a7.97774,7.97774,0,0,0-.99365-.07519C200.062,48.00684,200.03174,48,200,48c-.01221,0-.02393.00293-.03613.00293a7.87125,7.87125,0,0,0-1.07032.081c-.08789.01221-.17382.02881-.26074.044-.123.02148-.24511.03516-.36816.0625L136,62.02686V40a8,8,0,0,0-16,0V65.58252L54.26465,80.19043c-.16553.03662-.32373.0874-.48438.13379-.06933.02-.14013.03564-.209.05762a7.95224,7.95224,0,0,0-.97656.38378c-.05762.02735-.1128.05762-.16944.08643a7.92974,7.92974,0,0,0-.81787.47022c-.04394.0288-.08935.05517-.13281.085a7.96988,7.96988,0,0,0-.82764.65381c-.04834.04345-.09326.08984-.14062.13476a8.08693,8.08693,0,0,0-.63086.66992c-.04053.04834-.0835.09375-.123.14356a8.00617,8.00617,0,0,0-.58935.84961c-.041.06787-.07862.1372-.11768.20605a8.00524,8.00524,0,0,0-.45752.93262c-.00439.01123-.01123.02051-.01562.03174l-.00977.0249-.01416.03467L16.57227,165.0293A7.99723,7.99723,0,0,0,16,168c0,23.3125,24.53516,32,40,32s40-8.6875,40-32a7.99723,7.99723,0,0,0-.57227-2.9707L66.92334,93.76758,120,81.97314V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.41748l50.94531-11.32129-26.373,65.93311A7.99723,7.99723,0,0,0,160,136c0,23.3125,24.53516,32,40,32s40-8.6875,40-32A7.99723,7.99723,0,0,0,239.42773,133.0293ZM32.61621,168,56,109.541,79.38379,168Zm144-32L200,77.541,223.38379,136Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="40"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="104"
      y1="216"
      x2="152"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="56"
      y1="88"
      x2="200"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M24,168c0,17.67311,20,24,32,24s32-6.32689,32-24L56,88Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M168,136c0,17.67311,20,24,32,24s32-6.32689,32-24L200,56Z"
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
      x1="128"
      y1="40"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="104"
      y1="216"
      x2="152"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="56"
      y1="88"
      x2="200"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M24,168c0,17.67311,20,24,32,24s32-6.32689,32-24L56,88Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M168,136c0,17.67311,20,24,32,24s32-6.32689,32-24L200,56Z"
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
      x1="128"
      y1="40"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="216"
      x2="152"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="88"
      x2="200"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,168c0,17.67311,20,24,32,24s32-6.32689,32-24L56,88Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M168,136c0,17.67311,20,24,32,24s32-6.32689,32-24L200,56Z"
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

const Scales = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Scales.displayName = "Scales";

export default Scales;
