/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Scooter";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTM2Yy0xLjE4LDAtMi4zNS4wNi0zLjUxLjE3bC0zMi45LTk4LjdBOCw4LDAsMCwwLDE2OCwzMkgxMzZhOCw4LDAsMCwwLDAsMTZoMjYuMjNsMTcuNDQsNTIuMzFMMTI0LjIxLDE2OEg3OS43N2EzNiwzNiwwLDEsMC0xLjgzLDE2SDEyOGE4LDgsMCwwLDAsNi4xOS0yLjkzbDUxLjQ2LTYyLjgxLDcuNjYsMjNBMzYsMzYsMCwxLDAsMjEyLDEzNlpNNDQsMTkyYTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDQ0LDE5MlptMTY4LDBhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsMjEyLDE5MloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTQwYTMxLjI5LDMxLjI5LDAsMCwwLTYuMjQuNjJsLTM0LTEwMS44OEE0LDQsMCwwLDAsMTY4LDM2SDEzNmE0LDQsMCwwLDAsMCw4aDI5LjEybDE5LDU3LjE0LTU4LDcwLjg2SDc2YTMyLDMyLDAsMSwwLTEsOGg1M2E0LDQsMCwwLDAsMy4wOS0xLjQ2bDU2LjA2LTY4LjQzLDExLDMzQTMyLDMyLDAsMSwwLDIxMiwxNDBaTTQ0LDE5NmEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSw0NCwxOTZabTE2OCwwYTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDIxMiwxOTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTM4YTM0LjMyLDM0LjMyLDAsMCwwLTQuODkuMzZMMTczLjY5LDM4LjFBNiw2LDAsMCwwLDE2OCwzNEgxMzZhNiw2LDAsMCwwLDAsMTJoMjcuNjhsMTguMjQsNTQuNzNMMTI1LjE2LDE3MEg3Ny45NGEzNCwzNCwwLDEsMC0xLjQ0LDEySDEyOGE2LDYsMCwwLDAsNC42NC0yLjJsNTMuNzYtNjUuNjIsOS4zMywyOEEzNCwzNCwwLDEsMCwyMTIsMTM4Wk00NCwxOTRhMjIsMjIsMCwxLDEsMjItMjJBMjIsMjIsMCwwLDEsNDQsMTk0Wm0xNjgsMGEyMiwyMiwwLDEsMSwyMi0yMkEyMiwyMiwwLDAsMSwyMTIsMTk0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTMybC0uNjgsMEwxNzkuMzgsMzYuMjFBMTIsMTIsMCwwLDAsMTY4LDI4SDEzNmExMiwxMiwwLDAsMCwwLDI0aDIzLjM1bDE0LjgzLDQ0LjQ5TDExNC41OSwxNjRIODMuMmE0MCw0MCwwLDEsMC0yLjU1LDI0SDEyMGExMiwxMiwwLDAsMCw5LTQuMDZsNTQtNjEuMTMsNS42LDE2LjgxQTQwLDQwLDAsMSwwLDIxMiwxMzJaTTQ0LDE4OGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSw0NCwxODhabTE2OCwwYTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDIxMiwxODhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTcyYTMyLDMyLDAsMSwxLTQ5LjM4LTI2Ljg1bC05LTI2Ljg5LTUxLjQ2LDYyLjgxQTgsOCwwLDAsMSwxMjgsMTg0SDczLjY2YTMyLDMyLDAsMSwxLDIuMDgtMTZoNDguNDdsNTUuNDYtNjcuNjlMMTYyLjIzLDQ4SDEzNmE4LDgsMCwwLDEsMC0xNmgzMmE4LDgsMCwwLDEsNy41OSw1LjQ3TDIwOS44LDE0MC4wOGMuNzItLjA1LDEuNDYtLjA4LDIuMi0uMDhBMzIsMzIsMCwwLDEsMjQ0LDE3MloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03MiwxNzJhMjgsMjgsMCwxLDEtMjgtMjhBMjgsMjgsMCwwLDEsNzIsMTcyWm0xNDAtMjhhMjgsMjgsMCwxLDAsMjgsMjhBMjgsMjgsMCwwLDAsMjEyLDE0NFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTIsMTM2Yy0xLjE4LDAtMi4zNS4wNi0zLjUxLjE3bC0zMi45LTk4LjdBOCw4LDAsMCwwLDE2OCwzMkgxMzZhOCw4LDAsMCwwLDAsMTZoMjYuMjNsMTcuNDQsNTIuMzFMMTI0LjIxLDE2OEg3OS43N2EzNiwzNiwwLDEsMC0xLjgzLDE2SDEyOGE4LDgsMCwwLDAsNi4xOS0yLjkzbDUxLjQ2LTYyLjgxLDcuNjYsMjNBMzYsMzYsMCwxLDAsMjEyLDEzNlpNNDQsMTkyYTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDQ0LDE5MlptMTY4LDBhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsMjEyLDE5MloiLz48L3N2Zz4=)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ScooterIcon";

/** @deprecated Use ScooterIcon */
export const Scooter = I;
export { I as ScooterIcon };
