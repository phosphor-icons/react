/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/TrashSimple";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBhOCw4LDAsMCwwLDAsMTZoOFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMTkyYTE2LDE2LDAsMCwwLDE2LTE2VjY0aDhhOCw4LDAsMCwwLDAtMTZaTTE5MiwyMDhINjRWNjRIMTkyWk04MCwyNGE4LDgsMCwwLDEsOC04aDgwYTgsOCwwLDAsMSwwLDE2SDg4QTgsOCwwLDAsMSw4MCwyNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTJINDBhNCw0LDAsMCwwLDAsOEg1MlYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIMTkyYTEyLDEyLDAsMCwwLDEyLTEyVjYwaDEyYTQsNCwwLDAsMCwwLThaTTE5NiwyMDhhNCw0LDAsMCwxLTQsNEg2NGE0LDQsMCwwLDEtNC00VjYwSDE5NlpNODQsMjRhNCw0LDAsMCwxLDQtNGg4MGE0LDQsMCwwLDEsMCw4SDg4QTQsNCwwLDAsMSw4NCwyNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTBINDBhNiw2LDAsMCwwLDAsMTJINTBWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDE5MmExNCwxNCwwLDAsMCwxNC0xNFY2MmgxMGE2LDYsMCwwLDAsMC0xMlpNMTk0LDIwOGEyLDIsMCwwLDEtMiwySDY0YTIsMiwwLDAsMS0yLTJWNjJIMTk0Wk04MiwyNGE2LDYsMCwwLDEsNi02aDgwYTYsNiwwLDAsMSwwLDEySDg4QTYsNiwwLDAsMSw4MiwyNFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBhMTIsMTIsMCwwLDAsMCwyNGg0VjIwOGEyMCwyMCwwLDAsMCwyMCwyMEgxOTJhMjAsMjAsMCwwLDAsMjAtMjBWNzJoNGExMiwxMiwwLDAsMCwwLTI0Wk0xODgsMjA0SDY4VjcySDE4OFpNNzYsMjBBMTIsMTIsMCwwLDEsODgsOGg4MGExMiwxMiwwLDAsMSwwLDI0SDg4QTEyLDEyLDAsMCwxLDc2LDIwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZhOCw4LDAsMCwxLTgsOGgtOFYyMDhhMTYsMTYsMCwwLDEtMTYsMTZINjRhMTYsMTYsMCwwLDEtMTYtMTZWNjRINDBhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsNTZaTTg4LDMyaDgwYTgsOCwwLDAsMCwwLTE2SDg4YTgsOCwwLDAsMCwwLDE2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTZWMjA4YTgsOCwwLDAsMS04LDhINjRhOCw4LDAsMCwxLTgtOFY1NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBhOCw4LDAsMCwwLDAsMTZoOFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMTkyYTE2LDE2LDAsMCwwLDE2LTE2VjY0aDhhOCw4LDAsMCwwLDAtMTZaTTE5MiwyMDhINjRWNjRIMTkyWk04MCwyNGE4LDgsMCwwLDEsOC04aDgwYTgsOCwwLDAsMSwwLDE2SDg4QTgsOCwwLDAsMSw4MCwyNFoiLz48L3N2Zz4=)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TrashSimpleIcon";

/** @deprecated Use TrashSimpleIcon */
export const TrashSimple = I;
export { I as TrashSimpleIcon };
