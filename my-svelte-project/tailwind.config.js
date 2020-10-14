module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    extend: {}
  },
  variants: {
            backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
