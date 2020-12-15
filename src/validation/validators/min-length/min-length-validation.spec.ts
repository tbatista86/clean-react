import { MinLengthValidation } from './min-length-validation'
import { InvalidFieldError } from '@/validation/errors/invalid-field-error'

describe('MinLengthValidation', () => {
  test('Should return error if values is invalid', () => {
    const sut = new MinLengthValidation('filed', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })
})
