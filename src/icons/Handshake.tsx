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
    <g>
      <path
        d="M236.71765,121.78477,212,134.14359l-32-61.282,24.9693-12.48465a8,8,0,0,1,10.66912,3.45246l24.59293,47.097A8,8,0,0,1,236.71765,121.78477Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M44,133.0718,19.28235,120.713a8,8,0,0,1-3.5137-10.85838l24.59293-47.097A8,8,0,0,1,51.0307,59.30511L76,71.78976Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M212,134.14359l-12,18.718L163.20286,189.6587a8,8,0,0,1-7.59714,2.10429L97.64881,177.27376a7.99992,7.99992,0,0,1-2.98764-1.45911L44,133.0718"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M200,152.86156l-44-32-12.8,9.6a32,32,0,0,1-38.4,0L99.37926,126.396a8,8,0,0,1-.85685-12.05686l39.13444-39.13444a8,8,0,0,1,5.65686-2.34315H180"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M76.57437,71.78976l47.32-14.96153a8,8,0,0,1,5.537.39169L164,72.86156"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M108,220.86156,77.86056,213.3267a7.99993,7.99993,0,0,1-3.308-1.7233L52,192"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </g>
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M200,152.86156,163.20286,189.6587a8,8,0,0,1-7.59714,2.10429L97.64881,177.27376a7.99992,7.99992,0,0,1-2.98764-1.45911L40,133.0718l32.57437-61.282,51.32-14.96153a8,8,0,0,1,5.537.39169L164,72.86156H143.31371a8,8,0,0,0-5.65686,2.34315L98.52241,114.33915a8,8,0,0,0,.85685,12.05686L104.8,130.46156a32,32,0,0,0,38.4,0l12.8-9.6Z"
      opacity="0.2"
    />
    <path
      d="M240.71765,121.78477,216,134.14359l-32-61.282,24.9693-12.48465a8,8,0,0,1,10.66912,3.45246l24.59293,47.097A8,8,0,0,1,240.71765,121.78477Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,133.0718,15.28235,120.713a8,8,0,0,1-3.5137-10.85838l24.59293-47.097A8,8,0,0,1,47.0307,59.30511L72,71.78976Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,134.14359l-16,18.718L163.20286,189.6587a8,8,0,0,1-7.59714,2.10429L97.64881,177.27376a7.99992,7.99992,0,0,1-2.98764-1.45911L40,133.0718"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,152.86156l-44-32-12.8,9.6a32,32,0,0,1-38.4,0L99.37926,126.396a8,8,0,0,1-.85685-12.05686l39.13444-39.13444a8,8,0,0,1,5.65686-2.34315H184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72.57437,71.78976l51.32-14.96153a8,8,0,0,1,5.537.39169L164,72.86156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M112,212.86156,81.86056,205.3267a7.99993,7.99993,0,0,1-3.308-1.7233L56,184"
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
    <path d="M119.76074,214.80176a7.98886,7.98886,0,0,1-9.70117,5.82031l-30.13965-7.53418a16.0992,16.0992,0,0,1-6.61719-3.44727L50.752,190.03809a8,8,0,0,1,10.4961-12.07618l22.55273,19.60352,30.13965,7.53516A7.99856,7.99856,0,0,1,119.76074,214.80176Zm132.60156-95.2461a15.88206,15.88206,0,0,1-8.0664,9.38428L221.02783,140.574l-14.94678,17.48553c-.05224.061-.10937.11725-.16308.17664-.04932.05413-.09815.10785-.14844.16034-.03808.03985-.07324.08245-.1123.12152l-36.79688,36.79834a16.0981,16.0981,0,0,1-11.35058,4.67968,15.8477,15.8477,0,0,1-3.84473-.47265L95.708,185.03418a15.9025,15.9025,0,0,1-5.97559-2.918L35.7041,139.86829l-24-12.00013a16.0014,16.0014,0,0,1-7.02734-21.7163L29.26953,59.05469A16.07985,16.07985,0,0,1,50.6084,52.1499l22.375,11.18744L121.65527,49.148a16.01609,16.01609,0,0,1,11.07325.78271l32.99707,14.93067H182.1123l23.28028-11.63965A16.07317,16.07317,0,0,1,226.73047,60.127l24.59277,47.09619A15.87906,15.87906,0,0,1,252.3623,119.55566Zm-64.63916,34.26886-31.6499-23.01788L148,136.86133a40.20558,40.20558,0,0,1-48,0l-5.4209-4.06543a16.00034,16.00034,0,0,1-1.71387-24.11328L132,69.54785a16.1947,16.1947,0,0,1,1.8335-1.55548l-7.69971-3.48407L77.41016,78.71265,50.17432,130.872,99.58887,169.5127l57.957,14.48925Zm18.68311-20.76959-27.25439-52.1936h-15.1294l-.02734.002c-.0127,0-.02491-.00189-.03711-.002H143.31348l-39.13379,39.13476,5.41992,4.06543a24.1254,24.1254,0,0,0,28.80078,0l12.79981-9.60009a7.99783,7.99783,0,0,1,9.50488-.06983l38.019,27.65027Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M240.71765,121.78477,216,134.14359l-32-61.282,24.9693-12.48465a8,8,0,0,1,10.66912,3.45246l24.59293,47.097A8,8,0,0,1,240.71765,121.78477Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M40,133.0718,15.28235,120.713a8,8,0,0,1-3.5137-10.85838l24.59293-47.097A8,8,0,0,1,47.0307,59.30511L72,71.78976Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216,134.14359l-16,18.718L163.20286,189.6587a8,8,0,0,1-7.59714,2.10429L97.64881,177.27376a7.99992,7.99992,0,0,1-2.98764-1.45911L40,133.0718"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M200,152.86156l-44-32-12.8,9.6a32,32,0,0,1-38.4,0L99.37926,126.396a8,8,0,0,1-.85685-12.05686l39.13444-39.13444a8,8,0,0,1,5.65686-2.34315H184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M72.57437,71.78976l51.32-14.96153a8,8,0,0,1,5.537.39169L164,72.86156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M112,212.86156,81.86056,205.3267a7.99993,7.99993,0,0,1-3.308-1.7233L56,184"
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
      d="M240.71765,121.78477,216,134.14359l-32-61.282,24.9693-12.48465a8,8,0,0,1,10.66912,3.45246l24.59293,47.097A8,8,0,0,1,240.71765,121.78477Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M40,133.0718,15.28235,120.713a8,8,0,0,1-3.5137-10.85838l24.59293-47.097A8,8,0,0,1,47.0307,59.30511L72,71.78976Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216,134.14359l-16,18.718L163.20286,189.6587a8,8,0,0,1-7.59714,2.10429L97.64881,177.27376a7.99992,7.99992,0,0,1-2.98764-1.45911L40,133.0718"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M200,152.86156l-44-32-12.8,9.6a32,32,0,0,1-38.4,0L99.37926,126.396a8,8,0,0,1-.85685-12.05686l39.13444-39.13444a8,8,0,0,1,5.65686-2.34315H184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M72.57437,71.78976l51.32-14.96153a8,8,0,0,1,5.537.39169L164,72.86156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M112,212.86156,81.86056,205.3267a7.99993,7.99993,0,0,1-3.308-1.7233L56,184"
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
      d="M240.71765,121.78477,216,134.14359l-32-61.282,24.9693-12.48465a8,8,0,0,1,10.66912,3.45246l24.59293,47.097A8,8,0,0,1,240.71765,121.78477Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,133.0718,15.28235,120.713a8,8,0,0,1-3.5137-10.85838l24.59293-47.097A8,8,0,0,1,47.0307,59.30511L72,71.78976Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,134.14359l-16,18.718L163.20286,189.6587a8,8,0,0,1-7.59714,2.10429L97.64881,177.27376a7.99992,7.99992,0,0,1-2.98764-1.45911L40,133.0718"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,152.86156l-44-32-12.8,9.6a32,32,0,0,1-38.4,0L99.37926,126.396a8,8,0,0,1-.85685-12.05686l39.13444-39.13444a8,8,0,0,1,5.65686-2.34315H184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72.57437,71.78976l51.32-14.96153a8,8,0,0,1,5.537.39169L164,72.86156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M112,212.86156,81.86056,205.3267a7.99993,7.99993,0,0,1-3.308-1.7233L56,184"
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

const Handshake = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Handshake.displayName = "Handshake";

export default Handshake;
