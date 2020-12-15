import { RequiredFieldError } from '@/validation/errors'
import { RequiredFieldValidation } from './requireed-field-validation'
import faker from 'faker'

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validade('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return false if field is not empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validade(faker.random.word())
    expect(error).toBeFalsy()
  })
})
