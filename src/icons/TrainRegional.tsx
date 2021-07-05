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
      d="M70.11037,32H185.88963a8,8,0,0,1,7.71811,5.89506L216,120l-22.39226,82.10494A8,8,0,0,1,185.88963,208H70.11037a8,8,0,0,1-7.71811-5.89506L40,120,62.39226,37.89506A8,8,0,0,1,70.11037,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="208"
      x2="128"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="40 120 128 136 216 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="96"
      y1="88"
      x2="160"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="96"
      y1="208"
      x2="72"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="160"
      y1="208"
      x2="184"
      y2="240"
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
      d="M40,120l88,16,88-16-22.39226,82.10494A8,8,0,0,1,185.88963,208H70.11037a8,8,0,0,1-7.71811-5.89506Z"
      opacity="0.2"
    />
    <path
      d="M70.11037,32H185.88963a8,8,0,0,1,7.71811,5.89506L216,120l-22.39226,82.10494A8,8,0,0,1,185.88963,208H70.11037a8,8,0,0,1-7.71811-5.89506L40,120,62.39226,37.89506A8,8,0,0,1,70.11037,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="208"
      x2="128"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="40 120 128 136 216 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="88"
      x2="160"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="208"
      x2="72"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="208"
      x2="184"
      y2="240"
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
    <g>
      <path d="M160,80H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z" />
      <path d="M223.99023,119.85681q-.00732-.37884-.05078-.76166c-.011-.09741-.02295-.194-.03759-.291-.012-.07855-.01661-.15656-.03077-.23529-.03271-.18048-.08007-.35437-.124-.52967-.01221-.04766-.01636-.09668-.0293-.14416l-.033-.12073-.00122-.00421L201.3252,35.79A16.03362,16.03362,0,0,0,185.88965,24H70.11035A16.03362,16.03362,0,0,0,54.6748,35.79L32.31665,117.76892l-.002.00733-.03247.11877c-.0127.047-.01685.09546-.02881.14264-.04444.17578-.09155.35022-.12451.53119-.01416.07873-.0188.15674-.03077.23529-.01464.097-.02661.1936-.03759.291q-.044.38316-.05078.76166c-.00123.06708-.00611.13373-.00562.20081a7.94859,7.94859,0,0,0,.06567.98889c.00269.0202.00757.0401.0105.06036a7.95052,7.95052,0,0,0,.18115.89508c.00879.03406.01148.06909.02076.103L54.6748,204.209A16.03394,16.03394,0,0,0,70.11035,216h9.88941L65.59961,235.2002a8.00019,8.00019,0,0,0,12.80078,9.5996L100.00024,216h55.99952l21.59985,28.7998a8.00019,8.00019,0,0,0,12.80078-9.5996L176.00024,216h9.88941a16.03394,16.03394,0,0,0,15.43555-11.791l22.39257-82.104c.00928-.03394.012-.069.02076-.103a7.95052,7.95052,0,0,0,.18115-.89508c.00293-.02026.00781-.04016.0105-.06036a7.94859,7.94859,0,0,0,.06567-.98889C223.99634,119.99054,223.99146,119.92389,223.99023,119.85681ZM136,192a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0Zm-8-64.13135L50.0127,113.68927,70.10645,40h115.7832l20.09717,73.68933Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M70.11037,32H185.88963a8,8,0,0,1,7.71811,5.89506L216,120l-22.39226,82.10494A8,8,0,0,1,185.88963,208H70.11037a8,8,0,0,1-7.71811-5.89506L40,120,62.39226,37.89506A8,8,0,0,1,70.11037,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="208"
      x2="128"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="40 120 128 136 216 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="88"
      x2="160"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="208"
      x2="72"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160"
      y1="208"
      x2="184"
      y2="240"
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
      d="M70.11037,32H185.88963a8,8,0,0,1,7.71811,5.89506L216,120l-22.39226,82.10494A8,8,0,0,1,185.88963,208H70.11037a8,8,0,0,1-7.71811-5.89506L40,120,62.39226,37.89506A8,8,0,0,1,70.11037,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="208"
      x2="128"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="40 120 128 136 216 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="88"
      x2="160"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="208"
      x2="72"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160"
      y1="208"
      x2="184"
      y2="240"
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
      d="M70.11037,32H185.88963a8,8,0,0,1,7.71811,5.89506L216,120l-22.39226,82.10494A8,8,0,0,1,185.88963,208H70.11037a8,8,0,0,1-7.71811-5.89506L40,120,62.39226,37.89506A8,8,0,0,1,70.11037,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="208"
      x2="128"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="40 120 128 136 216 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="88"
      x2="160"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="208"
      x2="72"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="208"
      x2="184"
      y2="240"
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

const TrainRegional = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TrainRegional.displayName = "TrainRegional";

export default TrainRegional;
