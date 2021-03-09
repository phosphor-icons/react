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
      x1="47.99463"
      y1="40.00842"
      x2="207.99463"
      y2="216.00842"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M207.99463,216.00842,27.31371,216a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M141.07158,82.92842l45.27157-45.27157A8,8,0,0,1,200,43.31371v104.436"
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
      d="M199.99414,43.32213V208.00842a8,8,0,0,1-8,8H27.30785A8,8,0,0,1,21.651,202.35157L186.33729,37.66528A8,8,0,0,1,199.99414,43.32213Z"
      opacity="0.2"
    />
    <path
      d="M135.40815,88.59185l50.935-50.935A8,8,0,0,1,200,43.31371V159.64292"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <g>
      <line
        x1="47.99463"
        y1="40.00842"
        x2="207.99463"
        y2="216.00842"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M207.99463,216H27.31371a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </g>
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <g>
      <path d="M194.08057,165.025A8.00011,8.00011,0,0,0,208,159.64319V43.31409a15.99974,15.99974,0,0,0-27.31348-11.31446L129.75146,82.9342a7.99987,7.99987,0,0,0-.26269,11.03809Z" />
      <path d="M214.2179,221.02112c.13305-.16455.25988-.33252.37805-.50537.02783-.04053.054-.082.08105-.12354.113-.17187.22034-.34619.31885-.52441.03027-.05469.05786-.11084.08691-.16651.08765-.16845.17139-.33838.24634-.51123.03333-.07666.063-.15478.094-.23242.06225-.15723.12182-.31494.17382-.4751.032-.09814.05957-.19775.08777-.29736.04138-.147.08093-.29395.11377-.44238.02478-.11133.0448-.22364.06494-.33643.02552-.144.04871-.28857.06629-.43408.01416-.11621.02441-.23291.03344-.35059.01136-.14648.01917-.29345.02234-.44043.00135-.061.00916-.12011.00916-.18164s-.00781-.12109-.00928-.18213c-.00317-.13818-.0105-.27587-.02075-.41406-.01-.13428-.022-.26806-.03857-.40039-.01465-.1167-.03321-.23193-.053-.34766-.02539-.1499-.053-.29834-.08655-.44531-.02222-.09668-.04822-.19189-.0741-.28808-.04321-.16065-.08886-.31983-.1416-.47657-.02759-.082-.05884-.16308-.08935-.24414-.06226-.1665-.12745-.33056-.2002-.49121-.032-.0708-.06689-.14013-.10107-.21-.08277-.16943-.16968-.33642-.26392-.49951-.03345-.05762-.06909-.11426-.10425-.17139-.10644-.17383-.21826-.34326-.33716-.50781-.03247-.04443-.06579-.08838-.09912-.13232q-.19886-.26369-.41784-.50928c-.01551-.01709-.0282-.03613-.04383-.05322l-160-176A8.00024,8.00024,0,1,0,42.0752,45.39026l59.62866,65.59179L16,196.68616a15.99962,15.99962,0,0,0,11.31348,27.31347H207.82361c.058.00147.1156.00879.17346.00879a7.98959,7.98959,0,0,0,3.10938-.63672l.00537-.00244q.34863-.14721.68505-.33008l.02356-.01269q.31842-.17358.62342-.37891l.04736-.03174q.28491-.19482.55615-.416l.06983-.05762c.08593-.07226.175-.13769.25879-.21387.07837-.07129.14648-.14892.22143-.22265.03711-.03662.07349-.07324.10987-.11084.14733-.15039.28808-.3042.42114-.46338C214.15894,221.09534,214.18811,221.05823,214.2179,221.02112Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="47.99463"
      y1="40.00842"
      x2="207.99463"
      y2="216.00842"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M135.40815,88.59185l50.935-50.935A8,8,0,0,1,200,43.31371V159.64292"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M207.99463,216.00842,27.31371,216a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823"
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
      x1="47.99463"
      y1="40.00842"
      x2="207.99463"
      y2="216.00842"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M135.40815,88.59185l50.935-50.935A8,8,0,0,1,200,43.31371V159.64292"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M207.99463,216.00842,27.31371,216a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823"
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
      x1="47.99463"
      y1="40.00842"
      x2="207.99463"
      y2="216.00842"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M135.40815,88.59185l50.935-50.935A8,8,0,0,1,200,43.31371V159.64292"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M207.99463,216.00842,27.31371,216a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823"
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

const CellSignalSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CellSignalSlash.displayName = "CellSignalSlash";

export default CellSignalSlash;
