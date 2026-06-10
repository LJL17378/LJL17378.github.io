export const baseURL = "https://ljl17378.github.io";

export const style = {
  theme: "system",
  neutral: "gray",
  brand: "cyan",
  accent: "blue",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100",
} as const;

export const dataStyle = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: { stroke: "var(--neutral-alpha-weak)" },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
} as const;
