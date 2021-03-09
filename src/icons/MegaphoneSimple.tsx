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
      d="M31.99414,50.66667V189.33333a8,8,0,0,0,10.24,7.68l176-51.33333a8,8,0,0,0,5.76-7.68V102a8,8,0,0,0-5.76-7.68l-176-51.33333A8,8,0,0,0,31.99414,50.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M184,155.665V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.335"
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
      d="M42.23414,42.98667a8,8,0,0,0-10.24,7.68V189.33333a8,8,0,0,0,10.24,7.68L136,169.665V70.335Z"
      opacity="0.2"
    />
    <path
      d="M31.99414,50.66667V189.33333a8,8,0,0,0,10.24,7.68l176-51.33333a8,8,0,0,0,5.76-7.68V102a8,8,0,0,0-5.76-7.68l-176-51.33333A8,8,0,0,0,31.99414,50.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,155.665V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.335"
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
    <path d="M220.47461,86.64062,138.395,62.70068l-.05127-.01513L44.47363,35.30664A15.99966,15.99966,0,0,0,23.99414,50.667V189.333A16.0247,16.0247,0,0,0,39.94922,205.3457a16.16154,16.16154,0,0,0,4.52539-.65234L128,180.332V192a16.01833,16.01833,0,0,0,16,16h32a16.01833,16.01833,0,0,0,16-16V161.665l28.47363-8.30469A16.0825,16.0825,0,0,0,231.99414,138V102A16.08075,16.08075,0,0,0,220.47461,86.64062ZM176,192H144V175.665l32-9.333Zm39.99414-54-34.35352,10.01953-.02832.0083L144,158.99805V81.00146L215.99414,102Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M31.99414,50.66667V189.33333a8,8,0,0,0,10.24,7.68l176-51.33333a8,8,0,0,0,5.76-7.68V102a8,8,0,0,0-5.76-7.68l-176-51.33333A8,8,0,0,0,31.99414,50.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M184,155.665V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.335"
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
      d="M31.99414,50.66667V189.33333a8,8,0,0,0,10.24,7.68l176-51.33333a8,8,0,0,0,5.76-7.68V102a8,8,0,0,0-5.76-7.68l-176-51.33333A8,8,0,0,0,31.99414,50.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M184,155.665V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.335"
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
      d="M31.99414,50.66667V189.33333a8,8,0,0,0,10.24,7.68l176-51.33333a8,8,0,0,0,5.76-7.68V102a8,8,0,0,0-5.76-7.68l-176-51.33333A8,8,0,0,0,31.99414,50.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,155.665V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.335"
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

const MegaphoneSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

MegaphoneSimple.displayName = "MegaphoneSimple";

export default MegaphoneSimple;
