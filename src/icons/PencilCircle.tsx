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
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="176 211.161 176 176 128 72 80 176 80 211.164"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,200a24,24,0,0,1,48,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,224V200a24,24,0,0,0-48,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="98.4615"
      y1="136"
      x2="157.53847"
      y2="136"
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
      d="M80.00324,211.15879a96,96,0,1,1,95.99492-.00082l.00184.00318V176L128,72,80,176v35.16442Z"
      opacity="0.2"
    />
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
    <polyline
      points="176 211.161 176 176 128 72 80 176 80 211.164"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,192a24,24,0,0,1,48,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,224V192a24,24,0,0,0-48,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="102.15385"
      y1="128"
      x2="153.84615"
      y2="128"
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
    <path d="M201.53906,54.46094A103.99994,103.99994,0,1,0,54.46094,201.53906,103.99994,103.99994,0,1,0,201.53906,54.46094ZM110.96484,128h34.07032l15.27758,33.10168A31.92926,31.92926,0,0,0,128,170.86786a31.92926,31.92926,0,0,0-32.31274-9.76618ZM88,192a16,16,0,0,1,32,0v23.58789a87.94109,87.94109,0,0,1-32-9.21777Zm48,0a16,16,0,0,1,32,0v14.37012a87.94109,87.94109,0,0,1-32,9.21777Zm54.22461-1.77441c-2.0022,2.00225-4.08447,3.87616-6.22461,5.64471V176a7.99689,7.99689,0,0,0-.73633-3.35254l-48-104c-.00683-.01477-.0166-.02759-.02344-.0423a8.0006,8.0006,0,0,0-.4956-.89727c-.03858-.06073-.07959-.1186-.11987-.1781a7.94887,7.94887,0,0,0-.54834-.72388c-.03052-.03559-.05835-.07337-.08936-.1084a7.95215,7.95215,0,0,0-.73462-.727c-.04346-.03778-.08935-.0719-.1333-.1087a7.96445,7.96445,0,0,0-.69189-.51453c-.06617-.044-.13086-.08893-.19825-.131a8.07167,8.07167,0,0,0-.87646-.48l-.0166-.00665c-.0232-.01069-.04785-.01813-.07129-.02863a8.04837,8.04837,0,0,0-.88355-.33075c-.08471-.02649-.16992-.05-.25561-.07367a7.93969,7.93969,0,0,0-.87573-.1922c-.04273-.00677-.08423-.01715-.1272-.02325a7.93122,7.93122,0,0,0-1.04224-.07538C128.05322,64.00555,128.0271,64,128,64c-.04321,0-.08472.00854-.12769.00922a7.97635,7.97635,0,0,0-.905.06549c-.0564.00732-.11353.0108-.16944.01935a8.00689,8.00689,0,0,0-.97119.21307c-.083.02344-.16357.05127-.24561.07733a8.01776,8.01776,0,0,0-.7644.28619c-.06616.02869-.1333.05365-.19849.08405a8.00888,8.00888,0,0,0-.87207.47528c-.05517.03473-.10742.07288-.16186.10889a7.946,7.946,0,0,0-.69946.5202c-.04883.04047-.09864.07874-.14624.12036a7.92641,7.92641,0,0,0-.73365.7262c-.02563.02893-.04809.06042-.07324.08972a7.92917,7.92917,0,0,0-.55127.72778c-.04736.06989-.09424.13928-.1394.21088a8.01437,8.01437,0,0,0-.50464.91345l-22.1543,48-.00244.006-25.84326,55.994A7.99689,7.99689,0,0,0,72,176v19.8703c-2.14014-1.76855-4.22241-3.64246-6.22461-5.64471a88,88,0,1,1,124.44922,0Z" />
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
    <polyline
      points="176 211.161 176 176 128 72 80 176 80 211.164"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,192a24,24,0,0,1,48,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,224V192a24,24,0,0,0-48,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="102.15385"
      y1="128"
      x2="153.84615"
      y2="128"
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
    <polyline
      points="176 211.161 176 176 128 72 80 176 80 211.164"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,192a24,24,0,0,1,48,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,224V192a24,24,0,0,0-48,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="102.15385"
      y1="128"
      x2="153.84615"
      y2="128"
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
    <polyline
      points="176 211.161 176 176 128 72 80 176 80 211.164"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,192a24,24,0,0,1,48,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,224V192a24,24,0,0,0-48,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="102.15385"
      y1="128"
      x2="153.84615"
      y2="128"
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

const PencilCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PencilCircle.displayName = "PencilCircle";

export default PencilCircle;
