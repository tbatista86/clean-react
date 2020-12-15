import { RequiredFieldError } from '@/validation/errors'
import { RequiredFieldValidation } from './requireed-field-validation'

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validade('')
    expect(error).toEqual(new RequiredFieldError())
  })
})
