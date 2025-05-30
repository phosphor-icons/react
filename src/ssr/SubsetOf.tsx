/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/SubsetOf";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjA4YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLDAtMTZIMjAwQTgsOCwwLDAsMSwyMDgsMjA4Wm0tOC00OEgxMDRhNDgsNDgsMCwwLDEsMC05Nmg5NmE4LDgsMCwwLDAsMC0xNkgxMDRhNjQsNjQsMCwwLDAsMCwxMjhoOTZhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMjA4YTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLDAtOEgyMDBBNCw0LDAsMCwxLDIwNCwyMDhabS00LTQ0SDEwNGE1Miw1MiwwLDAsMSwwLTEwNGg5NmE0LDQsMCwwLDAsMC04SDEwNGE2MCw2MCwwLDAsMCwwLDEyMGg5NmE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsMjA4YTYsNiwwLDAsMS02LDZINDhhNiw2LDAsMCwxLDAtMTJIMjAwQTYsNiwwLDAsMSwyMDYsMjA4Wm0tNi00NkgxMDRhNTAsNTAsMCwwLDEsMC0xMDBoOTZhNiw2LDAsMCwwLDAtMTJIMTA0YTYyLDYyLDAsMCwwLDAsMTI0aDk2YTYsNiwwLDAsMCwwLTEyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMjA4YTEyLDEyLDAsMCwxLTEyLDEySDQ4YTEyLDEyLDAsMCwxLDAtMjRIMjAwQTEyLDEyLDAsMCwxLDIxMiwyMDhabS0xMi01MkgxMDRhNDQsNDQsMCwwLDEsMC04OGg5NmExMiwxMiwwLDAsMCwwLTI0SDEwNGE2OCw2OCwwLDAsMCwwLDEzNmg5NmExMiwxMiwwLDAsMCwwLTI0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTE3NiwxODRIODBhOCw4LDAsMCwxLDAtMTZoOTZhOCw4LDAsMCwxLDAsMTZabS02NC00OGg2NGE4LDgsMCwwLDEsMCwxNkgxMTJhNDAsNDAsMCwwLDEsMC04MGg2NGE4LDgsMCwwLDEsMCwxNkgxMTJhMjQsMjQsMCwwLDAsMCw0OFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTZWMTY4SDEwNGE1Niw1NiwwLDAsMSwwLTExMloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDgsMjA4YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLDAtMTZIMjAwQTgsOCwwLDAsMSwyMDgsMjA4Wm0tOC00OEgxMDRhNDgsNDgsMCwwLDEsMC05Nmg5NmE4LDgsMCwwLDAsMC0xNkgxMDRhNjQsNjQsMCwwLDAsMCwxMjhoOTZhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SubsetOfIcon";

/** @deprecated Use SubsetOfIcon */
export const SubsetOf = I;
export { I as SubsetOfIcon };
