/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Chat";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMjAsMjAsMCwwLDAsMjAsNjRWMjI0QTE5LjgyLDE5LjgyLDAsMCwwLDMxLjU2LDI0Mi4xYTIwLjE0LDIwLjE0LDAsMCwwLDguNDksMS45LDE5LjkxLDE5LjkxLDAsMCwwLDEyLjgyLTQuNzJsLjEyLS4xMUw4NC40NywyMTJIMjE2YTIwLDIwLDAsMCwwLDIwLTIwVjY0QTIwLDIwLDAsMCwwLDIxNiw0NFptLTQsMTQ0SDgwYTExLjkzLDExLjkzLDAsMCwwLTcuODQsMi45Mkw0NCwyMTUuMjNWNjhIMjEyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjRWMTkyYTgsOCwwLDAsMS04LDhIODBMNDUuMTUsMjMwLjExQTgsOCwwLDAsMSwzMiwyMjRWNjRhOCw4LDAsMCwxLDgtOEgyMTZBOCw4LDAsMCwxLDIyNCw2NFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBBMTYsMTYsMCwwLDAsMjQsNjRWMjI0YTE1Ljg0LDE1Ljg0LDAsMCwwLDkuMjUsMTQuNUExNi4wNSwxNi4wNSwwLDAsMCw0MCwyNDBhMTUuODksMTUuODksMCwwLDAsMTAuMjUtMy43OGwuMDktLjA3TDgzLDIwOEgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWNjRBMTYsMTYsMCwwLDAsMjE2LDQ4Wk00MCwyMjRoMFpNMjE2LDE5Mkg4MGE4LDgsMCwwLDAtNS4yMywxLjk1TDQwLDIyNFY2NEgyMTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRWMTkyYTE2LDE2LDAsMCwxLTE2LDE2SDgzbC0zMi42LDI4LjE2LS4wOS4wN0ExNS44OSwxNS44OSwwLDAsMSw0MCwyNDBhMTYuMDUsMTYuMDUsMCwwLDEtNi43OS0xLjUyQTE1Ljg0LDE1Ljg0LDAsMCwxLDI0LDIyNFY2NEExNiwxNiwwLDAsMSw0MCw0OEgyMTZBMTYsMTYsMCwwLDEsMjMyLDY0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTBINDBBMTQsMTQsMCwwLDAsMjYsNjRWMjI0YTEzLjg4LDEzLjg4LDAsMCwwLDguMDksMTIuNjlBMTQuMTEsMTQuMTEsMCwwLDAsNDAsMjM4YTEzLjg3LDEzLjg3LDAsMCwwLDktMy4zMWwuMDYtLjA1TDgyLjIzLDIwNkgyMTZhMTQsMTQsMCwwLDAsMTQtMTRWNjRBMTQsMTQsMCwwLDAsMjE2LDUwWm0yLDE0MmEyLDIsMCwwLDEtMiwySDgwYTYsNiwwLDAsMC0zLjkyLDEuNDZMNDEuMjYsMjI1LjUzQTIsMiwwLDAsMSwzOCwyMjRWNjRhMiwyLDAsMCwxLDItMkgyMTZhMiwyLDAsMCwxLDIsMloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBBMTYsMTYsMCwwLDAsMjQsNjRWMjI0YTE1Ljg0LDE1Ljg0LDAsMCwwLDkuMjUsMTQuNUExNi4wNSwxNi4wNSwwLDAsMCw0MCwyNDBhMTUuODksMTUuODksMCwwLDAsMTAuMjUtMy43OGwuMDktLjA3TDgzLDIwOEgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWNjRBMTYsMTYsMCwwLDAsMjE2LDQ4Wk00MCwyMjRoMFpNMjE2LDE5Mkg4MGE4LDgsMCwwLDAtNS4yMywxLjk1TDQwLDIyNFY2NEgyMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTJINDBBMTIsMTIsMCwwLDAsMjgsNjRWMjI0YTExLjg5LDExLjg5LDAsMCwwLDYuOTMsMTAuODhBMTIuMTcsMTIuMTcsMCwwLDAsNDAsMjM2YTExLjg5LDExLjg5LDAsMCwwLDcuNjktMi44M2wwLDBMODEuNDksMjA0SDIxNmExMiwxMiwwLDAsMCwxMi0xMlY2NEExMiwxMiwwLDAsMCwyMTYsNTJabTQsMTQwYTQsNCwwLDAsMS00LDRIODBhNCw0LDAsMCwwLTIuNjIsMUw0Mi41NiwyMjcuMDZBNCw0LDAsMCwxLDM2LDIyNFY2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Chat";
export { I as Chat };
