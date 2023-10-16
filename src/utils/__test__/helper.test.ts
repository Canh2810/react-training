import { checkEmail } from '..' // Update with the correct import path
import { ERROR_MESSAGES } from '@constants'

describe('checkEmail', () => {
  it('should return an error message if the email is invalid', () => {
    const invalidEmail = 'invalid-email'
    const result = checkEmail(invalidEmail)
    expect(result).toBe(ERROR_MESSAGES.FIELD_INVALID('email'))
  })

  it('should not return an error message if the email is valid', () => {
    const validEmail = 'valid@example.com'
    const result = checkEmail(validEmail)
    expect(result).toBeUndefined()
  })
})
