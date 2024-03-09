const size = {
  xs: '320px', // for small screen mobile
  sm: '480px', // for mobile screen
  md: '768px', // for tablets
  lg: '1280px', // for laptops
}

export const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
}