/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Folders";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjRIMTU0LjY3TDEyNi45Myw0My4yYTE2LjEyLDE2LjEyLDAsMCwwLTkuNi0zLjJINzJBMTYsMTYsMCwwLDAsNTYsNTZWNzJINDBBMTYsMTYsMCwwLDAsMjQsODhWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDE5Mi44OUExNS4xMywxNS4xMywwLDAsMCwyMDgsMjAwLjg5VjE4NGgxNi44OUExNS4xMywxNS4xMywwLDAsMCwyNDAsMTY4Ljg5VjgwQTE2LDE2LDAsMCwwLDIyNCw2NFpNMTkyLDIwMEg0MFY4OEg4NS4zM2wyOS44NywyMi40QTgsOCwwLDAsMCwxMjAsMTEyaDcyWm0zMi0zMkgyMDhWMTEyYTE2LDE2LDAsMCwwLTE2LTE2SDEyMi42N0w5NC45Myw3NS4yYTE2LjEyLDE2LjEyLDAsMCwwLTkuNi0zLjJINzJWNTZoNDUuMzNMMTQ3LjIsNzguNEE4LDgsMCwwLDAsMTUyLDgwaDcyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjhIMTUzLjMzbC0yOC44LTIxLjZhMTIuMDUsMTIuMDUsMCwwLDAtNy4yLTIuNEg3MkExMiwxMiwwLDAsMCw2MCw1NlY3Nkg0MEExMiwxMiwwLDAsMCwyOCw4OFYyMDBhMTIsMTIsMCwwLDAsMTIsMTJIMTkyLjg5QTExLjEyLDExLjEyLDAsMCwwLDIwNCwyMDAuODlWMTgwaDIwLjg5QTExLjEyLDExLjEyLDAsMCwwLDIzNiwxNjguODlWODBBMTIsMTIsMCwwLDAsMjI0LDY4Wk0xOTYsMjAwLjg5YTMuMTIsMy4xMiwwLDAsMS0zLjExLDMuMTFINDBhNCw0LDAsMCwxLTQtNFY4OGE0LDQsMCwwLDEsNC00SDg1LjMzYTQsNCwwLDAsMSwyLjQuOGwyOS44NywyMi40YTQsNCwwLDAsMCwyLjQuOGg3MmE0LDQsMCwwLDEsNCw0Wm0zMi0zMmEzLjEyLDMuMTIsMCwwLDEtMy4xMSwzLjExSDIwNFYxMTJhMTIsMTIsMCwwLDAtMTItMTJIMTIxLjMzTDkyLjUzLDc4LjRhMTIuMDUsMTIuMDUsMCwwLDAtNy4yLTIuNEg2OFY1NmE0LDQsMCwwLDEsNC00aDQ1LjMzYTQsNCwwLDAsMSwyLjQuOEwxNDkuNiw3NS4yYTQsNCwwLDAsMCwyLjQuOGg3MmE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjZIMTU0TDEyNS43Myw0NC44YTE0LDE0LDAsMCwwLTguNC0yLjhINzJBMTQsMTQsMCwwLDAsNTgsNTZWNzRINDBBMTQsMTQsMCwwLDAsMjYsODhWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDE5Mi44OUExMy4xMiwxMy4xMiwwLDAsMCwyMDYsMjAwLjg5VjE4MmgxOC44OUExMy4xMiwxMy4xMiwwLDAsMCwyMzgsMTY4Ljg5VjgwQTE0LDE0LDAsMCwwLDIyNCw2NlpNMTk0LDIwMC44OWExLjExLDEuMTEsMCwwLDEtMS4xMSwxLjExSDQwYTIsMiwwLDAsMS0yLTJWODhhMiwyLDAsMCwxLDItMkg4NS4zM2EyLDIsMCwwLDEsMS4yLjRsMjkuODcsMjIuNEE2LDYsMCwwLDAsMTIwLDExMGg3MmEyLDIsMCwwLDEsMiwyWm0zMi0zMmExLjExLDEuMTEsMCwwLDEtMS4xMSwxLjExSDIwNlYxMTJhMTQsMTQsMCwwLDAtMTQtMTRIMTIyTDkzLjczLDc2LjhhMTQsMTQsMCwwLDAtOC40LTIuOEg3MFY1NmEyLDIsMCwwLDEsMi0yaDQ1LjMzYTIsMiwwLDAsMSwxLjIuNEwxNDguNCw3Ni44QTYsNiwwLDAsMCwxNTIsNzhoNzJhMiwyLDAsMCwxLDIsMloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsNTZIMTYwTDEzMy4zMywzNmEyMC4xMiwyMC4xMiwwLDAsMC0xMi00SDc2QTIwLDIwLDAsMCwwLDU2LDUyVjcySDM2QTIwLDIwLDAsMCwwLDE2LDkyVjIwNGEyMCwyMCwwLDAsMCwyMCwyMEgxODguODlBMTkuMTMsMTkuMTMsMCwwLDAsMjA4LDIwNC44OVYxODRoMjAuODlBMTkuMTMsMTkuMTMsMCwwLDAsMjQ4LDE2NC44OVY3NkEyMCwyMCwwLDAsMCwyMjgsNTZaTTE4NCwyMDBINDBWOTZIODBsMjguOCwyMS42QTEyLDEyLDAsMCwwLDExNiwxMjBoNjhabTQwLTQwSDIwOFYxMTZhMjAsMjAsMCwwLDAtMjAtMjBIMTIwTDkzLjMzLDc2YTIwLjEyLDIwLjEyLDAsMCwwLTEyLTRIODBWNTZoNDBsMjguOCwyMS42QTEyLDEyLDAsMCwwLDE1Niw4MGg2OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjRIMTU0LjY3TDEyNi45Myw0My4yYTE2LjEyLDE2LjEyLDAsMCwwLTkuNi0zLjJINzJBMTYsMTYsMCwwLDAsNTYsNTZWNzJINDBBMTYsMTYsMCwwLDAsMjQsODhWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDE5Mi44OUExNS4xMywxNS4xMywwLDAsMCwyMDgsMjAwLjg5VjE4NGgxNi44OUExNS4xMywxNS4xMywwLDAsMCwyNDAsMTY4Ljg5VjgwQTE2LDE2LDAsMCwwLDIyNCw2NFptMCwxMDRIMjA4VjExMmExNiwxNiwwLDAsMC0xNi0xNkgxMjIuNjdMOTQuOTMsNzUuMmExNi4xMiwxNi4xMiwwLDAsMC05LjYtMy4ySDcyVjU2aDQ1LjMzTDE0Ny4yLDc4LjRBOCw4LDAsMCwwLDE1Miw4MGg3MloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsODB2ODguODlhNy4xMSw3LjExLDAsMCwxLTcuMTEsNy4xMUgyMDBWMTEyYTgsOCwwLDAsMC04LThIMTIwTDkwLjEzLDgxLjZhOCw4LDAsMCwwLTQuOC0xLjZINjRWNTZhOCw4LDAsMCwxLDgtOGg0NS4zM2E4LDgsMCwwLDEsNC44LDEuNkwxNTIsNzJoNzJBOCw4LDAsMCwxLDIzMiw4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjQsNjRIMTU0LjY3TDEyNi45Myw0My4yYTE2LjEyLDE2LjEyLDAsMCwwLTkuNi0zLjJINzJBMTYsMTYsMCwwLDAsNTYsNTZWNzJINDBBMTYsMTYsMCwwLDAsMjQsODhWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDE5Mi44OUExNS4xMywxNS4xMywwLDAsMCwyMDgsMjAwLjg5VjE4NGgxNi44OUExNS4xMywxNS4xMywwLDAsMCwyNDAsMTY4Ljg5VjgwQTE2LDE2LDAsMCwwLDIyNCw2NFpNMTkyLDIwMEg0MFY4OEg4NS4zM2wyOS44NywyMi40QTgsOCwwLDAsMCwxMjAsMTEyaDcyWm0zMi0zMkgyMDhWMTEyYTE2LDE2LDAsMCwwLTE2LTE2SDEyMi42N0w5NC45Myw3NS4yYTE2LjEyLDE2LjEyLDAsMCwwLTkuNi0zLjJINzJWNTZoNDUuMzNMMTQ3LjIsNzguNEE4LDgsMCwwLDAsMTUyLDgwaDcyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Folders";
export { I as Folders };
