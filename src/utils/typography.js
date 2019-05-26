import Typography from 'typography'

const overrideStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  'html': {
    textAlign: 'justify'
  }
})

const typography = new Typography({
  baseFontSize: '15px',
  baseLineHeight: 1.5,
  scaleRatio: 1.2,
  blockMarginBottom: 0.6,
  headerFontFamily: ['Open Sans', 'Arial', 'sans-serif'],
  headerGray: 0,
  headerGrayHue: 0,
  bodyFontFamily: ['Lato', 'Arial', 'serif'],
  bodyGray: 0,
  overrideStyles
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
