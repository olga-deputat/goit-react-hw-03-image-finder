export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    yellow: '#fcffbc',
    orange: '#ffd66f',
    dark: '#212121',
    light: '#f2f2f2',
    accent: '#3f51b5',

    gray: '#9e9e9e',
    grey: '#ebedf0',
    secondarydark: '#a4a6a8',
    secondarylighter: '#f1f2f5',
    secondarylightest: '#f5f6f8',
    infolight: '#6ecfef',
  },
  spacing: value => `${value * 4}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #eef9fd',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
});
