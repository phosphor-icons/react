/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/HouseLine";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjA4SDIyNFYxMzZsMi4zNCwyLjM0QTgsOCwwLDAsMCwyMzcuNjYsMTI3TDEzOS4zMSwyOC42OGExNiwxNiwwLDAsMC0yMi42MiwwTDE4LjM0LDEyN2E4LDgsMCwwLDAsMTEuMzIsMTEuMzFMMzIsMTM2djcySDE2YTgsOCwwLDAsMCwwLDE2SDI0MGE4LDgsMCwwLDAsMC0xNlpNNDgsMTIwbDgwLTgwLDgwLDgwdjg4SDE2MFYxNTJhOCw4LDAsMCwwLTgtOEgxMDRhOCw4LDAsMCwwLTgsOHY1Nkg0OFptOTYsODhIMTEyVjE2MGgzMloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjEySDIyMFYxMjYuMzRsOS4xNyw5LjE3YTQsNCwwLDEsMCw1LjY2LTUuNjZMMTM2LjQ5LDMxLjUxYTEyLDEyLDAsMCwwLTE3LDBMMjEuMTcsMTI5Ljg1YTQsNCwwLDEsMCw1LjY2LDUuNjZMMzYsMTI2LjM0VjIxMkgxNmE0LDQsMCwwLDAsMCw4SDI0MGE0LDQsMCwwLDAsMC04Wk00NCwxMTguMzRsODEuMTctODEuMTdhNCw0LDAsMCwxLDUuNjYsMEwyMTIsMTE4LjM0VjIxMkgxNTZWMTUyYTQsNCwwLDAsMC00LTRIMTA0YTQsNCwwLDAsMC00LDR2NjBINDRaTTE0OCwyMTJIMTA4VjE1Nmg0MFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjEwSDIyMlYxMzEuMTdsNS43Niw1Ljc2YTYsNiwwLDAsMCw4LjQ4LTguNDlMMTM3LjksMzAuMDlhMTQsMTQsMCwwLDAtMTkuOCwwTDE5Ljc2LDEyOC40NGE2LDYsMCwwLDAsOC40OCw4LjQ5TDM0LDEzMS4xN1YyMTBIMTZhNiw2LDAsMCwwLDAsMTJIMjQwYTYsNiwwLDAsMCwwLTEyWk00NiwxMTkuMTdsODAuNTgtODAuNTlhMiwyLDAsMCwxLDIuODQsMEwyMTAsMTE5LjE3VjIxMEgxNThWMTUyYTYsNiwwLDAsMC02LTZIMTA0YTYsNiwwLDAsMC02LDZ2NThINDZaTTE0NiwyMTBIMTEwVjE1OGgzNloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjA0SDIyOFYxNDRhMTIsMTIsMCwwLDAsMTIuNDktMTkuNzhMMTQyLjE0LDI1Ljg1YTIwLDIwLDAsMCwwLTI4LjI4LDBMMTUuNTEsMTI0LjJBMTIsMTIsMCwwLDAsMjgsMTQ0djYwSDE2YTEyLDEyLDAsMCwwLDAsMjRIMjQwYTEyLDEyLDAsMCwwLDAtMjRaTTUyLDEyMS42NWw3Ni03Niw3Niw3NlYyMDRIMTY0VjE1MmExMiwxMiwwLDAsMC0xMi0xMkgxMDRhMTIsMTIsMCwwLDAtMTIsMTJ2NTJINTJaTTE0MCwyMDRIMTE2VjE2NGgyNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjA4SDIyNFYxMzZsMi4zNCwyLjM0QTgsOCwwLDAsMCwyMzcuNjYsMTI3TDEzOS4zMSwyOC42OGExNiwxNiwwLDAsMC0yMi42MiwwTDE4LjM0LDEyN2E4LDgsMCwwLDAsMTEuMzIsMTEuMzFMMzIsMTM2djcySDE2YTgsOCwwLDAsMCwwLDE2SDI0MGE4LDgsMCwwLDAsMC0xNlptLTg4LDBIMTA0VjE2MGE0LDQsMCwwLDEsNC00aDQwYTQsNCwwLDAsMSw0LDRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTE2LjY5VjIxNkgxNTJWMTUySDEwNHY2NEg0MFYxMTYuNjlsODIuMzQtODIuMzVhOCw4LDAsMCwxLDExLjMyLDBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQwLDIwOEgyMjRWMTM2bDIuMzQsMi4zNEE4LDgsMCwwLDAsMjM3LjY2LDEyN0wxMzkuMzEsMjguNjhhMTYsMTYsMCwwLDAtMjIuNjIsMEwxOC4zNCwxMjdhOCw4LDAsMCwwLDExLjMyLDExLjMxTDMyLDEzNnY3MkgxNmE4LDgsMCwwLDAsMCwxNkgyNDBhOCw4LDAsMCwwLDAtMTZaTTQ4LDEyMGw4MC04MCw4MCw4MHY4OEgxNjBWMTUyYTgsOCwwLDAsMC04LThIMTA0YTgsOCwwLDAsMC04LDh2NTZINDhabTk2LDg4SDExMlYxNjBoMzJaIi8+PC9zdmc+)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "HouseLineIcon";

/** @deprecated Use HouseLineIcon */
export const HouseLine = I;
export { I as HouseLineIcon };
