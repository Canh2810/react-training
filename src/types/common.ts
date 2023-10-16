export enum TypoVariants {
  TextExtraSmall = 'textExtraSmall',
  TextSmall = 'textSmall',
  TextMedium = 'textMedium',
  TextLarge = 'textLarge',
  TexExtraLarge = 'textExtraLarge',
  HeadingSmall = 'headingSmall',
  HeadingMedium = 'headingMedium',
  HeadingLarge = 'headingLarge',
  HeadingExtraLarge = 'headingExtraLarge',
}

export enum TypoColors {
  Primary = 'textPrimary',
  Secondary = 'textSecondary',
  Tertiary = 'textTertiary',
  Danger = 'danger',
}

export enum ButtonVariants {
  Container = 'container',
  Outlined = 'outlined',
}

export enum TextFieldVariants {
  Outlined = 'outlined',
  Filled = 'filled',
}

export enum TextFieldTypes {
  Text = 'text',
  Password = 'password',
}

export interface IMenuItem {
  title: string
  href: string
}

export enum MenuVariants {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export enum commonVariants {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface ILoginForm {
  email: string
  password: string
}

export type LoginFormField = Exclude<keyof ILoginForm, ''>

export type ApiErrorResponse = {
  code: string
  message: string
}
