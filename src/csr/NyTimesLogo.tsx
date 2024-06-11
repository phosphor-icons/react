/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/NyTimesLogo";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMTM2YTEyLDEyLDAsMSwxLTEyLDEyQTEyLDEyLDAsMCwxLDE3MiwxMzZabTEyLjYyLTMyLjc1TDExOC45MSw3Mi41OUE3MS45NSw3MS45NSwwLDAsMCw1Ni4wNiwxNDEuM2w2OC4xOC0zNi4zNkE4LDgsMCwwLDEsMTM2LDExMlYyMTUuNTVhNzEuNjQsNzEuNjQsMCwwLDAsNjAuNzEtNTBBOCw4LDAsMCwxLDIxMiwxNzAuNCw4OCw4OCwwLDEsMSw1MS43NCwxMDAuMSwzNiwzNiwwLDAsMSw2OCwzMmE4LjA1LDguMDUsMCwwLDEsMy4zOC43NUwxODkuNjMsODcuOTNBMjAsMjAsMCwwLDAsMTg4LDQ4YTgsOCwwLDAsMSwwLTE2LDM2LDM2LDAsMCwxLDAsNzJBOC4wNSw4LjA1LDAsMCwxLDE4NC42MiwxMDMuMjVaTTg4LDIwMy44M1YxNDIuNEw1Ny41MSwxNTguNjZBNzIuMTUsNzIuMTUsMCwwLDAsODgsMjAzLjgzWm0zMi03OC41LTE2LDguNTR2NzhhNzEsNzEsMCwwLDAsMTYsMy42N1pNOTYuMTMsNjIsNjYuMzcsNDguMDdhMjAsMjAsMCwwLDAtNS4yLDM4LjcxYy42LS43MSwxLjItMS40MiwxLjg0LTIuMTFBODgsODgsMCwwLDEsOTYuMTMsNjJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMTQwYTgsOCwwLDEsMS04LDhBOCw4LDAsMCwxLDE3MiwxNDBabTE0LjMxLTQwLjM4TDExOS41Nyw2OC40OEE3Niw3NiwwLDAsMCw1MiwxNDRjMCwxLjMyLDAsMi42NC4xLDMuOTVsNzQtMzkuNDhBNCw0LDAsMCwxLDEzMiwxMTJWMjE5Ljg4YTc1LjY0LDc1LjY0LDAsMCwwLDY4LjUyLTUzLjA4LDQsNCwwLDEsMSw3LjYzLDIuNEE4NCw4NCwwLDEsMSw1Ny41Nyw5OC4yNSwzMiwzMiwwLDAsMSw2OCwzNmE0LDQsMCwwLDEsMS42OS4zOEwxODguODUsOTJBMjQsMjQsMCwwLDAsMTg4LDQ0YTQsNCwwLDAsMSwwLTgsMzIsMzIsMCwwLDEsMCw2NEE0LDQsMCwwLDEsMTg2LjMxLDk5LjYyWm0tNjIuMzEsMTktMjQsMTIuOHY4My4xNmE3NS40NSw3NS40NSwwLDAsMCwyNCw1LjI2Wk01My4wNSwxNTYuNTFhNzYuMTUsNzYuMTUsMCwwLDAsMzksNTQuNFYxMzUuNzNabTU0LTkzLjg2TDY3LjE1LDQ0YTI0LDI0LDAsMCwwLTQuNiw0Ny4zNmMxLjEtMS4zNywyLjIyLTIuNzEsMy40MS00QTgzLjg5LDgzLjg5LDAsMCwxLDEwNy4wOCw2Mi42NVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMTM4YTEwLDEwLDAsMSwxLTEwLDEwQTEwLDEwLDAsMCwxLDE3MiwxMzhabTEzLjQ2LTM2LjU2TDExOS4yNCw3MC41M0E3NCw3NCwwLDAsMCw1NCwxNDRjMCwuMjIsMCwuNDQsMCwuNjZsNzEuMTYtMzcuOTVBNiw2LDAsMCwxLDEzNCwxMTJWMjE3Ljc2YTczLjYzLDczLjYzLDAsMCwwLDY0LjYxLTUxLjU2LDYsNiwwLDAsMSwxMS40NSwzLjZBODYsODYsMCwxLDEsNTQuNTcsOTkuMjMsMzQsMzQsMCwwLDEsNjgsMzRhNiw2LDAsMCwxLDIuNTQuNTZMMTg5LjI2LDkwQTIyLDIyLDAsMCwwLDE4OCw0NmE2LDYsMCwwLDEsMC0xMiwzNCwzNCwwLDAsMSwwLDY4QTYsNiwwLDAsMSwxODUuNDYsMTAxLjQ0Wk0xMDIsMjEzLjI3YTczLjQ3LDczLjQ3LDAsMCwwLDIwLDQuNDdWMTIybC0yMCwxMC42N1pNNTUuMjcsMTU3LjU5QTc0LjIyLDc0LjIyLDAsMCwwLDkwLDIwNy40N3YtNjguNFptNDYuMTQtOTUuMzhMNjYuNzQsNDZhMjIsMjIsMCwwLDAtNC45Myw0My4wNWMuODYtMSwxLjc1LTIuMDYsMi42Ny0zLjA3QTg2LDg2LDAsMCwxLDEwMS40MSw2Mi4yMVoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTQ4YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE5MiwxNDhabS00LTQwYTExLjg0LDExLjg0LDAsMCwxLTUuMDctMS4xM0wxMTguMjUsNzYuNjlhNjgsNjgsMCwwLDAtNTcuODMsNTkuODlsNjUuOTMtMzUuMTdBMTIsMTIsMCwwLDEsMTQ0LDExMnY5OC4xMWE2Ny43MSw2Ny43MSwwLDAsMCw0NC43NS0zNS41MiwxMiwxMiwwLDEsMSwyMS40MiwxMC44Miw5MS41NCw5MS41NCwwLDAsMS03Niw1MC4zOEExMi4xMywxMi4xMywwLDAsMSwxMzIsMjM2Yy0uMzUsMC0uNjgsMC0xLS4wNS0xLDAtMiwuMDUtMywuMDVBOTIsOTIsMCwwLDEsNDYuMzYsMTAxLjYxLDQwLDQwLDAsMCwxLDY4LDI4YTExLjg0LDExLjg0LDAsMCwxLDUuMDcsMS4xM2wxMTcuMjQsNTQuN0ExNiwxNiwwLDAsMCwxODgsNTJhMTIsMTIsMCwwLDEsMC0yNCw0MCw0MCwwLDAsMSwwLDgwWk04MCwxOTIuMTJWMTUzLjMzbC0xNy4zOSw5LjI4QTY4LjEzLDY4LjEzLDAsMCwwLDgwLDE5Mi4xMlpNMTIwLDEzMmwtMTYsOC41M3Y2Ny4wOGE2Ny4xLDY3LjEsMCwwLDAsMTYsMy45Wk04Ni41LDYxLjg4LDY1LjY5LDUyLjE3YTE2LDE2LDAsMCwwLTUuNTgsMjkuNzRBOTIsOTIsMCwwLDEsODYuNSw2MS44OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMTM2YTEyLDEyLDAsMSwxLTEyLDEyQTEyLDEyLDAsMCwxLDE3MiwxMzZabTEyLjYyLTMyLjc1TDExOC45MSw3Mi41OUE3MS45NSw3MS45NSwwLDAsMCw1Ni4wNiwxNDEuM2w2OC4xOC0zNi4zNkE4LDgsMCwwLDEsMTM2LDExMlYyMTUuNTVhNzEuNjQsNzEuNjQsMCwwLDAsNjAuNzEtNTBBOCw4LDAsMCwxLDIxMiwxNzAuNCw4OCw4OCwwLDEsMSw1MS43NCwxMDAuMSwzNiwzNiwwLDAsMSw2OCwzMmE4LjA1LDguMDUsMCwwLDEsMy4zOC43NUwxODkuNjMsODcuOTNBMjAsMjAsMCwwLDAsMTg4LDQ4YTgsOCwwLDAsMSwwLTE2LDM2LDM2LDAsMCwxLDAsNzJBOC4wNSw4LjA1LDAsMCwxLDE4NC42MiwxMDMuMjVaTTk2LDIwOC40N1YxMzguMTNMNTcuNTEsMTU4LjY2QTcyLjIzLDcyLjIzLDAsMCwwLDk2LDIwOC40N1pNOTYuMTMsNjIsNjYuMzcsNDguMDdhMjAsMjAsMCwwLDAtNS4yLDM4LjcxYy42LS43MSwxLjItMS40MiwxLjg0LTIuMTFBODgsODgsMCwwLDEsOTYuMTMsNjJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTEyVjIyNGE3OS41OCw3OS41OCwwLDAsMS0zMi02LjY2VjEyOS4wN1oiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNzIsMTM2YTEyLDEyLDAsMSwxLTEyLDEyQTEyLDEyLDAsMCwxLDE3MiwxMzZabTEyLjYyLTMyLjc1TDExOC45MSw3Mi41OUE3MS45NSw3MS45NSwwLDAsMCw1Ni4wNiwxNDEuM2w2OC4xOC0zNi4zNkE4LDgsMCwwLDEsMTM2LDExMlYyMTUuNTVhNzEuNjQsNzEuNjQsMCwwLDAsNjAuNzEtNTBBOCw4LDAsMCwxLDIxMiwxNzAuNCw4OCw4OCwwLDEsMSw1MS43NCwxMDAuMSwzNiwzNiwwLDAsMSw2OCwzMmE4LjA1LDguMDUsMCwwLDEsMy4zOC43NUwxODkuNjMsODcuOTNBMjAsMjAsMCwwLDAsMTg4LDQ4YTgsOCwwLDAsMSwwLTE2LDM2LDM2LDAsMCwxLDAsNzJBOC4wNSw4LjA1LDAsMCwxLDE4NC42MiwxMDMuMjVaTTg4LDIwMy44M1YxNDIuNEw1Ny41MSwxNTguNjZBNzIuMTUsNzIuMTUsMCwwLDAsODgsMjAzLjgzWm0zMi03OC41LTE2LDguNTR2NzhhNzEsNzEsMCwwLDAsMTYsMy42N1pNOTYuMTMsNjIsNjYuMzcsNDguMDdhMjAsMjAsMCwwLDAtNS4yLDM4LjcxYy42LS43MSwxLjItMS40MiwxLjg0LTIuMTFBODgsODgsMCwwLDEsOTYuMTMsNjJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "NyTimesLogo";
export { I as NyTimesLogo };
