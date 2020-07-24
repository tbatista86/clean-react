import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { AutheticationParams, Authentication } from '@/domain/usescases'
import { InvalidCredentialError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

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
