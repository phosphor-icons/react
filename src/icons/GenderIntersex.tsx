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
      cx="120"
      cy="108"
      r="60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="120"
      y1="168"
      x2="120"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="204"
      x2="152"
      y2="204"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="172 24 208 24 208 60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="164.37913"
      y1="67.62087"
      x2="208"
      y2="24"
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
    <circle cx="120" cy="108" r="60" opacity="0.2" />
    <circle
      cx="120"
      cy="108"
      r="60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="120"
      y1="168"
      x2="120"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="204"
      x2="152"
      y2="204"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="168 24 208 24 208 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="164.37913"
      y1="67.62087"
      x2="208"
      y2="24"
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
    <path d="M215.96008,23.20947c-.01111-.11377-.03271-.22412-.04858-.33642-.02063-.146-.038-.29248-.06677-.4375-.02588-.13086-.06214-.2583-.09449-.38721-.03112-.124-.05835-.24854-.09545-.37158-.03846-.12647-.08594-.24854-.13038-.37256-.04394-.12256-.08435-.24609-.13427-.3667-.04785-.11523-.104-.22559-.157-.33838-.05835-.124-.11364-.249-.17871-.3706-.05774-.10791-.12353-.21-.186-.31495-.07105-.11914-.13867-.24023-.21655-.35644-.07593-.11328-.16065-.22022-.242-.3291-.0747-.1001-.14429-.20264-.22436-.3003-.1521-.18505-.31372-.36181-.48169-.53271-.0166-.01709-.0304-.03564-.04712-.05225-.01929-.01953-.04077-.03515-.0603-.05468-.16846-.165-.34253-.32422-.525-.47413-.09424-.07763-.19372-.145-.29053-.21728-.1123-.084-.22229-.1709-.339-.249-.11242-.0752-.229-.14063-.34423-.20948-.10913-.06494-.21582-.1333-.32813-.19384-.115-.06153-.23328-.11329-.35058-.16895-.11963-.05664-.23755-.11621-.36036-.167-.11071-.0459-.22387-.08252-.33618-.123-.13415-.04883-.267-.09961-.40429-.1416-.1084-.03223-.21851-.05615-.32789-.084-.14331-.03663-.28515-.07666-.43151-.10547-.12085-.02393-.2428-.03711-.36451-.05567-.13659-.02051-.27136-.04541-.41-.05908-.2019-.01953-.40442-.02588-.60693-.03076C208.11768,16.00781,208.05981,16,208,16H168a8,8,0,0,0,0,16h20.686L164.2522,56.43359A67.97437,67.97437,0,1,0,112,175.51367V196H88a8,8,0,0,0,0,16h24v20a8,8,0,0,0,16,0V212h24a8,8,0,0,0,0-16H128V175.51367A67.9301,67.9301,0,0,0,175.09692,68.2168L200,43.314V64a8,8,0,0,0,16,0V24.00244C216,23.73779,215.98608,23.47314,215.96008,23.20947ZM120,160a52,52,0,1,1,52-52A52.059,52.059,0,0,1,120,160Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="120"
      cy="108"
      r="60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="120"
      y1="168"
      x2="120"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88"
      y1="204"
      x2="152"
      y2="204"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="168 24 208 24 208 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="164.37913"
      y1="67.62087"
      x2="208"
      y2="24"
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
      cx="120"
      cy="108"
      r="60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="120"
      y1="168"
      x2="120"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88"
      y1="204"
      x2="152"
      y2="204"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="168 24 208 24 208 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="164.37913"
      y1="67.62087"
      x2="208"
      y2="24"
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
      cx="120"
      cy="108"
      r="60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="120"
      y1="168"
      x2="120"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="204"
      x2="152"
      y2="204"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="168 24 208 24 208 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="164.37913"
      y1="67.62087"
      x2="208"
      y2="24"
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

const GenderIntersex = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GenderIntersex.displayName = "GenderIntersex";

export default GenderIntersex;
