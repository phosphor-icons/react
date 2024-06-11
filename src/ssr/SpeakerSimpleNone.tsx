/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/SpeakerSimpleNone";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjMuNTEsMjQuODFhOCw4LDAsMCwwLTguNDIuODhMODUuMjUsODBINDBBMTYsMTYsMCwwLDAsMjQsOTZ2NjRhMTYsMTYsMCwwLDAsMTYsMTZIODUuMjVsNjkuODQsNTQuMzFBOCw4LDAsMCwwLDE2OCwyMjRWMzJBOCw4LDAsMCwwLDE2My41MSwyNC44MVpNMTUyLDIwNy42NCw5Mi45MSwxNjEuNjlBNy45NCw3Ljk0LDAsMCwwLDg4LDE2MEg0MFY5Nkg4OGE3Ljk0LDcuOTQsMCwwLDAsNC45MS0xLjY5TDE1Miw0OC4zNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjEuNzYsMjguNDFhNCw0LDAsMCwwLTQuMjIuNDNMODYuNjMsODRINDBBMTIsMTIsMCwwLDAsMjgsOTZ2NjRhMTIsMTIsMCwwLDAsMTIsMTJIODYuNjNsNzAuOTEsNTUuMTZBNC4wNyw0LjA3LDAsMCwwLDE2MCwyMjhhMy45MiwzLjkyLDAsMCwwLDEuNzYtLjQxQTQsNCwwLDAsMCwxNjQsMjI0VjMyQTQsNCwwLDAsMCwxNjEuNzYsMjguNDFaTTE1NiwyMTUuODJsLTY1LjU0LTUxQTQuMDYsNC4wNiwwLDAsMCw4OCwxNjRINDBhNCw0LDAsMCwxLTQtNFY5NmE0LDQsMCwwLDEsNC00SDg4YTQuMDYsNC4wNiwwLDAsMCwyLjQ2LS44NGw2NS41NC01MVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjIuNjQsMjYuNjFhNiw2LDAsMCwwLTYuMzIuNjVMODUuOTQsODJINDBBMTQsMTQsMCwwLDAsMjYsOTZ2NjRhMTQsMTQsMCwwLDAsMTQsMTRIODUuOTRsNzAuMzgsNTQuNzRBNiw2LDAsMCwwLDE2NiwyMjRWMzJBNiw2LDAsMCwwLDE2Mi42NCwyNi42MVpNMTU0LDIxMS43Myw5MS42OCwxNjMuMjZBNiw2LDAsMCwwLDg4LDE2Mkg0MGEyLDIsMCwwLDEtMi0yVjk2YTIsMiwwLDAsMSwyLTJIODhhNiw2LDAsMCwwLDMuNjgtMS4yNkwxNTQsNDQuMjdaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjUuMjcsMjEuMjJhMTIsMTIsMCwwLDAtMTIuNjQsMS4zMUw4My44OCw3Nkg0MEEyMCwyMCwwLDAsMCwyMCw5NnY2NGEyMCwyMCwwLDAsMCwyMCwyMEg4My44OGw2OC43NSw1My40N0ExMiwxMiwwLDAsMCwxNzIsMjI0VjMyQTEyLDEyLDAsMCwwLDE2NS4yNywyMS4yMlpNMTQ4LDE5OS40Niw5NS4zNywxNTguNTNBMTIsMTIsMCwwLDAsODgsMTU2SDQ0VjEwMEg4OGExMiwxMiwwLDAsMCw3LjM3LTIuNTNMMTQ4LDU2LjU0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjMuNTIsMjQuODFhOCw4LDAsMCwwLTguNDMuODhMODUuMjUsODBINDBBMTYsMTYsMCwwLDAsMjQsOTZ2NjRhMTYsMTYsMCwwLDAsMTYsMTZIODUuMjVsNjkuODQsNTQuMzFBNy45NCw3Ljk0LDAsMCwwLDE2MCwyMzJhOCw4LDAsMCwwLDgtOFYzMkE4LDgsMCwwLDAsMTYzLjUyLDI0LjgxWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMzJWMjI0TDg4LDE2OEg0MGE4LDgsMCwwLDEtOC04Vjk2YTgsOCwwLDAsMSw4LThIODhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTYzLjUxLDI0LjgxYTgsOCwwLDAsMC04LjQyLjg4TDg1LjI1LDgwSDQwQTE2LDE2LDAsMCwwLDI0LDk2djY0YTE2LDE2LDAsMCwwLDE2LDE2SDg1LjI1bDY5Ljg0LDU0LjMxQTgsOCwwLDAsMCwxNjgsMjI0VjMyQTgsOCwwLDAsMCwxNjMuNTEsMjQuODFaTTE1MiwyMDcuNjQsOTIuOTEsMTYxLjY5QTcuOTQsNy45NCwwLDAsMCw4OCwxNjBINDBWOTZIODhhNy45NCw3Ljk0LDAsMCwwLDQuOTEtMS42OUwxNTIsNDguMzZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SpeakerSimpleNone";
export { I as SpeakerSimpleNone };
