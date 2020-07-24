import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import {
  AutheticationParams,
  Authentication
} from '@/domain/usescases/authentication'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialError } from '@/domain/errors/invalid-credentials-error'
import { UnexpectedError } from '@/domain/errors/unespected-error'
import { AccountModel } from '@/domain/models/account-models'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
    AutheticationParams,
    AccountModel
    >
  ) {}

  async auth (params: AutheticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialError()
      default:
        throw new UnexpectedError()
    }
  }
}
