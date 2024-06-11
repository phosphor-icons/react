/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/AddressBookTabs";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS0yMCw4MGgxNnY0MEgxODhabTE2LTI0SDE4OFY1MmgxNlpNNTIsNTJIMTY0VjIwNEg1MlpNMTg4LDIwNFYxNzJoMTZ2MzJabS0zNi4zOC0zOWE0My4yMiw0My4yMiwwLDAsMC0xNS4xNi0yMywzNiwzNiwwLDEsMC01Ni45MiwwLDQzLjM1LDQzLjM1LDAsMCwwLTE1LjE2LDIzLDEyLDEyLDAsMSwwLDIzLjI0LDZjMi4yLTguNTQsMTEtMTUsMjAuMzgtMTVzMTguMTksNi40NCwyMC4zOCwxNWExMiwxMiwwLDAsMCwyMy4yNC02Wk05NiwxMjBhMTIsMTIsMCwxLDEsMTIsMTJBMTIsMTIsMCwwLDEsOTYsMTIwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCw0MGE4LDgsMCwwLDAtOCw4VjIwOGE4LDgsMCwwLDAsOCw4SDE4NFY0MFptNjQsMTA0YTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDExMiwxNDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDMySDQ4QTE2LDE2LDAsMCwwLDMyLDQ4VjIwOGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMjA4LDMyWm0tMTYsNzJoMTZ2NDhIMTkyWm0xNi0xNkgxOTJWNDhoMTZaTTQ4LDQ4SDE3NlYyMDhINDhaTTIwOCwyMDhIMTkyVjE2OGgxNnY0MFptLTU2LjI1LTQyYTM5Ljc2LDM5Ljc2LDAsMCwwLTE3LjE5LTIzLjM0LDMyLDMyLDAsMSwwLTQ1LjEyLDBBMzkuODQsMzkuODQsMCwwLDAsNzIuMjUsMTY2YTgsOCwwLDAsMCwxNS41LDRjMi42NC0xMC4yNSwxMy4wNi0xOCwyNC4yNS0xOHMyMS42Miw3LjczLDI0LjI1LDE4YTgsOCwwLDEsMCwxNS41LTRaTTk2LDEyMGExNiwxNiwwLDEsMSwxNiwxNkExNiwxNiwwLDAsMSw5NiwxMjBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTE4NCw0OGgyNFY4OEgxODRabTAsNTZoMjR2NDhIMTg0Wm0tMzgsNzEuNzVhOCw4LDAsMCwxLTkuNzQtNS43NmMtMi42My0xMC4yNi0xMy4wNi0xOC0yNC4yNS0xOHMtMjEuNjEsNy43NC0yNC4yNSwxOGE4LDgsMCwwLDEtMTUuNS00LDM5Ljg0LDM5Ljg0LDAsMCwxLDE3LjE5LTIzLjM0LDMyLDMyLDAsMSwxLDQ1LjEyLDBBMzkuNzYsMzkuNzYsMCwwLDEsMTUxLjc1LDE2Niw4LDgsMCwwLDEsMTQ2LDE3NS43NVpNMjA4LDIwOEgxODRWMTY4aDI0djQwWm0tODAtODhhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTI4LDEyMFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRabS0xOCw2OGgyMHY1MkgxOTBabTIwLTU0VjkwSDE5MFY0NmgxOEEyLDIsMCwwLDEsMjEwLDQ4Wk00NiwyMDhWNDhhMiwyLDAsMCwxLDItMkgxNzhWMjEwSDQ4QTIsMiwwLDAsMSw0NiwyMDhabTE2MiwySDE5MFYxNjZoMjB2NDJBMiwyLDAsMCwxLDIwOCwyMTBabS01OC4xOS00My40OUEzOCwzOCwwLDAsMCwxMzEuMjMsMTQzYTMwLDMwLDAsMSwwLTM4LjQ1LDBBMzgsMzgsMCwwLDAsNzQuMTksMTY2LjVhNiw2LDAsMCwwLDExLjYyLDNDODguNjcsMTU4LjM4LDk5LjkzLDE1MCwxMTIsMTUwczIzLjM0LDguMzgsMjYuMTksMTkuNDlhNiw2LDAsMCwwLDExLjYyLTNaTTk0LDEyMGExOCwxOCwwLDEsMSwxOCwxOEExOCwxOCwwLDAsMSw5NCwxMjBaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabS0xNiw3MmgxNnY0OEgxOTJabTE2LTE2SDE5MlY0OGgxNlpNNDgsNDhIMTc2VjIwOEg0OFpNMjA4LDIwOEgxOTJWMTY4aDE2djQwWm0tNTYuMjUtNDJhMzkuNzYsMzkuNzYsMCwwLDAtMTcuMTktMjMuMzQsMzIsMzIsMCwxLDAtNDUuMTIsMEEzOS44NCwzOS44NCwwLDAsMCw3Mi4yNSwxNjZhOCw4LDAsMCwwLDE1LjUsNGMyLjY0LTEwLjI1LDEzLjA2LTE4LDI0LjI1LTE4czIxLjYyLDcuNzMsMjQuMjUsMThhOCw4LDAsMSwwLDE1LjUtNFpNOTYsMTIwYTE2LDE2LDAsMSwxLDE2LDE2QTE2LDE2LDAsMCwxLDk2LDEyMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZabS0yMCw2NGgyNHY1NkgxODhabTI0LTUyVjkySDE4OFY0NGgyMEE0LDQsMCwwLDEsMjEyLDQ4Wk00NCwyMDhWNDhhNCw0LDAsMCwxLDQtNEgxODBWMjEySDQ4QTQsNCwwLDAsMSw0NCwyMDhabTE2NCw0SDE4OFYxNjRoMjR2NDRBNCw0LDAsMCwxLDIwOCwyMTJabS02MC4xMi00NWEzNi4yNCwzNi4yNCwwLDAsMC0yMC40NC0yMy42NywyOCwyOCwwLDEsMC0zMC44OCwwQTM2LjI4LDM2LjI4LDAsMCwwLDc2LjEzLDE2Nyw0LDQsMCwwLDAsNzksMTcxLjg3YTMuODcsMy44NywwLDAsMCwxLC4xMyw0LDQsMCwwLDAsMy44Ny0zQzg3LDE1Nyw5OS4wNSwxNDgsMTEyLDE0OHMyNS4wNSw5LDI4LjEyLDIxYTQsNCwwLDAsMCw3Ljc2LTJaTTkyLDEyMGEyMCwyMCwwLDEsMSwyMCwyMEEyMCwyMCwwLDAsMSw5MiwxMjBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "AddressBookTabs";
export { I as AddressBookTabs };
