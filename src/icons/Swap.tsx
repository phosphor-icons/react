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
      d="M80,159.99316H208a8,8,0,0,0,8-8v-104a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="104 136 80 160 104 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M176,96H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H160a8,8,0,0,0,8-8v-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="152 119.993 176 95.993 152 71.993"
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
      d="M208,40H96a8,8,0,0,0-8,8V96H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H160a8,8,0,0,0,8-8V160h40a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40Z"
      opacity="0.2"
    />
    <path
      d="M80,159.99316H208a8,8,0,0,0,8-8v-104a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="104 136 80 160 104 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,96H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H160a8,8,0,0,0,8-8v-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 119.993 176 95.993 152 71.993"
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
    <path d="M224,47.99316v104a16.01833,16.01833,0,0,1-16,16H112V184a8.00018,8.00018,0,0,1-13.65674,5.65723l-24-24a7.98872,7.98872,0,0,1-1.36011-1.822c-.00622-.01124-.01367-.022-.01977-.03333-.10376-.192-.19556-.38843-.28259-.58655-.01892-.04309-.04114-.08435-.05921-.12768-.07483-.179-.13794-.36121-.19922-.54407-.0227-.06751-.04944-.13318-.07043-.20154-.0531-.17383-.09436-.34985-.13538-.52624-.01867-.08045-.04223-.15882-.05859-.24012-.03809-.19043-.06348-.38232-.08765-.57446-.00879-.06934-.023-.137-.02978-.20691-.02637-.26575-.04053-.53235-.04041-.79907L72,159.99316c0-.025.00342-.04907.00366-.07409.00244-.23572.0127-.47132.03577-.70606.01526-.15759.043-.31128.06726-.46618.01587-.09986.02612-.20032.04565-.29969.03565-.18139.083-.358.13062-.53479.01953-.072.03418-.145.05566-.21655.05591-.18652.123-.3678.1919-.54834.02331-.06116.04248-.12329.06738-.184.07739-.18884.16553-.37146.25659-.55286.02527-.05041.04688-.10229.07324-.15222.1084-.20459.22706-.40222.35218-.59582.0155-.024.02844-.04907.04431-.073a8.02882,8.02882,0,0,1,1.09057-1.31836l23.92847-23.92847A8.00037,8.00037,0,0,1,112,136v15.99316h96v-104H96v8a8,8,0,0,1-16,0v-8a16.01833,16.01833,0,0,1,16-16H208A16.01833,16.01833,0,0,1,224,47.99316ZM168,192a8.00008,8.00008,0,0,0-8,8v8H48V104h96v15.99316a8.00018,8.00018,0,0,0,13.65674,5.65723l23.92847-23.92847a8.0284,8.0284,0,0,0,1.09057-1.31836c.01587-.02392.02881-.049.04431-.073.12512-.19361.24378-.39124.35218-.59583.02648-.05017.04809-.10217.0736-.15283.09095-.18091.17884-.36316.256-.55164.02539-.06176.04492-.12524.06872-.1875.06848-.17968.13513-.35986.1908-.54541.02148-.07153.03613-.14453.05566-.21655.04761-.17676.095-.35339.13062-.53479.01953-.09936.02978-.19983.04565-.29968.02429-.15491.052-.3086.06726-.46619.02307-.23474.03333-.47034.03577-.70605C183.99658,96.04907,184,96.025,184,96l-.00012-.00208c.00012-.26672-.014-.53332-.04041-.79907-.00683-.06994-.021-.13757-.02978-.20691-.02417-.19214-.04956-.384-.08765-.57446-.01636-.0813-.03992-.15967-.05859-.24011-.041-.17639-.08228-.35242-.13538-.52625-.02087-.06787-.04748-.13305-.06995-.20019-.06152-.1836-.12475-.36634-.2-.5459-.01782-.04248-.0393-.08252-.05786-.12463-.08716-.1991-.17944-.39637-.28369-.58912-.0061-.01135-.01355-.02209-.01977-.03332a7.9885,7.9885,0,0,0-1.36011-1.822l-24-24A8.00037,8.00037,0,0,0,144,71.99316V88H48a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16H160a16.01833,16.01833,0,0,0,16-16v-8A8.00008,8.00008,0,0,0,168,192Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M80,159.99316H208a8,8,0,0,0,8-8v-104a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="104 136 80 160 104 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M176,96H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H160a8,8,0,0,0,8-8v-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="152 119.993 176 95.993 152 71.993"
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
      d="M80,159.99316H208a8,8,0,0,0,8-8v-104a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="104 136 80 160 104 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M176,96H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H160a8,8,0,0,0,8-8v-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="152 119.993 176 95.993 152 71.993"
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
      d="M80,159.99316H208a8,8,0,0,0,8-8v-104a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="104 136 80 160 104 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,96H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H160a8,8,0,0,0,8-8v-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 119.993 176 95.993 152 71.993"
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

const Swap = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Swap.displayName = "Swap";

export default Swap;
