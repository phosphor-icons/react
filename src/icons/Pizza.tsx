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
      d="M23.44054,75.69239a8.02578,8.02578,0,0,1,2.13281-10.834,176.07221,176.07221,0,0,1,204.85329,0,8.02577,8.02577,0,0,1,2.13281,10.834L134.74929,229.394a8,8,0,0,1-13.49858,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M41.07368,103.4019a136.0151,136.0151,0,0,1,173.85255-.00008"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M159.4017,190.65505a28.00364,28.00364,0,1,1,29.099-45.72666"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M59.71643,132.69767a28.00252,28.00252,0,1,1,29.18265,45.85854"
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
      d="M144,156a27.9931,27.9931,0,0,1,49.13477-18.35474l26.11962-41.04492a144.01914,144.01914,0,0,0-182.50878,0l21.15918,33.25025A27.99977,27.99977,0,1,1,84,168c-.62646,0-1.24561-.02808-1.86182-.06836L121.251,229.394a8,8,0,0,0,13.49853,0l29.5708-46.46924A28.00554,28.00554,0,0,1,144,156Z"
      opacity="0.2"
    />
    <path
      d="M23.44054,75.69239a8.02578,8.02578,0,0,1,2.13281-10.834,176.07221,176.07221,0,0,1,204.85329,0,8.02577,8.02577,0,0,1,2.13281,10.834L134.74929,229.394a8,8,0,0,1-13.49858,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M36.74566,96.60039a144.01884,144.01884,0,0,1,182.50866,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M164.31747,182.93292a28.00353,28.00353,0,1,1,28.82269-45.29368"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M57.89918,129.84281A28.00328,28.00328,0,1,1,84,168q-.91436,0-1.81448-.05785"
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
    <path d="M239.30908,79.9873a16.03867,16.03867,0,0,0-4.22119-21.63085,184.07289,184.07289,0,0,0-214.17578,0A16.03867,16.03867,0,0,0,16.69092,79.9873h.00049l97.81,153.70166a15.99973,15.99973,0,0,0,26.99708,0l58.41259-91.79052c.01807-.0293.0376-.05811.05567-.08789ZM23.44043,75.69238ZM128,225.09912,95.54053,174.09155a36.00171,36.00171,0,1,0-37.55469-59.0144L47.40723,98.45361a135.99256,135.99256,0,0,1,161.18554,0L191.30127,125.626a35.99008,35.99008,0,0,0-38.64453,60.7268Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M23.44054,75.69239a8.02578,8.02578,0,0,1,2.13281-10.834,176.07221,176.07221,0,0,1,204.85329,0,8.02577,8.02577,0,0,1,2.13281,10.834L134.74929,229.394a8,8,0,0,1-13.49858,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M36.74566,96.60039a144.01884,144.01884,0,0,1,182.50866,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M164.31747,182.93292a28.00353,28.00353,0,1,1,28.82269-45.29368"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M57.89918,129.84281A28.00328,28.00328,0,1,1,84,168q-.91436,0-1.81448-.05785"
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
      d="M23.44054,75.69239a8.02578,8.02578,0,0,1,2.13281-10.834,176.07221,176.07221,0,0,1,204.85329,0,8.02577,8.02577,0,0,1,2.13281,10.834L134.74929,229.394a8,8,0,0,1-13.49858,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M36.74566,96.60039a144.01884,144.01884,0,0,1,182.50866,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M164.31747,182.93292a28.00353,28.00353,0,1,1,28.82269-45.29368"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M57.89918,129.84281A28.00328,28.00328,0,1,1,84,168q-.91436,0-1.81448-.05785"
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
      d="M23.44054,75.69239a8.02578,8.02578,0,0,1,2.13281-10.834,176.07221,176.07221,0,0,1,204.85329,0,8.02577,8.02577,0,0,1,2.13281,10.834L134.74929,229.394a8,8,0,0,1-13.49858,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M36.74566,96.60039a144.01884,144.01884,0,0,1,182.50866,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M164.31747,182.93292a28.00353,28.00353,0,1,1,28.82269-45.29368"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M57.89918,129.84281A28.00328,28.00328,0,1,1,84,168q-.91436,0-1.81448-.05785"
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

const Pizza = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Pizza.displayName = "Pizza";

export default Pizza;
