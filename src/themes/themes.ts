import { fontFamilies, fontSizes, fontWeights, lineHeights } from './fonts'
import { colors } from './color'
import { THEMES } from '@constants'

export const variants = {
  textExtraSmall: {
    fontFamily: fontFamilies.quaternary,
    fontSize: fontSizes.text.extraSmall,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.extraSmall,
  },
  textSmall: {
    fontFamily: fontFamilies.tertiary,
    fontSize: fontSizes.text.small,
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights.small,
  },
  textMedium: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.text.medium,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.extraMedium,
  },
  textLarge: {
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes.text.large,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.large,
  },
  textExtraLarge: {
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes.text.extraLarge,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.large,
  },
  headingSmall: {
    fontFamily: fontFamilies.tertiary,
    fontSize: fontSizes.heading.small,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.medium,
  },
  headingMedium: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.heading.medium,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.medium,
  },
  headingLarge: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.heading.large,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.medium,
  },
  headingExtraLarge: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.heading.extraLarge,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.extraLarge,
  },

  primary: {
    backgroundColor: colors.primary[500],
    color: colors.common.white,
  },
  secondary: {
    backgroundColor: 'rgba(75, 107, 251, 0.05)',
    color: colors.primary[500],
  },
  container: {
    backgroundColor: colors.primary[500],
    color: colors.common.white,
  },
  outlined: (mode: string) => ({
    border: 'solid 1px',
    color: colors.light[700],
    borderColor: 'rgba(105, 106, 117, 0.30)',
    backgroundColor:
      mode === THEMES.DARK ? colors.dark[300] : colors.common.white,
  }),
  filled: (mode: string) => ({
    backgroundColor:
      mode === THEMES.DARK ? colors.dark[200] : colors.light[100],
    color: colors.light[500],
  }),
  horizontal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
  },
  vertical: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flexDirection: 'column',
  },
}

export const palette = {
  primary: {
    color: colors.primary[500],
  },
  secondary: (mode: string) => ({
    color: mode === THEMES.DARK ? colors.dark[300] : colors.common.white,
  }),
  textPrimary: (mode: string) => ({
    color: mode === THEMES.DARK ? colors.light[400] : colors.dark[100],
  }),
  textSecondary: (mode: string) => ({
    color: mode === THEMES.DARK ? colors.common.white : colors.dark[300],
  }),
  textTertiary: (mode: string) => ({
    color: mode === THEMES.DARK ? colors.light[600] : colors.light[700],
  }),

  danger: (mode: string) => ({
    color:
      mode === THEMES.DARK ? colors.danger.secondary : colors.danger.primary,
  }),
}
