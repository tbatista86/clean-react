export class InvalidCredentialError extends Error {
  constructor () {
    super('Credencias inválidas')
    this.name = 'InvalidCredentialError'
  }
}
