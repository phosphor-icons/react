export function transformJSX(contents: string) {
  return contents
    .replace(/^.*<\?xml.*?\>/g, "")
    .replace(/<svg.*?>/g, "")
    .replace(/<\/svg>/g, "")
    .replace(
      /<rect width="25[\d,\.]+" height="25[\d,\.]+" fill="none".*?\/>/g,
      ""
    )
    .replace(/<title.*?/, "")
    .replace(/"#0+"/g, "{color}")
    .replace(/currentColor/g, "{color}")
    .replace(/fill\-rule/g, "fillRule")
    .replace(/(\s)clip-rule(?=\s*=)/g, "$1clipRule")
    .replace(/(\s)clip-path(?=\s*=)/g, "$1clipPath")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-miterlimit/g, "strokeMiterlimit");
}
