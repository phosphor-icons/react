/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/GenderIntersex";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjRIMTY4YTgsOCwwLDAsMCwwLDE2aDIwLjY5TDE2My41NCw2NS4xNUE2NCw2NCwwLDEsMCwxMTIsMTc1LjQ4VjE5Mkg4OGE4LDgsMCwwLDAsMCwxNmgyNHYyNGE4LDgsMCwwLDAsMTYsMFYyMDhoMjRhOCw4LDAsMCwwLDAtMTZIMTI4VjE3NS40OGE2My45Miw2My45MiwwLDAsMCw0NS44NC05OEwyMDAsNTEuMzFWNzJhOCw4LDAsMCwwLDE2LDBWMzJBOCw4LDAsMCwwLDIwOCwyNFpNMTIwLDE2MGE0OCw0OCwwLDEsMSw0OC00OEE0OC4wNSw0OC4wNSwwLDAsMSwxMjAsMTYwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhIMTY4YTQsNCwwLDAsMCwwLDhoMzAuMzRMMTYzLjU1LDcwLjc5QTYwLDYwLDAsMSwwLDExNiwxNzEuODVWMTk2SDg4YTQsNCwwLDAsMCwwLDhoMjh2MjhhNCw0LDAsMCwwLDgsMFYyMDRoMjhhNCw0LDAsMCwwLDAtOEgxMjRWMTcxLjg1QTU5Ljk0LDU5Ljk0LDAsMCwwLDE2OC42OCw3N0wyMDQsNDEuNjZWNzJhNCw0LDAsMCwwLDgsMFYzMkE0LDQsMCwwLDAsMjA4LDI4Wk0xMjAsMTY0YTUyLDUyLDAsMSwxLDUyLTUyQTUyLjA2LDUyLjA2LDAsMCwxLDEyMCwxNjRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjZIMTY4YTYsNiwwLDAsMCwwLDEyaDI1LjUybC0zMCwyOS45NEE2Miw2MiwwLDEsMCwxMTQsMTczLjdWMTk0SDg4YTYsNiwwLDAsMCwwLDEyaDI2djI2YTYsNiwwLDAsMCwxMiwwVjIwNmgyNmE2LDYsMCwwLDAsMC0xMkgxMjZWMTczLjdhNjIsNjIsMCwwLDAsNDUuMjgtOTYuNUwyMDIsNDYuNDhWNzJhNiw2LDAsMCwwLDEyLDBWMzJBNiw2LDAsMCwwLDIwOCwyNlpNMTIwLDE2MmE1MCw1MCwwLDEsMSw1MC01MEE1MC4wNiw1MC4wNiwwLDAsMSwxMjAsMTYyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjBIMTY4YTEyLDEyLDAsMCwwLDAsMjRoMTFMMTYzLjM2LDU5LjY3QTY4LDY4LDAsMSwwLDEwOCwxNzguOTJWMTkySDg4YTEyLDEyLDAsMCwwLDAsMjRoMjB2MTZhMTIsMTIsMCwwLDAsMjQsMFYyMTZoMjBhMTIsMTIsMCwwLDAsMC0yNEgxMzJWMTc4LjkyQTY3LjkzLDY3LjkzLDAsMCwwLDE3OC45LDc4LjA4TDE5Niw2MVY3MmExMiwxMiwwLDAsMCwyNCwwVjMyQTEyLDEyLDAsMCwwLDIwOCwyMFpNMTIwLDE1NmE0NCw0NCwwLDEsMSw0NC00NEE0NC4wNSw0NC4wNSwwLDAsMSwxMjAsMTU2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDcuOTEsMTEzLjcyYTI4LDI4LDAsMSwxLTI1LjYzLTI1LjYzQTI4LDI4LDAsMCwxLDE0Ny45MSwxMTMuNzJaTTIxNiw0MFYyMTZhMTYsMTYsMCwwLDEtMTYsMTZINTZhMTYsMTYsMCwwLDEtMTYtMTZWNDBBMTYsMTYsMCwwLDEsNTYsMjRIMjAwQTE2LDE2LDAsMCwxLDIxNiw0MFpNMTg4LDU2YTgsOCwwLDAsMC04LThIMTUyLjI3QTguMTcsOC4xNywwLDAsMCwxNDQsNTUuNDcsOCw4LDAsMCwwLDE1Miw2NGg4LjY5TDE0NC45Miw3OS43N0E0NCw0NCwwLDEsMCwxMTIsMTU5LjI2VjE3Nkg5Mi4yN0E4LjE3LDguMTcsMCwwLDAsODQsMTgzLjQ3LDgsOCwwLDAsMCw5MiwxOTJoMjB2MTUuNzNhOC4xOCw4LjE4LDAsMCwwLDcuNDcsOC4yNSw4LDgsMCwwLDAsOC41My04VjE5MmgxOS43M2E4LjE3LDguMTcsMCwwLDAsOC4yNS03LjQ3LDgsOCwwLDAsMC04LTguNTNIMTI4VjE1OS4yNmE0NCw0NCwwLDAsMCwyOC4yNC02OC4xOEwxNzIsNzUuMzF2OC40MkE4LjE4LDguMTgsMCwwLDAsMTc5LjQ3LDkyLDgsOCwwLDAsMCwxODgsODRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTEyYTU2LDU2LDAsMSwxLTU2LTU2QTU2LDU2LDAsMCwxLDE3NiwxMTJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDI0SDE2OGE4LDgsMCwwLDAsMCwxNmgyMC42OUwxNjMuNTQsNjUuMTVBNjQsNjQsMCwxLDAsMTEyLDE3NS40OFYxOTJIODhhOCw4LDAsMCwwLDAsMTZoMjR2MjRhOCw4LDAsMCwwLDE2LDBWMjA4aDI0YTgsOCwwLDAsMCwwLTE2SDEyOFYxNzUuNDhhNjMuOTIsNjMuOTIsMCwwLDAsNDUuODQtOThMMjAwLDUxLjMxVjcyYTgsOCwwLDAsMCwxNiwwVjMyQTgsOCwwLDAsMCwyMDgsMjRaTTEyMCwxNjBhNDgsNDgsMCwxLDEsNDgtNDhBNDguMDUsNDguMDUsMCwwLDEsMTIwLDE2MFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "GenderIntersex";
export { I as GenderIntersex };
