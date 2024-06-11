/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Lectern";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDkuODcsMTE5LjA2bC00MC04MEExOS44OSwxOS44OSwwLDAsMCwxOTIsMjhINjRBMTkuODksMTkuODksMCwwLDAsNDYuMTMsMzkuMDZsLTQwLDgwQTIwLDIwLDAsMCwwLDI0LDE0OGg5MnY1Nkg5NmExMiwxMiwwLDAsMCwwLDI0aDY0YTEyLDEyLDAsMCwwLDAtMjRIMTQwVjE0OGg5MmEyMCwyMCwwLDAsMCwxNy44OS0yOC45NFpNMzAuNDksMTI0bDM2LTcyaDEyM2wzNiw3MlpNMTkyLDEwMGExMiwxMiwwLDAsMS0xMiwxMkg3NmExMiwxMiwwLDAsMSwwLTI0SDE4MEExMiwxMiwwLDAsMSwxOTIsMTAwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTM2SDI0YTgsOCwwLDAsMS03LjE2LTExLjU4bDQwLTgwQTgsOCwwLDAsMSw2NCw0MEgxOTJhOCw4LDAsMCwxLDcuMTYsNC40Mmw0MCw4MEE4LDgsMCwwLDEsMjMyLDEzNloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNDYuMywxMjAuODRsLTQwLTgwQTE1LjkyLDE1LjkyLDAsMCwwLDE5MiwzMkg2NEExNS45MiwxNS45MiwwLDAsMCw0OS43LDQwLjg0bC00MCw4MEExNiwxNiwwLDAsMCwyNCwxNDRoOTZ2NjRIOTZhOCw4LDAsMCwwLDAsMTZoNjRhOCw4LDAsMCwwLDAtMTZIMTM2VjE0NGg5NmExNiwxNiwwLDAsMCwxNC4zMS0yMy4xNlpNMjQsMTI4LDY0LDQ4SDE5Mmw0MCw4MFptMTY4LTI0YTgsOCwwLDAsMS04LDhINzJhOCw4LDAsMCwxLDAtMTZIMTg0QTgsOCwwLDAsMSwxOTIsMTA0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYuMywxMjAuODRsLTQwLTgwQTE1LjkyLDE1LjkyLDAsMCwwLDE5MiwzMkg2NEExNS45MiwxNS45MiwwLDAsMCw0OS43LDQwLjg0bC00MCw4MEExNiwxNiwwLDAsMCwyNCwxNDRoOTZ2NjRIOTZhOCw4LDAsMCwwLDAsMTZoNjRhOCw4LDAsMCwwLDAtMTZIMTM2VjE0NGg5NmExNiwxNiwwLDAsMCwxNC4zMS0yMy4xNlpNMTkyLDEyMEg2NGE4LDgsMCwwLDEsMC0xNkgxOTJhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQuNTEsMTIxLjc0bC00MC04MEExMy45MiwxMy45MiwwLDAsMCwxOTIsMzRINjRhMTMuOTIsMTMuOTIsMCwwLDAtMTIuNTIsNy43NGwtNDAsODBBMTQsMTQsMCwwLDAsMjQsMTQyaDk4djY4SDk2YTYsNiwwLDAsMCwwLDEyaDY0YTYsNiwwLDAsMCwwLTEySDEzNFYxNDJoOThhMTQsMTQsMCwwLDAsMTIuNTItMjAuMjZabS0xMC44Miw3LjMxYTEuOTMsMS45MywwLDAsMS0xLjcuOTVIMjRhMiwyLDAsMCwxLTEuNzktMi44OWw0MC04MEEyLDIsMCwwLDEsNjQsNDZIMTkyYTIsMiwwLDAsMSwxLjc5LDEuMTFsNDAsODBBMiwyLDAsMCwxLDIzMy42OSwxMjkuMDVaTTE5MCwxMDRhNiw2LDAsMCwxLTYsNkg3MmE2LDYsMCwwLDEsMC0xMkgxODRBNiw2LDAsMCwxLDE5MCwxMDRaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYuMywxMjAuODRsLTQwLTgwQTE1LjkyLDE1LjkyLDAsMCwwLDE5MiwzMkg2NEExNS45MiwxNS45MiwwLDAsMCw0OS43LDQwLjg0bC00MCw4MEExNiwxNiwwLDAsMCwyNCwxNDRoOTZ2NjRIOTZhOCw4LDAsMCwwLDAsMTZoNjRhOCw4LDAsMCwwLDAtMTZIMTM2VjE0NGg5NmExNiwxNiwwLDAsMCwxNC4zMS0yMy4xNlpNMjQsMTI4LDY0LDQ4SDE5Mmw0MCw4MFptMTY4LTI0YTgsOCwwLDAsMS04LDhINzJhOCw4LDAsMCwxLDAtMTZIMTg0QTgsOCwwLDAsMSwxOTIsMTA0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDIuNzIsMTIyLjYzbC00MC04MEExMS45MywxMS45MywwLDAsMCwxOTIsMzZINjRhMTEuOTMsMTEuOTMsMCwwLDAtMTAuNzMsNi42M2wtNDAsODBBMTIsMTIsMCwwLDAsMjQsMTQwSDEyNHY3Mkg5NmE0LDQsMCwwLDAsMCw4aDY0YTQsNCwwLDAsMCwwLThIMTMyVjE0MEgyMzJhMTIsMTIsMCwwLDAsMTAuNzMtMTcuMzdabS03LjMzLDcuNDdBMy45NCwzLjk0LDAsMCwxLDIzMiwxMzJIMjRhNCw0LDAsMCwxLTMuNTgtNS43OWw0MC04MEE0LDQsMCwwLDEsNjQsNDRIMTkyYTQsNCwwLDAsMSwzLjU4LDIuMjFsNDAsODBBMy45NCwzLjk0LDAsMCwxLDIzNS4zOSwxMzAuMVpNMTg4LDEwNGE0LDQsMCwwLDEtNCw0SDcyYTQsNCwwLDAsMSwwLThIMTg0QTQsNCwwLDAsMSwxODgsMTA0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Lectern";
export { I as Lectern };
