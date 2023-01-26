/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M148,20H108A68.1,68.1,0,0,0,40,88v80a68.1,68.1,0,0,0,68,68h40a68.1,68.1,0,0,0,68-68V88A68.1,68.1,0,0,0,148,20Zm44,68v12H140V44h8A44,44,0,0,1,192,88ZM108,44h8v56H64V88A44,44,0,0,1,108,44Zm40,168H108a44,44,0,0,1-44-44V124H192v44A44,44,0,0,1,148,212Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <path d="M128,32H108A56,56,0,0,0,52,88v24h76Z" />
    </g>
    <path d="M148,24H108A64.1,64.1,0,0,0,44,88v80a64.1,64.1,0,0,0,64,64h40a64.1,64.1,0,0,0,64-64V88A64.1,64.1,0,0,0,148,24Zm48,64v16H136V40h12A48,48,0,0,1,196,88ZM108,40h12v64H60V88A48,48,0,0,1,108,40Zm40,176H108a48,48,0,0,1-48-48V120H196v48A48,48,0,0,1,148,216Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M148,24H108A64.1,64.1,0,0,0,44,88v80a64.1,64.1,0,0,0,64,64h40a64.1,64.1,0,0,0,64-64V88A64.1,64.1,0,0,0,148,24Zm48,64v16H136V40h12A48,48,0,0,1,196,88ZM108,40h12v64H60V88A48,48,0,0,1,108,40Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M148,26H108A62.1,62.1,0,0,0,46,88v80a62.1,62.1,0,0,0,62,62h40a62.1,62.1,0,0,0,62-62V88A62.1,62.1,0,0,0,148,26Zm50,62v18H134V38h14A50,50,0,0,1,198,88ZM108,38h14v68H58V88A50,50,0,0,1,108,38Zm40,180H108a50,50,0,0,1-50-50V118H198v50A50,50,0,0,1,148,218Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M148,24H108A64.1,64.1,0,0,0,44,88v80a64.1,64.1,0,0,0,64,64h40a64.1,64.1,0,0,0,64-64V88A64.1,64.1,0,0,0,148,24Zm48,64v16H136V40h12A48,48,0,0,1,196,88ZM108,40h12v64H60V88A48,48,0,0,1,108,40Zm40,176H108a48,48,0,0,1-48-48V120H196v48A48,48,0,0,1,148,216Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M148,28H108A60,60,0,0,0,48,88v80a60,60,0,0,0,60,60h40a60,60,0,0,0,60-60V88A60,60,0,0,0,148,28Zm52,60v20H132V36h16A52,52,0,0,1,200,88ZM108,36h16v72H56V88A52,52,0,0,1,108,36Zm40,184H108a52,52,0,0,1-52-52V116H200v52A52,52,0,0,1,148,220Z" />
  </>
);

const Mouse = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Mouse.displayName = "Mouse";

export default Mouse;
