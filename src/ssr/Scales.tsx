/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Scales";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuNDMsMTMzbC0zMi04MGgwYTgsOCwwLDAsMC05LjE2LTQuODRMMTM2LDYyVjQwYTgsOCwwLDAsMC0xNiwwVjY1LjU4TDU0LjI2LDgwLjE5QTgsOCwwLDAsMCw0OC41Nyw4NWgwdi4wNkwxNi41NywxNjVhNy45Miw3LjkyLDAsMCwwLS41NywzYzAsMjMuMzEsMjQuNTQsMzIsNDAsMzJzNDAtOC42OSw0MC0zMmE3LjkyLDcuOTIsMCwwLDAtLjU3LTNMNjYuOTIsOTMuNzcsMTIwLDgyVjIwOEgxMDRhOCw4LDAsMCwwLDAsMTZoNDhhOCw4LDAsMCwwLDAtMTZIMTM2Vjc4LjQyTDE4Nyw2Ny4xLDE2MC41NywxMzNhNy45Miw3LjkyLDAsMCwwLS41NywzYzAsMjMuMzEsMjQuNTQsMzIsNDAsMzJzNDAtOC42OSw0MC0zMkE3LjkyLDcuOTIsMCwwLDAsMjM5LjQzLDEzM1pNNTYsMTg0Yy03LjUzLDAtMjIuNzYtMy42MS0yMy45My0xNC42NEw1NiwxMDkuNTRsMjMuOTMsNTkuODJDNzguNzYsMTgwLjM5LDYzLjUzLDE4NCw1NiwxODRabTE0NC0zMmMtNy41MywwLTIyLjc2LTMuNjEtMjMuOTMtMTQuNjRMMjAwLDc3LjU0bDIzLjkzLDU5LjgyQzIyMi43NiwxNDguMzksMjA3LjUzLDE1MiwyMDAsMTUyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuNzEsMTM0LjUxbC0zMi04MGgwYTQsNCwwLDAsMC00LjU3LTIuNDFMMTMyLDY3VjQwYTQsNCwwLDAsMC04LDBWNjguNzlMNTUuMTMsODQuMWE0LDQsMCwwLDAtMi44NCwyLjQxaDB2MGgwbC0zMiw4MEE0LDQsMCwwLDAsMjAsMTY4YzAsMjAuNCwyMi4wOCwyOCwzNiwyOHMzNi03LjYsMzYtMjhhNCw0LDAsMCwwLS4yOS0xLjQ5TDYxLjQ2LDkwLjg4LDEyNCw3N1YyMTJIMTA0YTQsNCwwLDAsMCwwLDhoNDhhNCw0LDAsMCwwLDAtOEgxMzJWNzUuMjFsNjEuNDctMTMuNjYtMjkuMTgsNzNBNCw0LDAsMCwwLDE2NCwxMzZjMCwyMC40LDIyLjA4LDI4LDM2LDI4czM2LTcuNiwzNi0yOEE0LDQsMCwwLDAsMjM1LjcxLDEzNC41MVpNNTYsMTg4Yy03LjE1LDAtMjcuMzctMy41Ni0yOC0xOS4yN2wyOC03MCwyOCw3MEM4My4zNywxODQuNDQsNjMuMTUsMTg4LDU2LDE4OFptMTQ0LTMyYy03LjE1LDAtMjcuMzctMy41Ni0yOC0xOS4yN2wyOC03MCwyOCw3MEMyMjcuMzcsMTUyLjQ0LDIwNy4xNSwxNTYsMjAwLDE1NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNTcsMTMzLjc3bC0zMi04MGgwYTYsNiwwLDAsMC02Ljg2LTMuNjNMMTM0LDY0LjUyVjQwYTYsNiwwLDAsMC0xMiwwVjY3LjE5bC02Ny4zLDE1YTYsNiwwLDAsMC00LjI3LDMuNjNoMHYwbC0zMiw4MEE2LjEsNi4xLDAsMCwwLDE4LDE2OGMwLDIxLjg2LDIzLjMxLDMwLDM4LDMwczM4LTguMTQsMzgtMzBhNi4xLDYuMSwwLDAsMC0uNDMtMi4yM0w2NC4xOSw5Mi4zMywxMjIsNzkuNDhWMjEwSDEwNGE2LDYsMCwwLDAsMCwxMmg0OGE2LDYsMCwwLDAsMC0xMkgxMzRWNzYuODFsNTYuMjEtMTIuNDktMjcuNzgsNjkuNDVBNi4xLDYuMSwwLDAsMCwxNjIsMTM2YzAsMjEuODYsMjMuMzEsMzAsMzgsMzBzMzgtOC4xNCwzOC0zMEE2LjEsNi4xLDAsMCwwLDIzNy41NywxMzMuNzdaTTU2LDE4NmEzNi44OSwzNi44OSwwLDAsMS0xNy40OC00LjU2Yy01LjM3LTMuMTMtOC4xNS03LjE4LTguNDktMTIuMzdsMjYtNjQuOTEsMjYsNjQuOTFDODEuMDYsMTgyLjg1LDYyLjU4LDE4Niw1NiwxODZabTE0NC0zMmEzNi44OSwzNi44OSwwLDAsMS0xNy40OC00LjU2Yy01LjM3LTMuMTMtOC4xNS03LjE4LTguNDktMTIuMzdsMjYtNjQuOTEsMjYsNjQuOTFDMjI1LjA2LDE1MC44NSwyMDYuNTgsMTU0LDIwMCwxNTRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMTQsMTMxLjU0bC0zMi04MGgwYTEyLDEyLDAsMCwwLTEzLjczLTcuMjVMMTQwLDU3VjQwYTEyLDEyLDAsMCwwLTI0LDBWNjIuMzdMNTMuNCw3Ni4yOWExMiwxMiwwLDAsMC04LjU0LDcuMjVoMGwwLDB2MGwtMzIsNzkuOTJBMTIsMTIsMCwwLDAsMTIsMTY4YzAsMTIuMTMsNi4yLDIyLjQzLDE3LjQ1LDI5QTU1LDU1LDAsMCwwLDU2LDIwNGE1NSw1NSwwLDAsMCwyNi41NS03QzkzLjgsMTkwLjQzLDEwMCwxODAuMTMsMTAwLDE2OGExMiwxMiwwLDAsMC0uODYtNC40Nkw3Mi4zOCw5Ni42NSwxMTYsODdWMjA0SDEwNGExMiwxMiwwLDAsMCwwLDI0aDQ4YTEyLDEyLDAsMCwwLDAtMjRIMTQwVjgxLjYzbDQwLjQyLTktMjMuNTYsNTguOUExMiwxMiwwLDAsMCwxNTYsMTM2YzAsMTIuMTMsNi4yLDIyLjQzLDE3LjQ1LDI5YTUzLjc4LDUzLjc4LDAsMCwwLDUzLjEsMEMyMzcuOCwxNTguNDMsMjQ0LDE0OC4xMywyNDQsMTM2QTEyLDEyLDAsMCwwLDI0My4xNCwxMzEuNTRaTTU2LDE4MGMtMy43MSwwLTE4LTEuODctMTkuODEtMTAuMThMNTYsMTIwLjMxbDE5LjgxLDQ5LjUxQzc0LDE3OC4xMyw1OS43MSwxODAsNTYsMTgwWm0xNDQtMzJjLTMuNzEsMC0xOC0xLjg3LTE5LjgxLTEwLjE4TDIwMCw4OC4zMWwxOS44MSw0OS41MUMyMTgsMTQ2LjEzLDIwMy43MSwxNDgsMjAwLDE0OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuNDMsMTMzbC0zMi04MEE4LDgsMCwwLDAsMjAwLDQ4YTguMjcsOC4yNywwLDAsMC0xLjczLjIxTDEzNiw2MlY0MGE4LDgsMCwwLDAtMTYsMFY2NS41OEw1NC4yNyw4MC4yMUE4LDgsMCwwLDAsNDguNTcsODVsLTMyLDgwYTcuOTIsNy45MiwwLDAsMC0uNTcsM2MwLDIzLjMxLDI0LjU0LDMyLDQwLDMyczQwLTguNjksNDAtMzJhNy45Miw3LjkyLDAsMCwwLS41Ny0zTDY2LjkyLDkzLjc3LDEyMCw4MlYyMDhIMTA0YTgsOCwwLDAsMCwwLDE2aDQ4YTgsOCwwLDAsMCwwLTE2SDEzNlY3OC40MkwxODcsNjcuMSwxNjAuNTcsMTMzYTcuOTIsNy45MiwwLDAsMC0uNTcsM2MwLDIzLjMxLDI0LjU0LDMyLDQwLDMyczQwLTguNjksNDAtMzJBNy45Miw3LjkyLDAsMCwwLDIzOS40MywxMzNabS0xNjAsMzVIMzIuNjJMNTYsMTA5LjU0Wm05Ny4yNC0zMkwyMDAsNzcuNTQsMjIzLjM4LDEzNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Niw4OGwzMiw4MGMwLDE3LjY3LTIwLDI0LTMyLDI0cy0zMi02LjMzLTMyLTI0Wk0yMDAsNTZsLTMyLDgwYzAsMTcuNjcsMjAsMjQsMzIsMjRzMzItNi4zMywzMi0yNFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzkuNDMsMTMzbC0zMi04MGgwYTgsOCwwLDAsMC05LjE2LTQuODRMMTM2LDYyVjQwYTgsOCwwLDAsMC0xNiwwVjY1LjU4TDU0LjI2LDgwLjE5QTgsOCwwLDAsMCw0OC41Nyw4NWgwdi4wNkwxNi41NywxNjVhNy45Miw3LjkyLDAsMCwwLS41NywzYzAsMjMuMzEsMjQuNTQsMzIsNDAsMzJzNDAtOC42OSw0MC0zMmE3LjkyLDcuOTIsMCwwLDAtLjU3LTNMNjYuOTIsOTMuNzcsMTIwLDgyVjIwOEgxMDRhOCw4LDAsMCwwLDAsMTZoNDhhOCw4LDAsMCwwLDAtMTZIMTM2Vjc4LjQyTDE4Nyw2Ny4xLDE2MC41NywxMzNhNy45Miw3LjkyLDAsMCwwLS41NywzYzAsMjMuMzEsMjQuNTQsMzIsNDAsMzJzNDAtOC42OSw0MC0zMkE3LjkyLDcuOTIsMCwwLDAsMjM5LjQzLDEzM1pNNTYsMTg0Yy03LjUzLDAtMjIuNzYtMy42MS0yMy45My0xNC42NEw1NiwxMDkuNTRsMjMuOTMsNTkuODJDNzguNzYsMTgwLjM5LDYzLjUzLDE4NCw1NiwxODRabTE0NC0zMmMtNy41MywwLTIyLjc2LTMuNjEtMjMuOTMtMTQuNjRMMjAwLDc3LjU0bDIzLjkzLDU5LjgyQzIyMi43NiwxNDguMzksMjA3LjUzLDE1MiwyMDAsMTUyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Scales";
export { I as Scales };
