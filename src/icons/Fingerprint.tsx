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
      d="M107.99406,128.00837a20,20,0,1,1,40,0,211.06573,211.06573,0,0,1-24.95471,99.87857"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M127.99406,68.00837a60,60,0,0,1,60,60q0,12.14234-1.128,24.00022"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M51.34928,192.22271a131.40267,131.40267,0,0,0,16.64478-64.21434,59.85046,59.85046,0,0,1,19.99759-44.72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M103.31853,168.00854a170.97437,170.97437,0,0,1-20.308,49.32367"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M179.79526,192.00879a250.02989,250.02989,0,0,1-8.39355,26.119"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M22.276,160.00875a91.80964,91.80964,0,0,0,5.71806-32.00038l.0118.0001a100,100,0,0,1,200,0l-.0118-.0001a293.00937,293.00937,0,0,1-7.03556,64.00068"
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
      d="M50.68905,184.92207a127.4728,127.4728,0,0,0,13.31718-56.913A63.88065,63.88065,0,0,1,88.0059,78.04632"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128.00623,128.009a191.13407,191.13407,0,0,1-23.97573,92.98042"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96.00623,128.009a32,32,0,0,1,64,0A223.13818,223.13818,0,0,1,138.731,223.41536"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M218.56486,184.00845a289.42035,289.42035,0,0,0,5.441-56,96,96,0,0,0-192,0,95.845,95.845,0,0,1-5.46267,32.00025"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.80577,160.00843a158.95129,158.95129,0,0,1-18.1147,47.84483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M120.00621,64.50418a64.051,64.051,0,0,1,72,63.50485,258.52451,258.52451,0,0,1-1.98054,31.99945"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M183.94126,192.00844q-2.2851,8.87835-5.18116,17.5"
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
      <path d="M128.00586,24.00842a104.11791,104.11791,0,0,0-104,104A87.786,87.786,0,0,1,19,157.34241a8.00025,8.00025,0,1,0,15.08594,5.332,103.74958,103.74958,0,0,0,5.91992-34.666,88,88,0,0,1,176,0,282.27848,282.27848,0,0,1-5.29,54.45313,7.99962,7.99962,0,1,0,15.69727,3.09375,298.25279,298.25279,0,0,0,5.59277-57.54688A104.11791,104.11791,0,0,0,128.00586,24.00842Z" />
      <path d="M93.00977,84.2887A8.00025,8.00025,0,0,0,83.00195,71.80432,71.69909,71.69909,0,0,0,56.00586,128.0094,118.80142,118.80142,0,0,1,43.52637,181.361,7.99964,7.99964,0,1,0,57.85254,188.484,134.64637,134.64637,0,0,0,72.00586,128.0094,55.77314,55.77314,0,0,1,93.00977,84.2887Z" />
      <path d="M128.00586,120.0094a8.00039,8.00039,0,0,0-8,8A184.12954,184.12954,0,0,1,97.03418,217.11a7.99993,7.99993,0,1,0,13.99219,7.75977,200.16824,200.16824,0,0,0,24.97949-96.86035A8.00039,8.00039,0,0,0,128.00586,120.0094Z" />
      <path d="M128.00586,88.0094a40.04583,40.04583,0,0,0-40,40,8,8,0,0,0,16,0,24,24,0,0,1,48,0,214.09658,214.09658,0,0,1-20.51074,91.99512,8,8,0,1,0,14.47265,6.82226,229.98738,229.98738,0,0,0,22.03809-98.81738A40.04583,40.04583,0,0,0,128.00586,88.0094Z" />
      <path d="M94.39648,152.16858a8.00778,8.00778,0,0,0-9.43066,6.249,150.78976,150.78976,0,0,1-17.2041,45.4375,8.00031,8.00031,0,1,0,13.85937,7.9961,166.73312,166.73312,0,0,0,19.02442-50.252A7.99971,7.99971,0,0,0,94.39648,152.16858Z" />
      <path d="M128.00586,56.0094a72.92874,72.92874,0,0,0-8.99121.55664A8.00012,8.00012,0,1,0,120.99707,72.443a56.70946,56.70946,0,0,1,7.00879-.43359,56.0629,56.0629,0,0,1,56,56,251.41194,251.41194,0,0,1-1.919,31.00879,8,8,0,1,0,15.877,1.98047,267.59018,267.59018,0,0,0,2.042-32.98926A72.08124,72.08124,0,0,0,128.00586,56.0094Z" />
      <path d="M185.93555,184.26135a7.99377,7.99377,0,0,0-9.74121,5.75293c-1.46485,5.68848-3.15332,11.39063-5.01856,16.94824a7.9999,7.9999,0,1,0,15.168,5.0918c1.9873-5.91992,3.78613-11.99316,5.34473-18.05176A7.999,7.999,0,0,0,185.93555,184.26135Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M50.68905,184.92207a127.4728,127.4728,0,0,0,13.31718-56.913A63.88065,63.88065,0,0,1,88.0059,78.04632"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128.00623,128.009a191.13407,191.13407,0,0,1-23.97573,92.98042"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M96.00623,128.009a32,32,0,0,1,64,0A223.13818,223.13818,0,0,1,138.731,223.41536"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M218.56486,184.00845a289.42035,289.42035,0,0,0,5.441-56,96,96,0,0,0-192,0,95.845,95.845,0,0,1-5.46267,32.00025"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M92.80577,160.00843a158.95129,158.95129,0,0,1-18.1147,47.84483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M120.00621,64.50418a64.051,64.051,0,0,1,72,63.50485,258.52451,258.52451,0,0,1-1.98054,31.99945"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M183.94126,192.00844q-2.2851,8.87835-5.18116,17.5"
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
      d="M50.68905,184.92207a127.4728,127.4728,0,0,0,13.31718-56.913A63.88065,63.88065,0,0,1,88.0059,78.04632"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128.00623,128.009a191.13407,191.13407,0,0,1-23.97573,92.98042"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M96.00623,128.009a32,32,0,0,1,64,0A223.13818,223.13818,0,0,1,138.731,223.41536"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M218.56486,184.00845a289.42035,289.42035,0,0,0,5.441-56,96,96,0,0,0-192,0,95.845,95.845,0,0,1-5.46267,32.00025"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M92.80577,160.00843a158.95129,158.95129,0,0,1-18.1147,47.84483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M120.00621,64.50418a64.051,64.051,0,0,1,72,63.50485,258.52451,258.52451,0,0,1-1.98054,31.99945"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M183.94126,192.00844q-2.2851,8.87835-5.18116,17.5"
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
      d="M50.68905,184.92207a127.4728,127.4728,0,0,0,13.31718-56.913A63.88065,63.88065,0,0,1,88.0059,78.04632"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128.00623,128.009a191.13407,191.13407,0,0,1-23.97573,92.98042"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96.00623,128.009a32,32,0,0,1,64,0A223.13818,223.13818,0,0,1,138.731,223.41536"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M218.56486,184.00845a289.42035,289.42035,0,0,0,5.441-56,96,96,0,0,0-192,0,95.845,95.845,0,0,1-5.46267,32.00025"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.80577,160.00843a158.95129,158.95129,0,0,1-18.1147,47.84483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M120.00621,64.50418a64.051,64.051,0,0,1,72,63.50485,258.52451,258.52451,0,0,1-1.98054,31.99945"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M183.94126,192.00844q-2.2851,8.87835-5.18116,17.5"
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

const Fingerprint = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Fingerprint.displayName = "Fingerprint";

export default Fingerprint;
