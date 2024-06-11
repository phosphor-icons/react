/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Bread";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsODBhNDQuMDUsNDQuMDUsMCwwLDAtNDQtNDRINDhhNDQsNDQsMCwwLDAtMjAsODMuMTdWMjAwYTIwLDIwLDAsMCwwLDIwLDIwSDIwMGEyMCwyMCwwLDAsMCwyMC0yMFYxMTkuMTdBNDQsNDQsMCwwLDAsMjQ0LDgwWk01MiwxMjMuM0ExMiwxMiwwLDAsMCw0OCwxMDBhMjAsMjAsMCwwLDEsMC00MGg5MmEyMCwyMCwwLDAsMSwwLDQwLDEyLDEyLDAsMCwwLTQsMjMuM1YxOTZINTJaTTIwMCwxMDBhMTIsMTIsMCwwLDAtNCwyMy4zVjE5NkgxNjBWMTE5LjE3QTQzLjkyLDQzLjkyLDAsMCwwLDE3OS4xNyw2MEgyMDBhMjAsMjAsMCwwLDEsMCw0MFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTExdjg5YTgsOCwwLDAsMS04LDhIMTQ0YTgsOCwwLDAsMCw4LThWMTExYTMyLDMyLDAsMCwwLTgtNjNoNTZhMzIsMzIsMCwwLDEsOCw2M1oiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNDAsODBhNDAsNDAsMCwwLDAtNDAtNDBINDhhNDAsNDAsMCwwLDAtMTYsNzYuNjVWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlYxMTYuNjVBNDAuMDYsNDAuMDYsMCwwLDAsMjQwLDgwWk00OCwxMjBhOCw4LDAsMCwwLDAtMTYsMjQsMjQsMCwwLDEsMC00OGg5NmEyNCwyNCwwLDAsMSwwLDQ4LDgsOCwwLDAsMCwwLDE2djgwSDQ4Wm0xNTItMTZhOCw4LDAsMCwwLDAsMTZ2ODBIMTYwVjExNi42NUE0MCw0MCwwLDAsMCwxNzYsNTZoMjRhMjQsMjQsMCwwLDEsMCw0OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDBINDhhNDAsNDAsMCwwLDAtMTYsNzYuNjVWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlYxMTYuNjVBNDAsNDAsMCwwLDAsMjAwLDQwWm0tNTYsNjRhOCw4LDAsMCwwLDAsMTZ2ODBINDhWMTIwYTgsOCwwLDAsMCwwLTE2LDI0LDI0LDAsMCwxLDAtNDhoOTZhMjQsMjQsMCwwLDEsMCw0OFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzgsODBhMzgsMzgsMCwwLDAtMzgtMzhINDhhMzgsMzgsMCwwLDAtMTQsNzMuMzJWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDIwMGExNCwxNCwwLDAsMCwxNC0xNFYxMTUuMzJBMzguMDcsMzguMDcsMCwwLDAsMjM4LDgwWk00NiwyMDBWMTE4Yy42NiwwLDEuMzMsMCwyLDBhNiw2LDAsMCwwLDAtMTIsMjYsMjYsMCwwLDEsMC01Mmg5NmEyNiwyNiwwLDAsMSwwLDUyLDYsNiwwLDAsMCwwLDEyYy42NywwLDEuMzQsMCwyLDBWMjAwYTIsMiwwLDAsMS0yLDJINDhBMiwyLDAsMCwxLDQ2LDIwMFptMTU0LTk0YTYsNiwwLDAsMCwwLDEyYy42NywwLDEuMzQsMCwyLDBWMjAwYTIsMiwwLDAsMS0yLDJIMTU3Ljg0YTE0LjcxLDE0LjcxLDAsMCwwLC4xNi0yVjExNS4zMkEzOCwzOCwwLDAsMCwxNzEuNjgsNTRIMjAwYTI2LDI2LDAsMCwxLDAsNTJaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsODBhNDAsNDAsMCwwLDAtNDAtNDBINDhhNDAsNDAsMCwwLDAtMTYsNzYuNjVWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlYxMTYuNjVBNDAuMDYsNDAuMDYsMCwwLDAsMjQwLDgwWk00OCwxMjBhOCw4LDAsMCwwLDAtMTYsMjQsMjQsMCwwLDEsMC00OGg5NmEyNCwyNCwwLDAsMSwwLDQ4LDgsOCwwLDAsMCwwLDE2djgwSDQ4Wm0xNTItMTZhOCw4LDAsMCwwLDAsMTZ2ODBIMTYwVjExNi42NUE0MCw0MCwwLDAsMCwxNzYsNTZoMjRhMjQsMjQsMCwwLDEsMCw0OFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsODBhMzYsMzYsMCwwLDAtMzYtMzZINDhhMzYsMzYsMCwwLDAtMTIsNjkuOTRWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDIwMGExMiwxMiwwLDAsMCwxMi0xMlYxMTMuOTRBMzYuMDcsMzYuMDcsMCwwLDAsMjM2LDgwWk00NCwyMDBWMTE1Ljc3YTM1LjIyLDM1LjIyLDAsMCwwLDQsLjIzLDQsNCwwLDAsMCwwLTgsMjgsMjgsMCwwLDEsMC01Nmg5NmEyOCwyOCwwLDAsMSwwLDU2LDQsNCwwLDAsMCwwLDgsMzUuMjIsMzUuMjIsMCwwLDAsNC0uMjNWMjAwYTQsNCwwLDAsMS00LDRINDhBNCw0LDAsMCwxLDQ0LDIwMFptMTU2LTkyYTQsNCwwLDAsMCwwLDgsMzUuMjIsMzUuMjIsMCwwLDAsNC0uMjNWMjAwYTQsNCwwLDAsMS00LDRIMTU1LjNhMTEuOCwxMS44LDAsMCwwLC43LTRWMTEzLjk0QTM2LDM2LDAsMCwwLDE2Ni41OSw1MkgyMDBhMjgsMjgsMCwwLDEsMCw1NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Bread";
export { I as Bread };
