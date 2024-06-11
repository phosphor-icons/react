/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Church";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguMTIsMTQ1LjE0LDE5MiwxMjMuNDdWMTA0YTgsOCwwLDAsMC00LTdMMTM2LDY3LjM2VjQ4aDE2YTgsOCwwLDAsMCwwLTE2SDEzNlYxNmE4LDgsMCwwLDAtMTYsMFYzMkgxMDRhOCw4LDAsMCwwLDAsMTZoMTZWNjcuMzZMNjgsOTcuMDVhOCw4LDAsMCwwLTQsN3YxOS40N0wyNy44OCwxNDUuMTRBOCw4LDAsMCwwLDI0LDE1MnY2NGE4LDgsMCwwLDAsOCw4aDgwYTgsOCwwLDAsMCw4LThWMTY4YTgsOCwwLDAsMSwxNiwwdjQ4YTgsOCwwLDAsMCw4LDhoODBhOCw4LDAsMCwwLDgtOFYxNTJBOCw4LDAsMCwwLDIyOC4xMiwxNDUuMTRaTTQwLDE1Ni41M2wyNC0xNC40VjIwOEg0MFpNMTI4LDE0NGEyNCwyNCwwLDAsMC0yNCwyNHY0MEg4MFYxMDguNjRsNDgtMjcuNDMsNDgsMjcuNDNWMjA4SDE1MlYxNjhBMjQsMjQsMCwwLDAsMTI4LDE0NFptODgsNjRIMTkyVjE0Mi4xM2wyNCwxNC40WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuMDYsMTQ4LjU3LDE4OCwxMjUuNzRWMTA0YTQsNCwwLDAsMC0yLTMuNDdMMTMyLDY5LjY4VjQ0aDIwYTQsNCwwLDAsMCwwLThIMTMyVjE2YTQsNCwwLDAsMC04LDBWMzZIMTA0YTQsNCwwLDAsMCwwLDhoMjBWNjkuNjhMNzAsMTAwLjUzQTQsNCwwLDAsMCw2OCwxMDR2MjEuNzRMMjkuOTQsMTQ4LjU3QTQsNCwwLDAsMCwyOCwxNTJ2NjRhNCw0LDAsMCwwLDQsNGg4MGE0LDQsMCwwLDAsNC00VjE2OGExMiwxMiwwLDAsMSwyNCwwdjQ4YTQsNCwwLDAsMCw0LDRoODBhNCw0LDAsMCwwLDQtNFYxNTJBNCw0LDAsMCwwLDIyNi4wNiwxNDguNTdaTTM2LDE1NC4yNmwzMi0xOS4yVjIxMkgzNlpNMTI4LDE0OGEyMCwyMCwwLDAsMC0yMCwyMHY0NEg3NlYxMDYuMzJsNTItMjkuNzEsNTIsMjkuNzFWMjEySDE0OFYxNjhBMjAsMjAsMCwwLDAsMTI4LDE0OFptOTIsNjRIMTg4VjEzNS4wNmwzMiwxOS4yWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMDksMTQ2Ljg2LDE5MCwxMjQuNlYxMDRhNiw2LDAsMCwwLTMtNS4yMUwxMzQsNjguNTJWNDZoMThhNiw2LDAsMCwwLDAtMTJIMTM0VjE2YTYsNiwwLDAsMC0xMiwwVjM0SDEwNGE2LDYsMCwwLDAsMCwxMmgxOFY2OC41Mkw2OSw5OC43OUE2LDYsMCwwLDAsNjYsMTA0djIwLjZMMjguOTEsMTQ2Ljg2QTYsNiwwLDAsMCwyNiwxNTJ2NjRhNiw2LDAsMCwwLDYsNmg4MGE2LDYsMCwwLDAsNi02VjE2OGExMCwxMCwwLDAsMSwyMCwwdjQ4YTYsNiwwLDAsMCw2LDZoODBhNiw2LDAsMCwwLDYtNlYxNTJBNiw2LDAsMCwwLDIyNy4wOSwxNDYuODZaTTM4LDE1NS40bDI4LTE2LjhWMjEwSDM4Wm05MC05LjRhMjIsMjIsMCwwLDAtMjIsMjJ2NDJINzhWMTA3LjQ4bDUwLTI4LjU3LDUwLDI4LjU3VjIxMEgxNTBWMTY4QTIyLDIyLDAsMCwwLDEyOCwxNDZabTkwLDY0SDE5MFYxMzguNmwyOCwxNi44WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuMTcsMTQxLjcxLDE5NiwxMjEuMjFWMTA0QTEyLDEyLDAsMCwwLDE5MCw5My41OEwxNDAsNjVWNTJoMTJhMTIsMTIsMCwwLDAsMC0yNEgxNDBWMTZhMTIsMTIsMCwwLDAtMjQsMFYyOEgxMDRhMTIsMTIsMCwwLDAsMCwyNGgxMlY2NUw2Ni4wNSw5My41OEExMiwxMiwwLDAsMCw2MCwxMDR2MTcuMjFsLTM0LjE3LDIwLjVBMTIsMTIsMCwwLDAsMjAsMTUydjY0YTEyLDEyLDAsMCwwLDEyLDEyaDc2YTEyLDEyLDAsMCwwLDEyLTEyVjE3MmE4LDgsMCwwLDEsMTYsMHY0NGExMiwxMiwwLDAsMCwxMiwxMmg3NmExMiwxMiwwLDAsMCwxMi0xMlYxNTJBMTIsMTIsMCwwLDAsMjMwLjE3LDE0MS43MVpNNDQsMTU4Ljc5bDE2LTkuNlYyMDRINDRaTTEyOCwxNDBhMzIsMzIsMCwwLDAtMzIsMzJ2MzJIODRWMTExbDQ0LTI1LjE0TDE3MiwxMTF2OTNIMTYwVjE3MkEzMiwzMiwwLDAsMCwxMjgsMTQwWm04NCw2NEgxOTZWMTQ5LjE5bDE2LDkuNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguMTIsMTQ1LjE0LDE5MiwxMjMuNDdWMTA0YTgsOCwwLDAsMC00LTdMMTM2LDY3LjM2VjQ4aDE2YTgsOCwwLDAsMCwwLTE2SDEzNlYxNmE4LDgsMCwwLDAtMTYsMFYzMkgxMDRhOCw4LDAsMCwwLDAsMTZoMTZWNjcuMzZMNjgsOTcuMDVhOCw4LDAsMCwwLTQsN3YxOS40N0wyNy44OCwxNDUuMTRBOCw4LDAsMCwwLDI0LDE1MnY2NGE4LDgsMCwwLDAsOCw4aDcyYTgsOCwwLDAsMCw4LThWMTY4YTE2LDE2LDAsMCwxLDMyLDB2NDhhOCw4LDAsMCwwLDgsOGg3MmE4LDgsMCwwLDAsOC04VjE1MkE4LDgsMCwwLDAsMjI4LjEyLDE0NS4xNFpNNjQsMjA4SDQwVjE1Ni41M2wyNC0xNC40Wm0xNTIsMEgxOTJWMTQyLjEzbDI0LDE0LjRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTUydjY0SDE4NFYxMjhaTTMyLDIxNkg3MlYxMjhMMzIsMTUyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyOC4xMiwxNDUuMTQsMTkyLDEyMy40N1YxMDRhOCw4LDAsMCwwLTQtN0wxMzYsNjcuMzZWNDhoMTZhOCw4LDAsMCwwLDAtMTZIMTM2VjE2YTgsOCwwLDAsMC0xNiwwVjMySDEwNGE4LDgsMCwwLDAsMCwxNmgxNlY2Ny4zNkw2OCw5Ny4wNWE4LDgsMCwwLDAtNCw3djE5LjQ3TDI3Ljg4LDE0NS4xNEE4LDgsMCwwLDAsMjQsMTUydjY0YTgsOCwwLDAsMCw4LDhoODBhOCw4LDAsMCwwLDgtOFYxNjhhOCw4LDAsMCwxLDE2LDB2NDhhOCw4LDAsMCwwLDgsOGg4MGE4LDgsMCwwLDAsOC04VjE1MkE4LDgsMCwwLDAsMjI4LjEyLDE0NS4xNFpNNDAsMTU2LjUzbDI0LTE0LjRWMjA4SDQwWk0xMjgsMTQ0YTI0LDI0LDAsMCwwLTI0LDI0djQwSDgwVjEwOC42NGw0OC0yNy40Myw0OCwyNy40M1YyMDhIMTUyVjE2OEEyNCwyNCwwLDAsMCwxMjgsMTQ0Wm04OCw2NEgxOTJWMTQyLjEzbDI0LDE0LjRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Church";
export { I as Church };
