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
    <g>
      <path
        d="M119.99332,106.41921l-26-45.03332a20,20,0,0,1,34.641-20l40,69.282"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M89.35231,133.34742l-38-65.81793a20,20,0,1,1,34.641-20l34,58.88972"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M153.99332,165.30894a40,40,0,0,1,14.641-54.641l-10-17.32051a20,20,0,1,1,34.641-20l20,34.641a80,80,0,1,1-138.56406,80l-38-65.81793a20,20,0,0,1,34.641-20l18,31.17692"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </g>
    <path
      d="M176,22.99A59.97614,59.97614,0,0,1,227.96152,53"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M66.93521,240.00025A119.74962,119.74962,0,0,1,40.0943,207.99"
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
      d="M158.63434,93.34742a20,20,0,1,1,34.641-20l20,34.641a80,80,0,1,1-138.56406,80l-38-65.81793a20,20,0,0,1,34.641-20l-20-34.641a20,20,0,1,1,34.641-20l8,13.8564a20,20,0,0,1,34.641-20Z"
      opacity="0.2"
    />
    <g>
      <path
        d="M119.99332,106.41921l-26-45.03332a20,20,0,0,1,34.641-20l40,69.282"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M89.35231,133.34742l-38-65.81793a20,20,0,1,1,34.641-20l34,58.88972"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M153.99332,165.30894a40,40,0,0,1,14.641-54.641l-10-17.32051a20,20,0,1,1,34.641-20l20,34.641a80,80,0,1,1-138.56406,80l-38-65.81793a20,20,0,0,1,34.641-20l18,31.17692"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </g>
    <path
      d="M81.09415,240.0027A111.54975,111.54975,0,0,1,48,203.99065"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,31A51.97065,51.97065,0,0,1,221.0258,57.00434"
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
    <path d="M220.20312,103.98828l-19.999-34.64062a28.02682,28.02682,0,0,0-47.29834-1.92243l-17.34326-30.04a27.99212,27.99212,0,0,0-48.11328-.63549A28.003,28.003,0,0,0,44.4248,71.5293l7.35352,12.73663A27.99166,27.99166,0,0,0,29.7832,126.17041l38,65.81787a87.99976,87.99976,0,1,0,152.41992-88ZM213.54,166.62354A72.00058,72.00058,0,0,1,81.63867,183.98828l-37.999-65.81738a11.99994,11.99994,0,0,1,20.78418-12.00049l18,31.17725a8.01625,8.01625,0,0,0,.55566.82623c.05274.07.1084.13617.16309.204q.23657.2926.4956.5578c.0586.0603.11621.12207.17627.1803a8.00346,8.00346,0,0,0,.72412.62359l.01758.012a8.0088,8.0088,0,0,0,.76807.50262c.07519.04346.15088.08325.22705.12421q.31714.17148.64844.313c.07373.03149.1455.06524.22021.09454a8.05256,8.05256,0,0,0,.88867.29571c.01953.00519.03955.00782.05909.01288a8.05171,8.05171,0,0,0,.85449.16712c.08545.01226.1709.02105.25683.03058q.36036.03992.72412.04675c.05274.001.1045.01019.15723.01019.02539,0,.05127-.0047.07666-.00494a7.94421,7.94421,0,0,0,.93018-.05963c.0249-.00318.0498-.00965.0747-.01307a7.93311,7.93311,0,0,0,.84131-.16473c.08985-.0224.17823-.049.26758-.07465q.33692-.09659.66748-.22454c.08692-.03351.17383-.06482.26026-.10157a7.95946,7.95946,0,0,0,3.80175-11.35833l-18-31.17774-.0039-.00647L58.28027,63.52881A12.00012,12.00012,0,0,1,79.06543,51.5293l7.9834,13.82818.01562.02826,26,45.03369a8,8,0,1,0,13.85645-8l-25.999-45.03369a12.00023,12.00023,0,1,1,20.78515-12l29.99756,51.95752.00244.0044,6.3291,10.96338a48.025,48.025,0,0,0-10.9707,60.998,7.99959,7.99959,0,1,0,13.85547-8,32.00043,32.00043,0,0,1,11.71387-43.71289,7.96868,7.96868,0,0,0,.66992-.43329c.18017-.12921.34961-.26849.51562-.41009.03174-.02692.06641-.05048.09766-.07788.19092-.16761.37109-.344.543-.52668l.01611-.01586q.25928-.27687.48779-.575l.01758-.02087c.14453-.1886.27783-.384.4043-.5835.01318-.021.02832-.0404.0415-.06152.11377-.18286.21533-.37158.31348-.5622.022-.04248.04736-.08258.06885-.12548.0874-.17847.16308-.36206.2373-.54621.02344-.05877.05225-.115.07471-.17444.08056-.215.14892-.43408.21094-.655.0083-.03028.0205-.059.0288-.08942.00782-.02966.01172-.05988.01954-.0896.05664-.22278.10742-.44714.145-.67419.01171-.06977.01513-.14.0249-.2099.02636-.18915.05224-.3783.06494-.56922.00391-.05823.00146-.11633.00391-.17456.00927-.20325.01611-.40661.00976-.61078-.00146-.03888-.00732-.07739-.00879-.11621-.01025-.2218-.02588-.44366-.05469-.66522-.00341-.02515-.00976-.04981-.01318-.07489-.03271-.23193-.07275-.46344-.126-.69373-.00683-.02783-.0166-.05481-.02294-.08252-.05469-.22387-.11573-.4469-.19043-.66772-.022-.06525-.05127-.12811-.0752-.19281-.06641-.18012-.13184-.36029-.21191-.53735a7.98085,7.98085,0,0,0-.36475-.7121l-10-17.3208a12.00012,12.00012,0,0,1,20.78516-11.99951l20,34.64062A71.53255,71.53255,0,0,1,213.54,166.62354ZM87.668,244.56152a7.999,7.999,0,0,1-11.13281,2.01563,118.949,118.949,0,0,1-35.46289-38.58643,7.99959,7.99959,0,1,1,13.85546-8,103.08083,103.08083,0,0,0,30.72461,33.438A8.00009,8.00009,0,0,1,87.668,244.56152ZM168,30.99268A8.00009,8.00009,0,0,1,176,23h.00781A60.21143,60.21143,0,0,1,227.9541,53.00439a8.00044,8.00044,0,1,1-13.85742,8A44.16357,44.16357,0,0,0,175.99219,39,8,8,0,0,1,168,30.99268Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <g>
      <path
        d="M119.99332,106.41921l-26-45.03332a20,20,0,0,1,34.641-20l40,69.282"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <path
        d="M89.35231,133.34742l-38-65.81793a20,20,0,1,1,34.641-20l34,58.88972"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <path
        d="M153.99332,165.30894a40,40,0,0,1,14.641-54.641l-10-17.32051a20,20,0,1,1,34.641-20l20,34.641a80,80,0,1,1-138.56406,80l-38-65.81793a20,20,0,0,1,34.641-20l18,31.17692"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </g>
    <path
      d="M81.09415,240.0027A111.54975,111.54975,0,0,1,48,203.99065"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M176,31A51.97065,51.97065,0,0,1,221.0258,57.00434"
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
    <g>
      <path
        d="M119.99332,106.41921l-26-45.03332a20,20,0,0,1,34.641-20l40,69.282"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M89.35231,133.34742l-38-65.81793a20,20,0,1,1,34.641-20l34,58.88972"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M153.99332,165.30894a40,40,0,0,1,14.641-54.641l-10-17.32051a20,20,0,1,1,34.641-20l20,34.641a80,80,0,1,1-138.56406,80l-38-65.81793a20,20,0,0,1,34.641-20l18,31.17692"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </g>
    <path
      d="M81.09415,240.0027A111.54975,111.54975,0,0,1,48,203.99065"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M176,31A51.97065,51.97065,0,0,1,221.0258,57.00434"
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
    <g>
      <path
        d="M119.99332,106.41921l-26-45.03332a20,20,0,0,1,34.641-20l40,69.282"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M89.35231,133.34742l-38-65.81793a20,20,0,1,1,34.641-20l34,58.88972"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M153.99332,165.30894a40,40,0,0,1,14.641-54.641l-10-17.32051a20,20,0,1,1,34.641-20l20,34.641a80,80,0,1,1-138.56406,80l-38-65.81793a20,20,0,0,1,34.641-20l18,31.17692"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </g>
    <path
      d="M81.09415,240.0027A111.54975,111.54975,0,0,1,48,203.99065"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,31A51.97065,51.97065,0,0,1,221.0258,57.00434"
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

const HandWaving = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HandWaving.displayName = "HandWaving";

export default HandWaving;
