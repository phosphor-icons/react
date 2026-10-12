import { describe, expect, it } from "vitest";
import { transformJSX } from "../scripts/transform";

describe("SVG to JSX transformation", () => {
  it("converts clipping attributes while preserving their values and references", () => {
    const svg = `<svg viewBox="0 0 256 256"><defs><clipPath id="clip-path-mask"><path clip-rule="evenodd" d="M0 0h256v256H0z"/></clipPath></defs><g clip-path="url(#clip-path-mask)"><path clip-rule="nonzero" d="M0 0h128v128H0z"/></g></svg>`;

    expect(transformJSX(svg)).toBe(
      `<defs><clipPath id="clip-path-mask"><path clipRule="evenodd" d="M0 0h256v256H0z"/></clipPath></defs><g clipPath="url(#clip-path-mask)"><path clipRule="nonzero" d="M0 0h128v128H0z"/></g>`
    );
  });

  it("converts clipping attributes across whitespace without changing data attributes", () => {
    const svg = `<svg><path\nclip-rule = "evenodd"\tclip-path="url(#mask)" data-clip-rule="evenodd" data-clip-path="mask"/></svg>`;

    expect(transformJSX(svg)).toBe(
      `<path\nclipRule = "evenodd"\tclipPath="url(#mask)" data-clip-rule="evenodd" data-clip-path="mask"/>`
    );
  });

  it("preserves the existing SVG wrapper, color, fill, and stroke conversions", () => {
    const svg = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="currentColor" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-miterlimit="10" d="M0 0h128"/></svg>`;

    expect(transformJSX(svg)).toBe(
      `<path fill="{color}" fillRule="evenodd" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeMiterlimit="10" d="M0 0h128"/>`
    );
  });
});
