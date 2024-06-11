/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/TextIndent";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTgsOCwwLDAsMS04LDhIMTEyYTgsOCwwLDAsMSwwLTE2SDIxNkE4LDgsMCwwLDEsMjI0LDEyOFpNMTEyLDcySDIxNmE4LDgsMCwwLDAsMC0xNkgxMTJhOCw4LDAsMCwwLDAsMTZaTTIxNiwxODRINDBhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2Wk0zNC4zNCwxNDEuNjZhOCw4LDAsMCwwLDExLjMyLDBsNDAtNDBhOCw4LDAsMCwwLDAtMTEuMzJsLTQwLTQwQTgsOCwwLDAsMCwzNC4zNCw2MS42Nkw2OC42OSw5NiwzNC4zNCwxMzAuMzRBOCw4LDAsMCwwLDM0LjM0LDE0MS42NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTI4YTQsNCwwLDAsMS00LDRIMTEyYTQsNCwwLDAsMSwwLThIMjE2QTQsNCwwLDAsMSwyMjAsMTI4Wk0xMTIsNjhIMjE2YTQsNCwwLDAsMCwwLThIMTEyYTQsNCwwLDAsMCwwLDhaTTIxNiwxODhINDBhNCw0LDAsMCwwLDAsOEgyMTZhNCw0LDAsMCwwLDAtOFpNMzcuMTcsMTM4LjgzYTQsNCwwLDAsMCw1LjY2LDBsNDAtNDBhNCw0LDAsMCwwLDAtNS42NmwtNDAtNDBhNCw0LDAsMCwwLTUuNjYsNS42Nkw3NC4zNCw5NiwzNy4xNywxMzMuMTdBNCw0LDAsMCwwLDM3LjE3LDEzOC44M1oiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTI4YTYsNiwwLDAsMS02LDZIMTEyYTYsNiwwLDAsMSwwLTEySDIxNkE2LDYsMCwwLDEsMjIyLDEyOFpNMTEyLDcwSDIxNmE2LDYsMCwwLDAsMC0xMkgxMTJhNiw2LDAsMCwwLDAsMTJaTTIxNiwxODZINDBhNiw2LDAsMCwwLDAsMTJIMjE2YTYsNiwwLDAsMCwwLTEyWk0zNS43NiwxNDAuMjRhNiw2LDAsMCwwLDguNDgsMGw0MC00MGE2LDYsMCwwLDAsMC04LjQ4bC00MC00MGE2LDYsMCwwLDAtOC40OCw4LjQ4TDcxLjUxLDk2LDM1Ljc2LDEzMS43NkE2LDYsMCwwLDAsMzUuNzYsMTQwLjI0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDEyMGExMiwxMiwwLDAsMSwwLTI0aDk2QTEyLDEyLDAsMCwxLDIyOCwxMjhaTTEyMCw3Nmg5NmExMiwxMiwwLDAsMCwwLTI0SDEyMGExMiwxMiwwLDAsMCwwLDI0Wm05NiwxMDRINDBhMTIsMTIsMCwwLDAsMCwyNEgyMTZhMTIsMTIsMCwwLDAsMC0yNFpNMzEuNTEsMTQ0LjQ5YTEyLDEyLDAsMCwwLDE3LDBsNDAtNDBhMTIsMTIsMCwwLDAsMC0xN2wtNDAtNDBhMTIsMTIsMCwwLDAtMTcsMTdMNjMsOTYsMzEuNTEsMTI3LjUxQTEyLDEyLDAsMCwwLDMxLjUxLDE0NC40OVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTgsOCwwLDAsMS04LDhIMTEyYTgsOCwwLDAsMSwwLTE2SDIxNkE4LDgsMCwwLDEsMjI0LDEyOFpNMTEyLDcySDIxNmE4LDgsMCwwLDAsMC0xNkgxMTJhOCw4LDAsMCwwLDAsMTZaTTIxNiwxODRINDBhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2Wk0zNi45NCwxNDMuMzlhOCw4LDAsMCwwLDguNzItMS43M2w0MC00MGE4LDgsMCwwLDAsMC0xMS4zMmwtNDAtNDBBOCw4LDAsMCwwLDMyLDU2djgwQTgsOCwwLDAsMCwzNi45NCwxNDMuMzlaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRWMTkySDQwVjY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNCwxMjhhOCw4LDAsMCwxLTgsOEgxMTJhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsMTI4Wk0xMTIsNzJIMjE2YTgsOCwwLDAsMCwwLTE2SDExMmE4LDgsMCwwLDAsMCwxNlpNMjE2LDE4NEg0MGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZaTTM0LjM0LDE0MS42NmE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MGE4LDgsMCwwLDAsMC0xMS4zMmwtNDAtNDBBOCw4LDAsMCwwLDM0LjM0LDYxLjY2TDY4LjY5LDk2LDM0LjM0LDEzMC4zNEE4LDgsMCwwLDAsMzQuMzQsMTQxLjY2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TextIndent";
export { I as TextIndent };
