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
      d="M196,116v88.88889A7.11111,7.11111,0,0,1,188.88889,212H36a8,8,0,0,1-8-8V92a8,8,0,0,1,8-8H81.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H188A8,8,0,0,1,196,116Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M68,84V52a8,8,0,0,1,8-8h45.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H228a8,8,0,0,1,8,8v88.88889A7.11111,7.11111,0,0,1,228.88889,172H196"
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
      d="M224,72H154.6665a7.99938,7.99938,0,0,1-4.7998-1.6L122.1333,49.6a7.99938,7.99938,0,0,0-4.7998-1.6H72a7.99993,7.99993,0,0,0-8,8V80H85.3335a7.99938,7.99938,0,0,1,4.7998,1.6l27.7334,20.8a7.99938,7.99938,0,0,0,4.7998,1.6H192a7.99993,7.99993,0,0,1,8,8v64h24.88867A7.1111,7.1111,0,0,0,232,168.88892V80A7.99993,7.99993,0,0,0,224,72Z"
      opacity="0.2"
    />
    <path
      d="M200,112v88.88889A7.11111,7.11111,0,0,1,192.88889,208H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64,80V56a8,8,0,0,1,8-8h45.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.88889A7.11111,7.11111,0,0,1,224.88889,176H200"
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
    <path d="M224,64H154.667l-27.7334-20.7998A16.10323,16.10323,0,0,0,117.333,40H72A16.01833,16.01833,0,0,0,56,56V72H40A16.01833,16.01833,0,0,0,24,88V200a16.01833,16.01833,0,0,0,16,16H192.88867A15.12831,15.12831,0,0,0,208,200.88867V184h16.88867A15.12831,15.12831,0,0,0,240,168.88867V80A16.01833,16.01833,0,0,0,224,64Zm0,104H208V112a16.01833,16.01833,0,0,0-16-16H122.667L94.93359,75.2002A16.10323,16.10323,0,0,0,85.333,72H72V56h45.333l27.7334,20.7998A16.10323,16.10323,0,0,0,154.667,80H224Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M200,112v88.88889A7.11111,7.11111,0,0,1,192.88889,208H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M64,80V56a8,8,0,0,1,8-8h45.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.88889A7.11111,7.11111,0,0,1,224.88889,176H200"
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
      d="M200,112v88.88889A7.11111,7.11111,0,0,1,192.88889,208H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M64,80V56a8,8,0,0,1,8-8h45.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.88889A7.11111,7.11111,0,0,1,224.88889,176H200"
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
      d="M200,112v88.88889A7.11111,7.11111,0,0,1,192.88889,208H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64,80V56a8,8,0,0,1,8-8h45.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.88889A7.11111,7.11111,0,0,1,224.88889,176H200"
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

const Folders = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Folders.displayName = "Folders";

export default Folders;
