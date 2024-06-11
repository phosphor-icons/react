/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ShareNetwork";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTU2YTQzLjc4LDQzLjc4LDAsMCwwLTI5LjA5LDExTDEwNi4xLDE0MC44YTQ0LjA3LDQ0LjA3LDAsMCwwLDAtMjUuNkwxNDYuOTEsODlhNDMuODMsNDMuODMsMCwxLDAtMTMtMjAuMTdMOTMuMDksOTVhNDQsNDQsMCwxLDAsMCw2NS45NEwxMzMuOSwxODcuMkE0NCw0NCwwLDEsMCwxNzYsMTU2Wm0wLTEyMGEyMCwyMCwwLDEsMS0yMCwyMEEyMCwyMCwwLDAsMSwxNzYsMzZaTTY0LDE0OGEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSw2NCwxNDhabTExMiw3MmEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSwxNzYsMjIwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjAwYTMyLDMyLDAsMSwxLTMyLTMyQTMyLDMyLDAsMCwxLDIwOCwyMDBaTTE3Niw4OGEzMiwzMiwwLDEsMC0zMi0zMkEzMiwzMiwwLDAsMCwxNzYsODhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTc2LDE2MGEzOS44OSwzOS44OSwwLDAsMC0yOC42MiwxMi4wOWwtNDYuMS0yOS42M2EzOS44LDM5LjgsMCwwLDAsMC0yOC45Mmw0Ni4xLTI5LjYzYTQwLDQwLDAsMSwwLTguNjYtMTMuNDVsLTQ2LjEsMjkuNjNhNDAsNDAsMCwxLDAsMCw1NS44Mmw0Ni4xLDI5LjYzQTQwLDQwLDAsMSwwLDE3NiwxNjBabTAtMTI4YTI0LDI0LDAsMSwxLTI0LDI0QTI0LDI0LDAsMCwxLDE3NiwzMlpNNjQsMTUyYTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDY0LDE1MlptMTEyLDcyYTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDE3NiwyMjRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMjAwYTM2LDM2LDAsMSwxLTY5Ljg1LTEyLjI1bC01My0zNC4wNWEzNiwzNiwwLDEsMSwwLTUxLjRsNTMtMzRhMzYuMDksMzYuMDksMCwxLDEsOC42NywxMy40NWwtNTMsMzQuMDVhMzYsMzYsMCwwLDEsMCwyNC41bDUzLDM0LjA1QTM2LDM2LDAsMCwxLDIxMiwyMDBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTYyYTM3LjkxLDM3LjkxLDAsMCwwLTI4LjMsMTIuNjdMOTguOCwxNDMuMjRhMzcuODksMzcuODksMCwwLDAsMC0zMC40OGw0OC45LTMxLjQzYTM4LDM4LDAsMSwwLTYuNS0xMC4wOUw5Mi4zLDEwMi42N2EzOCwzOCwwLDEsMCwwLDUwLjY2bDQ4LjksMzEuNDNBMzgsMzgsMCwxLDAsMTc2LDE2MlptMC0xMzJhMjYsMjYsMCwxLDEtMjYsMjZBMjYsMjYsMCwwLDEsMTc2LDMwWk02NCwxNTRhMjYsMjYsMCwxLDEsMjYtMjZBMjYsMjYsMCwwLDEsNjQsMTU0Wm0xMTIsNzJhMjYsMjYsMCwxLDEsMjYtMjZBMjYsMjYsMCwwLDEsMTc2LDIyNloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTYwYTM5Ljg5LDM5Ljg5LDAsMCwwLTI4LjYyLDEyLjA5bC00Ni4xLTI5LjYzYTM5LjgsMzkuOCwwLDAsMCwwLTI4LjkybDQ2LjEtMjkuNjNhNDAsNDAsMCwxLDAtOC42Ni0xMy40NWwtNDYuMSwyOS42M2E0MCw0MCwwLDEsMCwwLDU1LjgybDQ2LjEsMjkuNjNBNDAsNDAsMCwxLDAsMTc2LDE2MFptMC0xMjhhMjQsMjQsMCwxLDEtMjQsMjRBMjQsMjQsMCwwLDEsMTc2LDMyWk02NCwxNTJhMjQsMjQsMCwxLDEsMjQtMjRBMjQsMjQsMCwwLDEsNjQsMTUyWm0xMTIsNzJhMjQsMjQsMCwxLDEsMjQtMjRBMjQsMjQsMCwwLDEsMTc2LDIyNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTY0YTM2LDM2LDAsMCwwLTI3LjkyLDEzLjNMOTYuMjUsMTQ0YTM1LjkyLDM1LjkyLDAsMCwwLDAtMzJMMTQ4LjA4LDc4LjdBMzUuOTMsMzUuOTMsMCwxLDAsMTQzLjc1LDcyTDkxLjkyLDEwNS4zYTM2LDM2LDAsMSwwLDAsNDUuNEwxNDMuNzUsMTg0QTM2LDM2LDAsMSwwLDE3NiwxNjRabTAtMTM2YTI4LDI4LDAsMSwxLTI4LDI4QTI4LDI4LDAsMCwxLDE3NiwyOFpNNjQsMTU2YTI4LDI4LDAsMSwxLDI4LTI4QTI4LDI4LDAsMCwxLDY0LDE1NlptMTEyLDcyYTI4LDI4LDAsMSwxLDI4LTI4QTI4LDI4LDAsMCwxLDE3NiwyMjhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ShareNetwork";
export { I as ShareNetwork };
