/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Bookmarks";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjBIOTZBMjAsMjAsMCwwLDAsNzYsNDBWNjBINjRBMjAsMjAsMCwwLDAsNDQsODBWMjI0YTEyLDEyLDAsMCwwLDE5LjMyLDkuNTFMMTA4LDE5OS4xNGw0NC42OSwzNC4zN0ExMiwxMiwwLDAsMCwxNzIsMjI0VjE3Ny42bDIwLjY4LDE1LjkxQTEyLDEyLDAsMCwwLDIxMiwxODRWNDBBMjAsMjAsMCwwLDAsMTkyLDIwWk0xNDgsMTk5LjYzbC0zMi42OS0yNS4xNGExMiwxMiwwLDAsMC0xNC42MywwTDY4LDE5OS42M1Y4NGg4MFptNDAtNDAtMTYtMTIuM1Y4MGEyMCwyMCwwLDAsMC0yMC0yMEgxMDBWNDRoODhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDBWMTkybC0zMi0yMi44NVY3MmE4LDgsMCwwLDAtOC04SDg4VjQwYTgsOCwwLDAsMSw4LThoOTZBOCw4LDAsMCwxLDIwMCw0MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xOTIsMjRIOTZBMTYsMTYsMCwwLDAsODAsNDBWNTZINjRBMTYsMTYsMCwwLDAsNDgsNzJWMjI0YTgsOCwwLDAsMCwxMi42NSw2LjUxTDExMiwxOTMuODNsNTEuMzYsMzYuNjhBOCw4LDAsMCwwLDE3NiwyMjRWMTg0LjY5bDE5LjM1LDEzLjgyQTgsOCwwLDAsMCwyMDgsMTkyVjQwQTE2LDE2LDAsMCwwLDE5MiwyNFpNMTYwLDIwOC40NmwtNDMuMzYtMzFhOCw4LDAsMCwwLTkuMywwTDY0LDIwOC40NVY3Mmg5NlptMzItMzJMMTc2LDE2NVY3MmExNiwxNiwwLDAsMC0xNi0xNkg5NlY0MGg5NloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjRIOTZBMTYsMTYsMCwwLDAsODAsNDBWNTZINjRBMTYsMTYsMCwwLDAsNDgsNzJWMjI0YTgsOCwwLDAsMCwxMi42NSw2LjUxTDExMiwxOTMuODNsNTEuMzYsMzYuNjhBOCw4LDAsMCwwLDE3NiwyMjRWMTg0LjY5bDE5LjM1LDEzLjgyQTgsOCwwLDAsMCwyMDgsMTkyVjQwQTE2LDE2LDAsMCwwLDE5MiwyNFptMCwxNTIuNDZMMTc2LDE2NVY3MmExNiwxNiwwLDAsMC0xNi0xNkg5NlY0MGg5NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjZIOTZBMTQsMTQsMCwwLDAsODIsNDBWNThINjRBMTQsMTQsMCwwLDAsNTAsNzJWMjI0YTYsNiwwLDAsMCw5LjQ5LDQuODhMMTEyLDE5MS4zN2w1Mi41MiwzNy41MUE2LDYsMCwwLDAsMTc0LDIyNFYxODAuOGwyMi41MSwxNi4wOEE2LDYsMCwwLDAsMjA2LDE5MlY0MEExNCwxNCwwLDAsMCwxOTIsMjZaTTE2MiwyMTIuMzRsLTQ2LjUyLTMzLjIyYTYsNiwwLDAsMC03LDBMNjIsMjEyLjM0VjcyYTIsMiwwLDAsMSwyLTJoOTZhMiwyLDAsMCwxLDIsMlptMzItMzItMjAtMTQuMjhWNzJhMTQsMTQsMCwwLDAtMTQtMTRIOTRWNDBhMiwyLDAsMCwxLDItMmg5NmEyLDIsMCwwLDEsMiwyWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjRIOTZBMTYsMTYsMCwwLDAsODAsNDBWNTZINjRBMTYsMTYsMCwwLDAsNDgsNzJWMjI0YTgsOCwwLDAsMCwxMi42NSw2LjUxTDExMiwxOTMuODNsNTEuMzYsMzYuNjhBOCw4LDAsMCwwLDE3NiwyMjRWMTg0LjY5bDE5LjM1LDEzLjgyQTgsOCwwLDAsMCwyMDgsMTkyVjQwQTE2LDE2LDAsMCwwLDE5MiwyNFpNMTYwLDIwOC40NmwtNDMuMzYtMzFhOCw4LDAsMCwwLTkuMywwTDY0LDIwOC40NVY3Mmg5NlptMzItMzJMMTc2LDE2NVY3MmExNiwxNiwwLDAsMC0xNi0xNkg5NlY0MGg5NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjhIOTZBMTIsMTIsMCwwLDAsODQsNDBWNjBINjRBMTIsMTIsMCwwLDAsNTIsNzJWMjI0YTQsNCwwLDAsMCw2LjMzLDMuMjVMMTEyLDE4OC45Mmw1My42OSwzOC4zM0EzLjk0LDMuOTQsMCwwLDAsMTY4LDIyOGE0LjA4LDQuMDgsMCwwLDAsMS44My0uNDRBNCw0LDAsMCwwLDE3MiwyMjRWMTc2LjkybDI1LjY4LDE4LjMzQTMuOTQsMy45NCwwLDAsMCwyMDAsMTk2YTQuMDgsNC4wOCwwLDAsMCwxLjgzLS40NEE0LDQsMCwwLDAsMjA0LDE5MlY0MEExMiwxMiwwLDAsMCwxOTIsMjhaTTE2NCwyMTYuMjNsLTQ5LjY4LTM1LjQ4YTQsNCwwLDAsMC00LjY1LDBMNjAsMjE2LjIzVjcyYTQsNCwwLDAsMSw0LTRoOTZhNCw0LDAsMCwxLDQsNFptMzItMzItMjQtMTcuMTRWNzJhMTIsMTIsMCwwLDAtMTItMTJIOTJWNDBhNCw0LDAsMCwxLDQtNGg5NmE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Bookmarks";
export { I as Bookmarks };
