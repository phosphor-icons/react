/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Prescription";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODMuMzEsMTg4bDIyLjM1LTIyLjM0YTgsOCwwLDAsMC0xMS4zMi0xMS4zMkwxNzIsMTc2LjY5bC00MS4xNS00MS4xNkE1Miw1MiwwLDAsMCwxMjQsMzJINzJhOCw4LDAsMCwwLTgsOFYxOTJhOCw4LDAsMCwwLDE2LDBWMTM2aDI4LjY5bDUyLDUyLTIyLjM1LDIyLjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMkwxNzIsMTk5LjMxbDIyLjM0LDIyLjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMlpNODAsNDhoNDRhMzYsMzYsMCwwLDEsMCw3Mkg4MFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzcuNjYsMTg4bDI1LjE3LTI1LjE3YTQsNCwwLDAsMC01LjY2LTUuNjZMMTcyLDE4Mi4zNCwxMjEuNjYsMTMySDEyNGE0OCw0OCwwLDAsMCwwLTk2SDcyYTQsNCwwLDAsMC00LDRWMTkyYTQsNCwwLDAsMCw4LDBWMTMyaDM0LjM0bDU2LDU2LTI1LjE3LDI1LjE3YTQsNCwwLDAsMCw1LjY2LDUuNjZMMTcyLDE5My42NmwyNS4xNywyNS4xN2E0LDQsMCwwLDAsNS42Ni01LjY2Wk03Niw0NGg0OGE0MCw0MCwwLDAsMSwwLDgwSDc2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAuNDksMTg4bDIzLjc1LTIzLjc2YTYsNiwwLDAsMC04LjQ4LTguNDhMMTcyLDE3OS41MWwtNDUuNTgtNDUuNTdBNTAsNTAsMCwwLDAsMTI0LDM0SDcyYTYsNiwwLDAsMC02LDZWMTkyYTYsNiwwLDAsMCwxMiwwVjEzNGgzMS41MWw1NCw1NC0yMy43NSwyMy43NmE2LDYsMCwxLDAsOC40OCw4LjQ4TDE3MiwxOTYuNDlsMjMuNzYsMjMuNzVhNiw2LDAsMCwwLDguNDgtOC40OFpNNzgsNDZoNDZhMzgsMzgsMCwwLDEsMCw3Nkg3OFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODksMTg4bDE5LjUyLTE5LjUxYTEyLDEyLDAsMCwwLTE3LTE3TDE3MiwxNzEsMTM4LjkzLDEzOEE1Niw1NiwwLDAsMCwxMjQsMjhINzJBMTIsMTIsMCwwLDAsNjAsNDBWMTkyYTEyLDEyLDAsMCwwLDI0LDBWMTQwaDIzbDQ4LDQ4LTE5LjUyLDE5LjUxYTEyLDEyLDAsMCwwLDE3LDE3TDE3MiwyMDVsMTkuNTEsMTkuNTJhMTIsMTIsMCwwLDAsMTctMTdaTTg0LDUyaDQwYTMyLDMyLDAsMCwxLDAsNjRIODRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTIwSDk2VjcyaDMyYTI0LDI0LDAsMCwxLDAsNDhabTk2LTcyVjIwOGExNiwxNiwwLDAsMS0xNiwxNkg0OGExNiwxNiwwLDAsMS0xNi0xNlY0OEExNiwxNiwwLDAsMSw0OCwzMkgyMDhBMTYsMTYsMCwwLDEsMjI0LDQ4Wk0xODkuNjYsMTg2LjM0LDE3NS4zMSwxNzJsMTQuMzUtMTQuMzRhOCw4LDAsMCwwLTExLjMyLTExLjMyTDE2NCwxNjAuNjlsLTI2LTI2QTQwLDQwLDAsMCwwLDEyOCw1Nkg4OGE4LDgsMCwwLDAtOCw4VjE3NmE4LDgsMCwwLDAsMTYsMFYxMzZoMjAuNjlsMzYsMzYtMTQuMzUsMTQuMzRhOCw4LDAsMCwwLDExLjMyLDExLjMyTDE2NCwxODMuMzFsMTQuMzQsMTQuMzVhOCw4LDAsMCwwLDExLjMyLTExLjMyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsODRhNDQsNDQsMCwwLDEtNDQsNDRINzJWNDBoNTJBNDQsNDQsMCwwLDEsMTY4LDg0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE4My4zMSwxODhsMjIuMzUtMjIuMzRhOCw4LDAsMCwwLTExLjMyLTExLjMyTDE3MiwxNzYuNjlsLTQxLjE1LTQxLjE2QTUyLDUyLDAsMCwwLDEyNCwzMkg3MmE4LDgsMCwwLDAtOCw4VjE5MmE4LDgsMCwwLDAsMTYsMFYxMzZoMjguNjlsNTIsNTItMjIuMzUsMjIuMzRhOCw4LDAsMCwwLDExLjMyLDExLjMyTDE3MiwxOTkuMzFsMjIuMzQsMjIuMzVhOCw4LDAsMCwwLDExLjMyLTExLjMyWk04MCw0OGg0NGEzNiwzNiwwLDAsMSwwLDcySDgwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Prescription";
export { I as Prescription };
