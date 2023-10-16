// Libs
import { Controller, useForm } from 'react-hook-form'

// Icons
import { Email } from '@assets/icons'
import { LogoLarge } from '@assets/images'

// Components
import { Typography, Menu, TextField, Button } from '../index'

// Constants
import {
  QUICK_LINK,
  CATEGORY,
  ERROR_MESSAGES,
  THEMES,
  POlICY,
} from '@constants'

// Stores
import { useThemeStore } from '@stores'

// Themes
import { colors } from '@themes/color'

// Types
import { ButtonVariants, MenuVariants, TypoColors, TypoVariants } from '@types'

// Utils
import { checkEmail } from '@utils'

// Style
import './index.css'

const Footer = () => {
  const [theme] = useThemeStore((state) => [state.theme])
  const isDarkMode = theme === THEMES.DARK

  const { control, clearErrors, handleSubmit } = useForm<{ email: string }>({
    defaultValues: {
      email: '',
    },
  })

  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <div className="footer__about">
            <Typography
              variant={TypoVariants.HeadingSmall}
              className="footer__about-title"
            >
              About
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </div>
          <div>
            <Typography
              component="span"
              variant={TypoVariants.TextSmall}
              color={TypoColors.Secondary}
              className="footer__about-email"
            >
              Email
            </Typography>
            : <Typography component="span">info@jstemplate.net</Typography>
          </div>
          <div>
            <Typography
              component="span"
              color={TypoColors.Secondary}
              className="footer__about-phone"
            >
              Phone
            </Typography>
            :{' '}
            <Typography component="span" variant={TypoVariants.TextSmall}>
              880 123 456 789
            </Typography>
          </div>
        </div>
        <div className="footer__link">
          <div className="footer__quick-link">
            <Typography variant={TypoVariants.HeadingSmall}>
              Quick Link
            </Typography>
            <Menu listItems={QUICK_LINK} variant={MenuVariants.Vertical} />
          </div>
          <div className="footer__category">
            <Typography variant={TypoVariants.HeadingSmall}>
              Category
            </Typography>
            <Menu listItems={CATEGORY} variant={MenuVariants.Vertical} />
          </div>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(() => {})}
          className="footer__newsletter-form"
        >
          <div className="footer__newsletter-form-heading">
            <Typography variant={TypoVariants.HeadingMedium}>
              Weekly Newsletter
            </Typography>
            <Typography>Get blog articles and offers via email</Typography>
          </div>
          <Controller
            control={control}
            name="email"
            rules={{
              required: ERROR_MESSAGES.FIELD_REQUIRED('Email'),
              validate: (value: string) => checkEmail(value),
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                icon={<Email />}
                id="email"
                name="email"
                placeholder="Your Email"
                value={value}
                errorMessage={error?.message}
                onChange={(data) => {
                  clearErrors('email')
                  onChange(data)
                }}
              />
            )}
          />
          <Button variant={ButtonVariants.Container} type="submit">
            Subscribe
          </Button>
        </form>
      </div>
      <div className="footer__copyright">
        <LogoLarge {...(isDarkMode && { colorFill: colors.common.white })} />
        <Menu listItems={POlICY} />
      </div>
    </div>
  )
}

export default Footer
