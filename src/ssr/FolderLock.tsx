/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/FolderLock";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTYwaC04di00YTI4LDI4LDAsMCwwLTU2LDB2NGgtOGE4LDgsMCwwLDAtOCw4djQwYTgsOCwwLDAsMCw4LDhoNzJhOCw4LDAsMCwwLDgtOFYxNjhBOCw4LDAsMCwwLDIyNCwxNjBabS00OC00YTEyLDEyLDAsMCwxLDI0LDB2NEgxNzZabTQwLDQ0SDE2MFYxNzZoNTZabTAtMTI4SDEzMS4zMUwxMDQsNDQuNjlBMTUuODYsMTUuODYsMCwwLDAsOTIuNjksNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwLjYyQTE1LjQsMTUuNCwwLDAsMCwzOS4zOCwyMTZoNzMuMThhOCw4LDAsMCwwLDAtMTZINDBWODhIMjE2djE2YTgsOCwwLDAsMCwxNiwwVjg4QTE2LDE2LDAsMCwwLDIxNiw3MlpNOTIuNjksNTZsMTYsMTZINDBWNTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTY0SDIxMnYtOGEyNCwyNCwwLDAsMC00OCwwdjhIMTUyYTQsNCwwLDAsMC00LDR2NDBhNCw0LDAsMCwwLDQsNGg3MmE0LDQsMCwwLDAsNC00VjE2OEE0LDQsMCwwLDAsMjI0LDE2NFptLTUyLThhMTYsMTYsMCwwLDEsMzIsMHY4SDE3MlptNDgsNDhIMTU2VjE3Mmg2NFpNMjE2LDc2SDEyOS42NkwxMDEuMTcsNDcuNTFBMTIsMTIsMCwwLDAsOTIuNjksNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjAwLjYyQTExLjQsMTEuNCwwLDAsMCwzOS4zOCwyMTJoNzMuMThhNCw0LDAsMCwwLDAtOEgzOS4zOEEzLjM5LDMuMzksMCwwLDEsMzYsMjAwLjYyVjg0SDIxNmE0LDQsMCwwLDEsNCw0djE2YTQsNCwwLDAsMCw4LDBWODhBMTIsMTIsMCwwLDAsMjE2LDc2Wk00MCw1Mkg5Mi42OWE0LDQsMCwwLDEsMi44MiwxLjE3TDExOC4zNCw3NkgzNlY1NkE0LDQsMCwwLDEsNDAsNTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTYySDIxNHYtNmEyNiwyNiwwLDAsMC01MiwwdjZIMTUyYTYsNiwwLDAsMC02LDZ2NDBhNiw2LDAsMCwwLDYsNmg3MmE2LDYsMCwwLDAsNi02VjE2OEE2LDYsMCwwLDAsMjI0LDE2MlptLTUwLTZhMTQsMTQsMCwwLDEsMjgsMHY2SDE3NFptNDQsNDZIMTU4VjE3NGg2MFpNMjE2LDc0SDEzMC40OWwtMjcuOS0yNy45YTEzLjk0LDEzLjk0LDAsMCwwLTkuOS00LjFINDBBMTQsMTQsMCwwLDAsMjYsNTZWMjAwLjYyQTEzLjM5LDEzLjM5LDAsMCwwLDM5LjM4LDIxNGg3My4xOGE2LDYsMCwwLDAsMC0xMkgzOS4zOEExLjQsMS40LDAsMCwxLDM4LDIwMC42MlY4NkgyMTZhMiwyLDAsMCwxLDIsMnYxNmE2LDYsMCwwLDAsMTIsMFY4OEExNCwxNCwwLDAsMCwyMTYsNzRaTTQwLDU0SDkyLjY5YTIsMiwwLDAsMSwxLjQxLjU5TDExMy41MSw3NEgzOFY1NkEyLDIsMCwwLDEsNDAsNTRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTUyaC00di00YTMyLDMyLDAsMCwwLTY0LDB2NGgtNGExMiwxMiwwLDAsMC0xMiwxMnY0NGExMiwxMiwwLDAsMCwxMiwxMmg3MmExMiwxMiwwLDAsMCwxMi0xMlYxNjRBMTIsMTIsMCwwLDAsMjI0LDE1MlptLTQ0LTRhOCw4LDAsMCwxLDE2LDB2NEgxODBabTMyLDQ4SDE2NFYxNzZoNDhabTQtMTI4SDEzMy4zOWwtMjYtMjkuMjlhMjAsMjAsMCwwLDAtMTUtNi43MUg0MEEyMCwyMCwwLDAsMCwyMCw1MlYyMDAuNjJBMTkuNDEsMTkuNDEsMCwwLDAsMzkuMzgsMjIwaDY1LjE4YTEyLDEyLDAsMCwwLDAtMjRINDRWOTJIMjEyYTEyLDEyLDAsMCwwLDI0LDBWODhBMjAsMjAsMCwwLDAsMjE2LDY4Wk00NCw2OFY1Nkg5MC42MWwxMC42NywxMloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzJIMTMxLjMxTDEwNCw0NC42OUExNS44NiwxNS44NiwwLDAsMCw5Mi42OSw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDAuNjJBMTUuNCwxNS40LDAsMCwwLDM5LjM4LDIxNmg3My4xOGE4LDgsMCwwLDAsMC0xNkg0MFY4OEgyMTZ2MTZhOCw4LDAsMCwwLDE2LDBWODhBMTYsMTYsMCwwLDAsMjE2LDcyWk00MCw3MlY1Nkg5Mi42OWwxNiwxNlptMTg0LDg4aC04di00YTI4LDI4LDAsMCwwLTU2LDB2NGgtOGE4LDgsMCwwLDAtOCw4djQwYTgsOCwwLDAsMCw4LDhoNzJhOCw4LDAsMCwwLDgtOFYxNjhBOCw4LDAsMCwwLDIyNCwxNjBabS0yNCwwSDE3NnYtNGExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTY4djQwSDE1MlYxNjhaTTkyLjY5LDQ4SDQwYTgsOCwwLDAsMC04LDhWODBoOTZMOTguMzQsNTAuMzRBOCw4LDAsMCwwLDkyLjY5LDQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNCwxNjBoLTh2LTRhMjgsMjgsMCwwLDAtNTYsMHY0aC04YTgsOCwwLDAsMC04LDh2NDBhOCw4LDAsMCwwLDgsOGg3MmE4LDgsMCwwLDAsOC04VjE2OEE4LDgsMCwwLDAsMjI0LDE2MFptLTQ4LTRhMTIsMTIsMCwwLDEsMjQsMHY0SDE3NlptNDAsNDRIMTYwVjE3Nmg1NlptMC0xMjhIMTMxLjMxTDEwNCw0NC42OUExNS44NiwxNS44NiwwLDAsMCw5Mi42OSw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDAuNjJBMTUuNCwxNS40LDAsMCwwLDM5LjM4LDIxNmg3My4xOGE4LDgsMCwwLDAsMC0xNkg0MFY4OEgyMTZ2MTZhOCw4LDAsMCwwLDE2LDBWODhBMTYsMTYsMCwwLDAsMjE2LDcyWk05Mi42OSw1NmwxNiwxNkg0MFY1NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FolderLock";
export { I as FolderLock };
