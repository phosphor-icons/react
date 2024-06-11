/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/VideoConference";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabTAsODBIMTY4VjU2aDQ4Wk00MCw1NkgxNTJWMjAwSDQwWk0yMTYsMjAwSDE2OFYxMzZoNDh2NjRaTTE4MCw4OGExMiwxMiwwLDEsMSwxMiwxMkExMiwxMiwwLDAsMSwxODAsODhabTI0LDgwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDIwNCwxNjhabS02OC4yNS0yYTM5Ljc2LDM5Ljc2LDAsMCwwLTE3LjE5LTIzLjM0LDMyLDMyLDAsMSwwLTQ1LjEyLDBBMzkuODQsMzkuODQsMCwwLDAsNTYuMjUsMTY2YTgsOCwwLDAsMCwxNS41LDRjMi42NC0xMC4yNSwxMy4wNi0xOCwyNC4yNS0xOHMyMS42Miw3LjczLDI0LjI1LDE4YTgsOCwwLDEsMCwxNS41LTRaTTgwLDEyMGExNiwxNiwwLDEsMSwxNiwxNkExNiwxNiwwLDAsMSw4MCwxMjBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDIxNmExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMTYsNDRabTQsMTJ2NjhIMTY0VjUyaDUyQTQsNCwwLDAsMSwyMjAsNTZaTTM2LDIwMFY1NmE0LDQsMCwwLDEsNC00SDE1NlYyMDRINDBBNCw0LDAsMCwxLDM2LDIwMFptMTgwLDRIMTY0VjEzMmg1NnY2OEE0LDQsMCwwLDEsMjE2LDIwNFpNMTg0LDg4YTgsOCwwLDEsMSw4LDhBOCw4LDAsMCwxLDE4NCw4OFptMTYsODBhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMjAwLDE2OFptLTY4LjEzLTFhMzYuMiwzNi4yLDAsMCwwLTIwLjQzLTIzLjY3LDI4LDI4LDAsMSwwLTMwLjg4LDBBMzYuMjgsMzYuMjgsMCwwLDAsNjAuMTMsMTY3LDQsNCwwLDAsMCw2MywxNzEuODdhMy44NywzLjg3LDAsMCwwLDEsLjEzLDQsNCwwLDAsMCwzLjg3LTNDNzEsMTU3LDgzLjA1LDE0OCw5NiwxNDhzMjUuMDYsOSwyOC4xMywyMWE0LDQsMCwxLDAsNy43NC0yWk03NiwxMjBhMjAsMjAsMCwxLDEsMjAsMjBBMjAsMjAsMCwwLDEsNzYsMTIwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJINDBBMTQsMTQsMCwwLDAsMjYsNTZWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDIxNmExNCwxNCwwLDAsMCwxNC0xNFY1NkExNCwxNCwwLDAsMCwyMTYsNDJabTIsMTR2NjZIMTY2VjU0aDUwQTIsMiwwLDAsMSwyMTgsNTZaTTM4LDIwMFY1NmEyLDIsMCwwLDEsMi0ySDE1NFYyMDJINDBBMiwyLDAsMCwxLDM4LDIwMFptMTc4LDJIMTY2VjEzNGg1MnY2NkEyLDIsMCwwLDEsMjE2LDIwMlpNMTgyLDg4YTEwLDEwLDAsMSwxLDEwLDEwQTEwLDEwLDAsMCwxLDE4Miw4OFptMjAsODBhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsMjAyLDE2OFptLTY4LjE5LTEuNDlBMzgsMzgsMCwwLDAsMTE1LjIzLDE0M2EzMCwzMCwwLDEsMC0zOC40NSwwQTM4LDM4LDAsMCwwLDU4LjE5LDE2Ni41YTYsNiwwLDAsMCwxMS42MiwzQzcyLjY3LDE1OC4zOCw4My45MywxNTAsOTYsMTUwczIzLjM0LDguMzgsMjYuMTksMTkuNDlhNiw2LDAsMCwwLDExLjYyLTNaTTc4LDEyMGExOCwxOCwwLDEsMSwxOCwxOEExOCwxOCwwLDAsMSw3OCwxMjBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMjAwYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMTYsMzZabS00LDgwSDE1NlY2MGg1NlpNNTIsMTIwYTEyLDEyLDAsMSwxLDEyLDEyQTEyLDEyLDAsMCwxLDUyLDEyMFptLTgsNDkuNzdDNDYuNjksMTYxLjg0LDU1LDE1Niw2NCwxNTZjOS40MywwLDE4LjE5LDYuNDQsMjAuMzgsMTVhMTIsMTIsMCwwLDAsMjMuMjQtNiw0My4yMiw0My4yMiwwLDAsMC0xNS4xNi0yM0EzNiwzNiwwLDAsMCw0NCw5MC4wOFY2MGg4OFYxOTZINDRaTTE1NiwxOTZWMTQwaDU2djU2Wk0xNjgsODhhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsMTY4LDg4Wm0zMiw4MGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwyMDAsMTY4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsODhhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMjA0LDg4Wm0tMTIsNjhhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTkyLDE1NlpNOTYsMTA0YTE2LDE2LDAsMSwwLDE2LDE2QTE2LDE2LDAsMCwwLDk2LDEwNFpNMjMyLDU2VjIwMGExNiwxNiwwLDAsMS0xNiwxNkg0MGExNiwxNiwwLDAsMS0xNi0xNlY1NkExNiwxNiwwLDAsMSw0MCw0MEgyMTZBMTYsMTYsMCwwLDEsMjMyLDU2Wm0tNjQsNjRoNDhWNTZIMTY4Wm0tMzIuMjUsNDZhMzkuNzYsMzkuNzYsMCwwLDAtMTcuMTktMjMuMzQsMzIsMzIsMCwxLDAtNDUuMTIsMEEzOS44NCwzOS44NCwwLDAsMCw1Ni4yNSwxNjZhOCw4LDAsMCwwLDE1LjUsNGMyLjY0LTEwLjI1LDEzLjA2LTE4LDI0LjI1LTE4czIxLjYyLDcuNzMsMjQuMjUsMThhOCw4LDAsMSwwLDE1LjUtNFpNMjE2LDIwMFYxMzZIMTY4djY0aDQ4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00MCw0OGE4LDgsMCwwLDAtOCw4VjIwMGE4LDgsMCwwLDAsOCw4SDE2MFY0OFptNTYsOTZhMjQsMjQsMCwxLDEsMjQtMjRBMjQsMjQsMCwwLDEsOTYsMTQ0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDBhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTE2LDE2LDAsMCwwLDIxNiw0MFptMCw4MEgxNjhWNTZoNDhaTTQwLDU2SDE1MlYyMDBINDBaTTIxNiwyMDBIMTY4VjEzNmg0OHY2NFpNMTgwLDg4YTEyLDEyLDAsMSwxLDEyLDEyQTEyLDEyLDAsMCwxLDE4MCw4OFptMjQsODBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMjA0LDE2OFptLTY4LjI1LTJhMzkuNzYsMzkuNzYsMCwwLDAtMTcuMTktMjMuMzQsMzIsMzIsMCwxLDAtNDUuMTIsMEEzOS44NCwzOS44NCwwLDAsMCw1Ni4yNSwxNjZhOCw4LDAsMCwwLDE1LjUsNGMyLjY0LTEwLjI1LDEzLjA2LTE4LDI0LjI1LTE4czIxLjYyLDcuNzMsMjQuMjUsMThhOCw4LDAsMSwwLDE1LjUtNFpNODAsMTIwYTE2LDE2LDAsMSwxLDE2LDE2QTE2LDE2LDAsMCwxLDgwLDEyMFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "VideoConference";
export { I as VideoConference };
