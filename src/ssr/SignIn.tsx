/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/SignIn";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQuNDksMTM2LjQ5bC00MCw0MGExMiwxMiwwLDAsMS0xNy0xN0wxMDcsMTQwSDI0YTEyLDEyLDAsMCwxLDAtMjRoODNMODcuNTEsOTYuNDlhMTIsMTIsMCwwLDEsMTctMTdsNDAsNDBBMTIsMTIsMCwwLDEsMTQ0LjQ5LDEzNi40OVpNMjAwLDI4SDEzNmExMiwxMiwwLDAsMCwwLDI0aDUyVjIwNEgxMzZhMTIsMTIsMCwwLDAsMCwyNGg2NGExMiwxMiwwLDAsMCwxMi0xMlY0MEExMiwxMiwwLDAsMCwyMDAsMjhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDBWMjE2SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjU2QTE2LDE2LDAsMCwxLDQwLDQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE0MS42NiwxMzMuNjZsLTQwLDQwYTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxMTYuNjksMTM2SDI0YTgsOCwwLDAsMSwwLTE2aDkyLjY5TDkwLjM0LDkzLjY2YTgsOCwwLDAsMSwxMS4zMi0xMS4zMmw0MCw0MEE4LDgsMCwwLDEsMTQxLjY2LDEzMy42NlpNMjAwLDMySDEzNmE4LDgsMCwwLDAsMCwxNmg1NlYyMDhIMTM2YTgsOCwwLDAsMCwwLDE2aDY0YTgsOCwwLDAsMCw4LThWNDBBOCw4LDAsMCwwLDIwMCwzMloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDEuNjYsMTMzLjY2bC00MCw0MEE4LDgsMCwwLDEsODgsMTY4VjEzNkgyNGE4LDgsMCwwLDEsMC0xNkg4OFY4OGE4LDgsMCwwLDEsMTMuNjYtNS42Nmw0MCw0MEE4LDgsMCwwLDEsMTQxLjY2LDEzMy42NlpNMjAwLDMySDEzNmE4LDgsMCwwLDAsMCwxNmg1NlYyMDhIMTM2YTgsOCwwLDAsMCwwLDE2aDY0YTgsOCwwLDAsMCw4LThWNDBBOCw4LDAsMCwwLDIwMCwzMloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAuMjQsMTMyLjI0bC00MCw0MGE2LDYsMCwwLDEtOC40OC04LjQ4TDEyMS41MSwxMzRIMjRhNiw2LDAsMCwxLDAtMTJoOTcuNTFMOTEuNzYsOTIuMjRhNiw2LDAsMCwxLDguNDgtOC40OGw0MCw0MEE2LDYsMCwwLDEsMTQwLjI0LDEzMi4yNFpNMjAwLDM0SDEzNmE2LDYsMCwwLDAsMCwxMmg1OFYyMTBIMTM2YTYsNiwwLDAsMCwwLDEyaDY0YTYsNiwwLDAsMCw2LTZWNDBBNiw2LDAsMCwwLDIwMCwzNFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDEuNjYsMTMzLjY2bC00MCw0MGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTE2LjY5LDEzNkgyNGE4LDgsMCwwLDEsMC0xNmg5Mi42OUw5MC4zNCw5My42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzJsNDAsNDBBOCw4LDAsMCwxLDE0MS42NiwxMzMuNjZaTTIwMCwzMkgxMzZhOCw4LDAsMCwwLDAsMTZoNTZWMjA4SDEzNmE4LDgsMCwwLDAsMCwxNmg2NGE4LDgsMCwwLDAsOC04VjQwQTgsOCwwLDAsMCwyMDAsMzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzguODMsMTMwLjgzbC00MCw0MGE0LDQsMCwwLDEtNS42Ni01LjY2TDEyNi4zNCwxMzJIMjRhNCw0LDAsMCwxLDAtOEgxMjYuMzRMOTMuMTcsOTAuODNhNCw0LDAsMCwxLDUuNjYtNS42Nmw0MCw0MEE0LDQsMCwwLDEsMTM4LjgzLDEzMC44M1pNMjAwLDM2SDEzNmE0LDQsMCwwLDAsMCw4aDYwVjIxMkgxMzZhNCw0LDAsMCwwLDAsOGg2NGE0LDQsMCwwLDAsNC00VjQwQTQsNCwwLDAsMCwyMDAsMzZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SignIn";
export { I as SignIn };
