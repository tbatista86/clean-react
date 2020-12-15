export interface FieldValidation {
  field: string
  validate (values: string): Error
}
