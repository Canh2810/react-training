// PostList.test.js (or PostList.test.tsx for TypeScript)

import { render } from '@testing-library/react'
import Typography from '..'
import { TypoColors, TypoVariants } from '@types'
import { useThemeStore } from '@stores'
import { THEMES } from '@constants'

describe('PostList component', () => {
  const props = {
    children: 'This is text',
  }

  beforeEach(() => {
    useThemeStore.setState({
      theme: THEMES.LIGHT,
    })
  })

  it('render with default props', () => {
    const { container } = render(<Typography {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('render with variant is textExtraSmall', () => {
    const { container } = render(
      <Typography {...props} variant={TypoVariants.TextExtraSmall} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with variant is textMedium', () => {
    const { container } = render(
      <Typography {...props} variant={TypoVariants.TextMedium} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with variant is textLarge', () => {
    const { container } = render(
      <Typography {...props} variant={TypoVariants.TextLarge} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with variant is textExtraLarge', () => {
    const { container } = render(
      <Typography {...props} variant={TypoVariants.TexExtraLarge} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with variant is headingSmall', () => {
    const { container } = render(
      <Typography {...props} variant={TypoVariants.HeadingSmall} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with variant is headingMedium', () => {
    const { container } = render(
      <Typography {...props} variant={TypoVariants.HeadingMedium} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with variant is headingLarge', () => {
    const { container } = render(
      <Typography {...props} variant={TypoVariants.HeadingLarge} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with variant is headingExtraLarge', () => {
    const { container } = render(
      <Typography {...props} variant={TypoVariants.HeadingExtraLarge} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with color is textSecondary', () => {
    const { container } = render(
      <Typography {...props} color={TypoColors.Secondary} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with color is textTertiary', () => {
    const { container } = render(
      <Typography {...props} color={TypoColors.Tertiary} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with component is h1', () => {
    const { container } = render(<Typography {...props} component="h1" />)
    expect(container).toMatchSnapshot()
  })
})
