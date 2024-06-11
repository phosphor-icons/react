/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Tag";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYuMTUsMTMzLjE4LDE0Ni44MywzMy44NkExOS44NSwxOS44NSwwLDAsMCwxMzIuNjksMjhINDBBMTIsMTIsMCwwLDAsMjgsNDB2OTIuNjlhMTkuODUsMTkuODUsMCwwLDAsNS44NiwxNC4xNGw5OS4zMiw5OS4zMmEyMCwyMCwwLDAsMCwyOC4yOCwwbDg0LjY5LTg0LjY5QTIwLDIwLDAsMCwwLDI0Ni4xNSwxMzMuMThabS05OC44Myw5My4xN0w1MiwxMzFWNTJoNzlsOTUuMzIsOTUuMzJaTTEwNCw4OEExNiwxNiwwLDEsMSw4OCw3MiwxNiwxNiwwLDAsMSwxMDQsODhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTUzLDE1MywyMzcuNjZhOCw4LDAsMCwxLTExLjMxLDBMNDIuMzQsMTM4LjM0QTgsOCwwLDAsMSw0MCwxMzIuNjlWNDBoOTIuNjlhOCw4LDAsMCwxLDUuNjUsMi4zNGw5OS4zMiw5OS4zMkE4LDgsMCwwLDEsMjM3LjY2LDE1M1oiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNDMuMzEsMTM2LDE0NCwzNi42OUExNS44NiwxNS44NiwwLDAsMCwxMzIuNjksMzJINDBhOCw4LDAsMCwwLTgsOHY5Mi42OUExNS44NiwxNS44NiwwLDAsMCwzNi42OSwxNDRMMTM2LDI0My4zMWExNiwxNiwwLDAsMCwyMi42MywwbDg0LjY4LTg0LjY4YTE2LDE2LDAsMCwwLDAtMjIuNjNabS05Niw5Nkw0OCwxMzIuNjlWNDhoODQuNjlMMjMyLDE0Ny4zMVpNOTYsODRBMTIsMTIsMCwxLDEsODQsNzIsMTIsMTIsMCwwLDEsOTYsODRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMzEsMTM2LDE0NCwzNi42OUExNS44NiwxNS44NiwwLDAsMCwxMzIuNjksMzJINDBhOCw4LDAsMCwwLTgsOHY5Mi42OUExNS44NiwxNS44NiwwLDAsMCwzNi42OSwxNDRMMTM2LDI0My4zMWExNiwxNiwwLDAsMCwyMi42MywwbDg0LjY4LTg0LjY4YTE2LDE2LDAsMCwwLDAtMjIuNjNaTTg0LDk2QTEyLDEyLDAsMSwxLDk2LDg0LDEyLDEyLDAsMCwxLDg0LDk2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEuOTEsMTM3LjQyLDE0Mi41OSwzOC4xYTEzLjk0LDEzLjk0LDAsMCwwLTkuOS00LjFINDBhNiw2LDAsMCwwLTYsNnY5Mi42OWExMy45NCwxMy45NCwwLDAsMCw0LjEsOS45bDk5LjMyLDk5LjMyYTE0LDE0LDAsMCwwLDE5LjgsMGw4NC42OS04NC42OUExNCwxNCwwLDAsMCwyNDEuOTEsMTM3LjQyWm0tOC40OSwxMS4zMS04NC42OSw4NC42OWEyLDIsMCwwLDEtMi44MywwTDQ2LjU5LDEzNC4xYTIsMiwwLDAsMS0uNTktMS40MVY0Nmg4Ni42OWEyLDIsMCwwLDEsMS40MS41OWw5OS4zMiw5OS4zMUEyLDIsMCwwLDEsMjMzLjQyLDE0OC43M1pNOTQsODRBMTAsMTAsMCwxLDEsODQsNzQsMTAsMTAsMCwwLDEsOTQsODRaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMzEsMTM2LDE0NCwzNi42OUExNS44NiwxNS44NiwwLDAsMCwxMzIuNjksMzJINDBhOCw4LDAsMCwwLTgsOHY5Mi42OUExNS44NiwxNS44NiwwLDAsMCwzNi42OSwxNDRMMTM2LDI0My4zMWExNiwxNiwwLDAsMCwyMi42MywwbDg0LjY4LTg0LjY4YTE2LDE2LDAsMCwwLDAtMjIuNjNabS05Niw5Nkw0OCwxMzIuNjlWNDhoODQuNjlMMjMyLDE0Ny4zMVpNOTYsODRBMTIsMTIsMCwxLDEsODQsNzIsMTIsMTIsMCwwLDEsOTYsODRaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksMTM4LjgzLDE0MS4xNywzOS41MUExMS45MywxMS45MywwLDAsMCwxMzIuNjksMzZINDBhNCw0LDAsMCwwLTQsNHY5Mi42OWExMS45MywxMS45MywwLDAsMCwzLjUxLDguNDhsOTkuMzIsOTkuMzJhMTIsMTIsMCwwLDAsMTcsMGw4NC42OS04NC42OWExMiwxMiwwLDAsMCwwLTE3Wm0tNS42NiwxMS4zMS04NC42OSw4NC42OWE0LDQsMCwwLDEtNS42NSwwTDQ1LjE3LDEzNS41MUE0LDQsMCwwLDEsNDQsMTMyLjY5VjQ0aDg4LjY5YTQsNCwwLDAsMSwyLjgyLDEuMTdsOTkuMzIsOTkuMzJBNCw0LDAsMCwxLDIzNC44MywxNTAuMTRaTTkyLDg0YTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDkyLDg0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Tag";
export { I as Tag };
