export class InvalidCredentialError extends Error {
  constructor () {
    super('Credencias incãlidas')
    this.name = 'InvalidCredentialError'
  }
}
