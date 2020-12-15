export interface FieldValidation {
  field: string
  validade (values: string): Error
}
