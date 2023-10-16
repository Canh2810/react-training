// Types
import { TypoColors, TypoVariants } from '@types'

// Components
import { Typography } from '../'

// Style
import './index.css'

const Advertisement = () => (
  <div className="advertisement">
    <Typography variant={TypoVariants.TextExtraSmall}>Advertisement</Typography>
    <Typography
      variant={TypoVariants.HeadingMedium}
      color={TypoColors.Tertiary}
    >
      You can place ads
    </Typography>
    <Typography variant={TypoVariants.TextMedium}>750x100</Typography>
  </div>
)

export default Advertisement
