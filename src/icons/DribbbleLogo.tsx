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
      cx="128"
      cy="128.0009"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M71.0247,205.27206A159.91145,159.91145,0,0,1,208.00586,127.999q8.09514,0,15.99054.78906"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M188.0294,53.09173A159.68573,159.68573,0,0,1,64.00586,111.999a160.8502,160.8502,0,0,1-30.15138-2.83671"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M85.93041,41.686a159.92755,159.92755,0,0,1,78.99267,138.00723,160.35189,160.35189,0,0,1-4.73107,38.77687"
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
    <circle cx="128" cy="128" r="96" opacity="0.2" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M71.0247,205.27116a159.91145,159.91145,0,0,1,136.98116-77.27311q8.09514,0,15.99054.78906"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188.0294,53.09083A159.68573,159.68573,0,0,1,64.00586,111.99805a160.8502,160.8502,0,0,1-30.15138-2.83671"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M85.93041,41.68508a159.92755,159.92755,0,0,1,78.99267,138.00723,160.35189,160.35189,0,0,1-4.73107,38.77687"
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
    <path d="M86.26123,32.74414a103.85849,103.85849,0,0,1,100.148,9.25537,153.22442,153.22442,0,0,1-44.543,40.48438A169.26114,169.26114,0,0,0,86.26123,32.74414Zm41.31543,57.28955A152.978,152.978,0,0,0,69.4624,42.09863a104.382,104.382,0,0,0-41.543,57.561A151.8095,151.8095,0,0,0,64,103.99805,151.0488,151.0488,0,0,0,127.57666,90.03369Zm104.22119,31.65772a103.76547,103.76547,0,0,0-32.88965-69.689,169.34119,169.34119,0,0,1-48.39453,43.94092,167.29388,167.29388,0,0,1,13.542,29.89746,168.13983,168.13983,0,0,1,67.74219-4.14941Zm-63.33008,19.53125a167.82141,167.82141,0,0,1,4.44922,38.46972,168.65237,168.65237,0,0,1-6.084,44.77832,104.24218,104.24218,0,0,0,64.68213-86.65185,152.38875,152.38875,0,0,0-63.04737,3.40381Zm-19.64062-10.45459a151.39932,151.39932,0,0,0-12.3916-27.20557A166.974,166.974,0,0,1,64,119.99805a167.82812,167.82812,0,0,1-39.23633-4.6377,103.89032,103.89032,0,0,0,35.958,91.88281A168.9649,168.9649,0,0,1,148.82715,130.76807ZM73.78369,216.72021a103.93363,103.93363,0,0,0,74.58447,13.27051,152.66635,152.66635,0,0,0,8.54883-50.29834,151.825,151.825,0,0,0-3.73291-33.46289A152.89185,152.89185,0,0,0,73.78369,216.72021Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M71.0247,205.27116a159.91145,159.91145,0,0,1,136.98116-77.27311q8.09514,0,15.99054.78906"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M188.0294,53.09083A159.68573,159.68573,0,0,1,64.00586,111.99805a160.8502,160.8502,0,0,1-30.15138-2.83671"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M85.93041,41.68508a159.92755,159.92755,0,0,1,78.99267,138.00723,160.35189,160.35189,0,0,1-4.73107,38.77687"
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
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M71.0247,205.27116a159.91145,159.91145,0,0,1,136.98116-77.27311q8.09514,0,15.99054.78906"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M188.0294,53.09083A159.68573,159.68573,0,0,1,64.00586,111.99805a160.8502,160.8502,0,0,1-30.15138-2.83671"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M85.93041,41.68508a159.92755,159.92755,0,0,1,78.99267,138.00723,160.35189,160.35189,0,0,1-4.73107,38.77687"
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
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M71.0247,205.27116a159.91145,159.91145,0,0,1,136.98116-77.27311q8.09514,0,15.99054.78906"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188.0294,53.09083A159.68573,159.68573,0,0,1,64.00586,111.99805a160.8502,160.8502,0,0,1-30.15138-2.83671"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M85.93041,41.68508a159.92755,159.92755,0,0,1,78.99267,138.00723,160.35189,160.35189,0,0,1-4.73107,38.77687"
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

const DribbbleLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DribbbleLogo.displayName = "DribbbleLogo";

export default DribbbleLogo;
