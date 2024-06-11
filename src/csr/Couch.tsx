/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Couch";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTA0VjcyYTIwLDIwLDAsMCwwLTIwLTIwSDMyQTIwLDIwLDAsMCwwLDEyLDcydjMyYTIwLDIwLDAsMCwwLTgsMTZ2NDhhMjAsMjAsMCwwLDAsMjAsMjBoNHYxMmExMiwxMiwwLDAsMCwyNCwwVjE4OEgyMDR2MTJhMTIsMTIsMCwwLDAsMjQsMFYxODhoNGEyMCwyMCwwLDAsMCwyMC0yMFYxMjBBMjAsMjAsMCwwLDAsMjQ0LDEwNFptLTI0LTRIMjA4YTIwLDIwLDAsMCwwLTIwLDIwdjRIMTQwVjc2aDgwWk0xMTYsNzZ2NDhINjh2LTRhMjAsMjAsMCwwLDAtMjAtMjBIMzZWNzZabTExMiw4OEgyOFYxMjRINDR2MTJhMTIsMTIsMCwwLDAsMTIsMTJIMjAwYTEyLDEyLDAsMCwwLDEyLTEyVjEyNGgxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTIwdjQ4YTgsOCwwLDAsMS04LDhIMjRhOCw4LDAsMCwxLTgtOFYxMjBhOCw4LDAsMCwxLDgtOFY3MmE4LDgsMCwwLDEsOC04SDIyNGE4LDgsMCwwLDEsOCw4djQwQTgsOCwwLDAsMSwyNDAsMTIwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0MCwxMDYuMTdWNzJhMTYsMTYsMCwwLDAtMTYtMTZIMzJBMTYsMTYsMCwwLDAsMTYsNzJ2MzQuMTdBMTYsMTYsMCwwLDAsOCwxMjB2NDhhMTYsMTYsMCwwLDAsMTYsMTZoOHYxNmE4LDgsMCwwLDAsMTYsMFYxODRIMjA4djE2YTgsOCwwLDAsMCwxNiwwVjE4NGg4YTE2LDE2LDAsMCwwLDE2LTE2VjEyMEExNiwxNiwwLDAsMCwyNDAsMTA2LjE3Wk0yMjQsMTA0aC04YTE2LDE2LDAsMCwwLTE2LDE2djE2SDEzNlY3Mmg4OFpNMTIwLDcydjY0SDU2VjEyMGExNiwxNiwwLDAsMC0xNi0xNkgzMlY3MlptMTEyLDk2SDI0VjEyMEg0MHYyNGE4LDgsMCwwLDAsOCw4SDIwOGE4LDgsMCwwLDAsOC04VjEyMGgxNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNiwxMDBWNzJBMTYsMTYsMCwwLDEsMzIsNTZoODRhNCw0LDAsMCwxLDQsNHY3Nkg2NGEzMiwzMiwwLDAsMC0zMi0zMkgyMEE0LDQsMCwwLDEsMTYsMTAwWm0yMDgsNGgxMmE0LDQsMCwwLDAsNC00VjcyYTE2LDE2LDAsMCwwLTE2LTE2SDE0MGE0LDQsMCwwLDAtNCw0djc2aDU2QTMyLDMyLDAsMCwxLDIyNCwxMDRabTgsMTZoLThhMTYsMTYsMCwwLDAtMTYsMTZ2OGE4LDgsMCwwLDEtOCw4SDU2YTgsOCwwLDAsMS04LTh2LThhMTYsMTYsMCwwLDAtMTYtMTZIMjRBMTYsMTYsMCwwLDAsOCwxMzZ2MzJhMTYsMTYsMCwwLDAsMTYsMTZoOHYxNS43M0E4LjE4LDguMTgsMCwwLDAsMzkuNDcsMjA4LDgsOCwwLDAsMCw0OCwyMDBWMTg0SDIwOHYxNS43M2E4LjE3LDguMTcsMCwwLDAsNy40Nyw4LjI1LDgsOCwwLDAsMCw4LjUzLThWMTg0aDhhMTYsMTYsMCwwLDAsMTYtMTZWMTM2QTE2LDE2LDAsMCwwLDIzMiwxMjBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzgsMTA3LjM3VjcyYTE0LDE0LDAsMCwwLTE0LTE0SDMyQTE0LDE0LDAsMCwwLDE4LDcydjM1LjM3QTE0LDE0LDAsMCwwLDEwLDEyMHY0OGExNCwxNCwwLDAsMCwxNCwxNEgzNHYxOGE2LDYsMCwwLDAsMTIsMFYxODJIMjEwdjE4YTYsNiwwLDAsMCwxMiwwVjE4MmgxMGExNCwxNCwwLDAsMCwxNC0xNFYxMjBBMTQsMTQsMCwwLDAsMjM4LDEwNy4zN1pNMjI2LDcydjM0SDIxNmExNCwxNCwwLDAsMC0xNCwxNHYxOEgxMzRWNzBoOTBBMiwyLDAsMCwxLDIyNiw3MlpNMzIsNzBoOTB2NjhINTRWMTIwYTE0LDE0LDAsMCwwLTE0LTE0SDMwVjcyQTIsMiwwLDAsMSwzMiw3MFptMjAyLDk4YTIsMiwwLDAsMS0yLDJIMjRhMiwyLDAsMCwxLTItMlYxMjBhMiwyLDAsMCwxLDItMkg0MGEyLDIsMCwwLDEsMiwydjI0YTYsNiwwLDAsMCw2LDZIMjA4YTYsNiwwLDAsMCw2LTZWMTIwYTIsMiwwLDAsMSwyLTJoMTZhMiwyLDAsMCwxLDIsMloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTA2LjE3VjcyYTE2LDE2LDAsMCwwLTE2LTE2SDMyQTE2LDE2LDAsMCwwLDE2LDcydjM0LjE3QTE2LDE2LDAsMCwwLDgsMTIwdjQ4YTE2LDE2LDAsMCwwLDE2LDE2aDh2MTZhOCw4LDAsMCwwLDE2LDBWMTg0SDIwOHYxNmE4LDgsMCwwLDAsMTYsMFYxODRoOGExNiwxNiwwLDAsMCwxNi0xNlYxMjBBMTYsMTYsMCwwLDAsMjQwLDEwNi4xN1pNMjI0LDEwNGgtOGExNiwxNiwwLDAsMC0xNiwxNnYxNkgxMzZWNzJoODhaTTEyMCw3MnY2NEg1NlYxMjBhMTYsMTYsMCwwLDAtMTYtMTZIMzJWNzJabTExMiw5NkgyNFYxMjBINDB2MjRhOCw4LDAsMCwwLDgsOEgyMDhhOCw4LDAsMCwwLDgtOFYxMjBoMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTA4LjdWNzJhMTIsMTIsMCwwLDAtMTItMTJIMzJBMTIsMTIsMCwwLDAsMjAsNzJ2MzYuN0ExMiwxMiwwLDAsMCwxMiwxMjB2NDhhMTIsMTIsMCwwLDAsMTIsMTJIMzZ2MjBhNCw0LDAsMCwwLDgsMFYxODBIMjEydjIwYTQsNCwwLDAsMCw4LDBWMTgwaDEyYTEyLDEyLDAsMCwwLDEyLTEyVjEyMEExMiwxMiwwLDAsMCwyMzYsMTA4LjdaTTIyOCw3MnYzNkgyMTZhMTIsMTIsMCwwLDAtMTIsMTJ2MjBIMTMyVjY4aDkyQTQsNCwwLDAsMSwyMjgsNzJaTTMyLDY4aDkydjcySDUyVjEyMGExMiwxMiwwLDAsMC0xMi0xMkgyOFY3MkE0LDQsMCwwLDEsMzIsNjhaTTIzNiwxNjhhNCw0LDAsMCwxLTQsNEgyNGE0LDQsMCwwLDEtNC00VjEyMGE0LDQsMCwwLDEsNC00SDQwYTQsNCwwLDAsMSw0LDR2MjRhNCw0LDAsMCwwLDQsNEgyMDhhNCw0LDAsMCwwLDQtNFYxMjBhNCw0LDAsMCwxLDQtNGgxNmE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Couch";
export { I as Couch };
