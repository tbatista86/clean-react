import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLegth: number) {}
  validate (value: string): Error {
    return value.length >= this.minLegth ? null : new InvalidFieldError()
  }
}
