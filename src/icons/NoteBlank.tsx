/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M208,28H48A20.1,20.1,0,0,0,28,48V208a20.1,20.1,0,0,0,20,20H156.7a19.7,19.7,0,0,0,14.1-5.9l51.3-51.3a19.7,19.7,0,0,0,5.9-14.1V48A20.1,20.1,0,0,0,208,28ZM52,52H204v92H156a12,12,0,0,0-12,12v48H52ZM168,191V168h23Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <polygon points="216 160 160 160 160 216 216 160" />
    </g>
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.7a15.9,15.9,0,0,0,11.3-4.7L219.3,168a15.9,15.9,0,0,0,4.7-11.3V48A16,16,0,0,0,208,32ZM48,48H208V152H160a8,8,0,0,0-8,8v48H48ZM196.7,168,168,196.7V168Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.7a15.9,15.9,0,0,0,11.3-4.7L219.3,168a15.9,15.9,0,0,0,4.7-11.3V48A16,16,0,0,0,208,32ZM160,204.7V160h44.7Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H156.7a13.1,13.1,0,0,0,5.6-1.2h.2a14.2,14.2,0,0,0,4.1-2.8l51.3-51.3a14.3,14.3,0,0,0,4.1-9.9V48A14,14,0,0,0,208,34ZM46,208V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2V154H160a6,6,0,0,0-6,6v50H48A2,2,0,0,1,46,208Zm120-6.5V166h35.5Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M224,156.7V48a16,16,0,0,0-16-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.7a15.9,15.9,0,0,0,11.3-4.7L219.3,168a16.7,16.7,0,0,0,3.3-4.7c0-.1,0-.1.1-.2A17.4,17.4,0,0,0,224,156.7ZM48,48H208V152H160a8,8,0,0,0-8,8v48H48ZM196.7,168,168,196.7V168Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H156.7a11.9,11.9,0,0,0,8.5-3.5l51.3-51.3a11.9,11.9,0,0,0,3.5-8.5V48A12,12,0,0,0,208,36ZM164,206.3V164h42.4ZM212,156H160a4,4,0,0,0-4,4v52H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" />
  </>
);

const NoteBlank = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

NoteBlank.displayName = "NoteBlank";

export default NoteBlank;
