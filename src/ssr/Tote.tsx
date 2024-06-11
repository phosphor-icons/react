/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Tote";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzksNjYuNzVhMjAuMTIsMjAuMTIsMCwwLDAtMTUtNi43NUgxNzkuODNBNTIsNTIsMCwwLDAsNzYuMTcsNjBIMzIuMDhBMjAsMjAsMCwwLDAsMTIuMTQsODIuMzVsMTQuMjUsMTIwQTIwLjA2LDIwLjA2LDAsMCwwLDQ2LjMzLDIyMEgyMDkuNjdhMjAuMDYsMjAuMDYsMCwwLDAsMTkuOTQtMTcuNjVsMTQuMjUtMTIwQTIwLDIwLDAsMCwwLDIzOSw2Ni43NVpNMTI4LDM2YTI4LDI4LDAsMCwxLDI3LjcxLDI0SDEwMC4yOUEyOCwyOCwwLDAsMSwxMjgsMzZabTc4LjE5LDE2MEg0OS44MUwzNi41LDg0SDc2djIwYTEyLDEyLDAsMCwwLDI0LDBWODRoNTZ2MjBhMTIsMTIsMCwwLDAsMjQsMFY4NGgzOS41WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuOTQsODAuOTNsLTE0LjI1LDEyMGE4LjA2LDguMDYsMCwwLDEtOCw3LjA3SDQ2LjMzYTguMDYsOC4wNiwwLDAsMS04LTcuMDdsLTE0LjI1LTEyMGE4LDgsMCwwLDEsOC04LjkzSDIyMy45MkE4LDgsMCwwLDEsMjMxLjk0LDgwLjkzWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzNiw2OS40QTE2LjEzLDE2LjEzLDAsMCwwLDIyMy45Miw2NEgxNzZhNDgsNDgsMCwwLDAtOTYsMEgzMi4wOGExNi4xMywxNi4xMywwLDAsMC0xMiw1LjQsMTYsMTYsMCwwLDAtMy45MiwxMi40OGwxNC4yNiwxMjBhMTYsMTYsMCwwLDAsMTYsMTQuMTJIMjA5LjY3YTE2LDE2LDAsMCwwLDE2LTE0LjEybDE0LjI2LTEyMEExNiwxNiwwLDAsMCwyMzYsNjkuNFpNMTI4LDMyYTMyLDMyLDAsMCwxLDMyLDMySDk2QTMyLDMyLDAsMCwxLDEyOCwzMlptODEuNzYsMTY4YS4xMy4xMywwLDAsMS0uMDksMEg0Ni4yNUwzMi4wOCw4MEg4MHYyNGE4LDgsMCwwLDAsMTYsMFY4MGg2NHYyNGE4LDgsMCwwLDAsMTYsMFY4MGg0OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNjkuNEExNi4xMywxNi4xMywwLDAsMCwyMjMuOTIsNjRIMTc2YTQ4LDQ4LDAsMCwwLTk2LDBIMzIuMDhhMTYuMTMsMTYuMTMsMCwwLDAtMTIsNS40LDE2LDE2LDAsMCwwLTMuOTIsMTIuNDhsMTQuMjYsMTIwYTE2LDE2LDAsMCwwLDE2LDE0LjEySDIwOS42N2ExNiwxNiwwLDAsMCwxNi0xNC4xMmwxNC4yNi0xMjBBMTYsMTYsMCwwLDAsMjM2LDY5LjRaTTk2LDEwNGE4LDgsMCwwLDEtMTYsMFY4OGE4LDgsMCwwLDEsMTYsMFptMzItNzJhMzIsMzIsMCwwLDEsMzIsMzJIOTZBMzIsMzIsMCwwLDEsMTI4LDMyWm00OCw3MmE4LDgsMCwwLDEtMTYsMFY4OGE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuNDcsNzAuNzNBMTQuMDksMTQuMDksMCwwLDAsMjIzLjkyLDY2SDE3NFY2NGE0Niw0NiwwLDAsMC05MiwwdjJIMzIuMDhhMTQsMTQsMCwwLDAtMTQsMTUuNjRsMTQuMjUsMTIwYTE0LjA2LDE0LjA2LDAsMCwwLDE0LDEyLjM2SDIwOS42N2ExNC4wNiwxNC4wNiwwLDAsMCwxNC0xMi4zNmwxNC4yNS0xMjBBMTQsMTQsMCwwLDAsMjM0LjQ3LDcwLjczWk05NCw2NGEzNCwzNCwwLDAsMSw2OCwwdjJIOTRaTTIxMS43MywyMDAuMjNhMiwyLDAsMCwxLTIuMDYsMS43N0g0Ni4zM2EyLDIsMCwwLDEtMi4wNi0xLjc3TDMwLDgwLjIzYTEuOTIsMS45MiwwLDAsMSwuNDktMS41MywyLjA3LDIuMDcsMCwwLDEsMS41OC0uN0g4MnYyNmE2LDYsMCwwLDAsMTIsMFY3OGg2OHYyNmE2LDYsMCwwLDAsMTIsMFY3OGg0OS45MmEyLjA3LDIuMDcsMCwwLDEsMS41OC43LDEuOTIsMS45MiwwLDAsMSwuNDksMS41M1oiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNjkuNEExNi4xMywxNi4xMywwLDAsMCwyMjMuOTIsNjRIMTc2YTQ4LDQ4LDAsMCwwLTk2LDBIMzIuMDhhMTYuMTMsMTYuMTMsMCwwLDAtMTIsNS40LDE2LDE2LDAsMCwwLTMuOTIsMTIuNDhsMTQuMjYsMTIwYTE2LDE2LDAsMCwwLDE2LDE0LjEySDIwOS42N2ExNiwxNiwwLDAsMCwxNi0xNC4xMmwxNC4yNi0xMjBBMTYsMTYsMCwwLDAsMjM2LDY5LjRaTTEyOCwzMmEzMiwzMiwwLDAsMSwzMiwzMkg5NkEzMiwzMiwwLDAsMSwxMjgsMzJabTgxLjc2LDE2OGEuMTMuMTMsMCwwLDEtLjA5LDBINDYuMjVMMzIuMDgsODBIODB2MjRhOCw4LDAsMCwwLDE2LDBWODBoNjR2MjRhOCw4LDAsMCwwLDE2LDBWODBoNDhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzMsNzIuMDZBMTIuMTEsMTIuMTEsMCwwLDAsMjIzLjkyLDY4SDE3MlY2NGE0NCw0NCwwLDAsMC04OCwwdjRIMzIuMDhBMTIuMTEsMTIuMTEsMCwwLDAsMjMsNzIuMDZhMTIsMTIsMCwwLDAtMi45NCw5LjM1bDE0LjI2LDEyMGExMiwxMiwwLDAsMCwxMiwxMC41OUgyMDkuNjdhMTIsMTIsMCwwLDAsMTItMTAuNTlsMTQuMjYtMTIwQTEyLDEyLDAsMCwwLDIzMyw3Mi4wNlpNOTIsNjRhMzYsMzYsMCwwLDEsNzIsMHY0SDkyWk0yMjgsODAuNDZsLTE0LjI1LDEyMGE0LDQsMCwwLDEtNC4wNSwzLjU0SDQ2LjMzYTQsNCwwLDAsMS00LTMuNTRMMjgsODAuNDZhMy45LDMuOSwwLDAsMSwxLTMuMDlBNC4wOCw0LjA4LDAsMCwxLDMyLjA4LDc2SDg0djI4YTQsNCwwLDAsMCw4LDBWNzZoNzJ2MjhhNCw0LDAsMCwwLDgsMFY3Nmg1MS45MkE0LjA4LDQuMDgsMCwwLDEsMjI3LDc3LjM3LDMuOSwzLjksMCwwLDEsMjI4LDgwLjQ2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Tote";
export { I as Tote };
