/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CurrencyRub";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMTUyYTYwLDYwLDAsMCwwLDAtMTIwSDg4YTgsOCwwLDAsMC04LDh2OTZINTZhOCw4LDAsMCwwLDAsMTZIODB2MTZINTZhOCw4LDAsMCwwLDAsMTZIODB2MzJhOCw4LDAsMCwwLDE2LDBWMTg0aDQ4YTgsOCwwLDAsMCwwLTE2SDk2VjE1MlpNOTYsNDhoNTJhNDQsNDQsMCwwLDEsMCw4OEg5NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMzZIODhhNCw0LDAsMCwwLTQsNFYxNDBINTZhNCw0LDAsMCwwLDAsOEg4NHYyNEg1NmE0LDQsMCwwLDAsMCw4SDg0djM2YTQsNCwwLDAsMCw4LDBWMTgwaDUyYTQsNCwwLDAsMCwwLThIOTJWMTQ4aDU2YTU2LDU2LDAsMCwwLDAtMTEyWm0wLDEwNEg5MlY0NGg1NmE0OCw0OCwwLDAsMSwwLDk2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMTUwYTU4LDU4LDAsMCwwLDAtMTE2SDg4YTYsNiwwLDAsMC02LDZ2OThINTZhNiw2LDAsMCwwLDAsMTJIODJ2MjBINTZhNiw2LDAsMCwwLDAsMTJIODJ2MzRhNiw2LDAsMCwwLDEyLDBWMTgyaDUwYTYsNiwwLDAsMCwwLTEySDk0VjE1MFpNOTQsNDZoNTRhNDYsNDYsMCwwLDEsMCw5Mkg5NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMTU2YTY0LDY0LDAsMCwwLDAtMTI4SDg4QTEyLDEyLDAsMCwwLDc2LDQwdjkySDU2YTEyLDEyLDAsMCwwLDAsMjRINzZ2MTZINTZhMTIsMTIsMCwwLDAsMCwyNEg3NnYyMGExMiwxMiwwLDAsMCwyNCwwVjE5Nmg0NGExMiwxMiwwLDAsMCwwLTI0SDEwMFYxNTZaTTEwMCw1Mmg0OGE0MCw0MCwwLDAsMSwwLDgwSDEwMFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTA0YTI0LDI0LDAsMCwxLTI0LDI0SDExMlY4MGgzMkEyNCwyNCwwLDAsMSwxNjgsMTA0Wm02NCwyNEExMDQsMTA0LDAsMSwxLDEyOCwyNCwxMDQuMTEsMTA0LjExLDAsMCwxLDIzMiwxMjhabS00OC0yNGE0MCw0MCwwLDAsMC00MC00MEgxMDRhOCw4LDAsMCwwLTgsOHY1Nkg4OGE4LDgsMCwwLDAsMCwxNmg4djE2SDg4YTgsOCwwLDAsMCwwLDE2aDh2MTZhOCw4LDAsMCwwLDE2LDBWMTc2aDQwYTgsOCwwLDAsMCwwLTE2SDExMlYxNDRoMzJBNDAsNDAsMCwwLDAsMTg0LDEwNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsOTJhNTIsNTIsMCwwLDEtNTIsNTJIODhWNDBoNjBBNTIsNTIsMCwwLDEsMjAwLDkyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE0OCwxNTJhNjAsNjAsMCwwLDAsMC0xMjBIODhhOCw4LDAsMCwwLTgsOHY5Nkg1NmE4LDgsMCwwLDAsMCwxNkg4MHYxNkg1NmE4LDgsMCwwLDAsMCwxNkg4MHYzMmE4LDgsMCwwLDAsMTYsMFYxODRoNDhhOCw4LDAsMCwwLDAtMTZIOTZWMTUyWk05Niw0OGg1MmE0NCw0NCwwLDAsMSwwLDg4SDk2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CurrencyRub";
export { I as CurrencyRub };
