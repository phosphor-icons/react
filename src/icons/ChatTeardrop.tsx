/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M132,228H47.7A19.7,19.7,0,0,1,28,208.3V124A104,104,0,1,1,132,228ZM52,204h80a80,80,0,1,0-80-80Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <g opacity="0.2">
        <path d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z" />
      </g>
      <path d="M132,224H47.7A15.7,15.7,0,0,1,32,208.3V124A100,100,0,1,1,132,224ZM48,208h84a84,84,0,1,0-84-84Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M232,124A100.2,100.2,0,0,1,132,224H47.7A15.7,15.7,0,0,1,32,208.3V124a100,100,0,0,1,200,0Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M132,222H47.7A13.7,13.7,0,0,1,34,208.3V124a98,98,0,1,1,98,98Zm0-184a86.1,86.1,0,0,0-86,86v84.3a1.7,1.7,0,0,0,1.7,1.7H132a86,86,0,0,0,0-172Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M132,224H47.7A15.7,15.7,0,0,1,32,208.3V124A100,100,0,1,1,132,224ZM48,208h84a84,84,0,1,0-84-84Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M132,220H47.7A11.7,11.7,0,0,1,36,208.3V124a96,96,0,1,1,96,96Zm0-184a88.1,88.1,0,0,0-88,88v84.3a3.6,3.6,0,0,0,3.7,3.7H132a88,88,0,0,0,0-176Z" />
    </>,
  ],
]);

const ChatTeardrop: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

ChatTeardrop.displayName = "ChatTeardrop";

export default ChatTeardrop;
