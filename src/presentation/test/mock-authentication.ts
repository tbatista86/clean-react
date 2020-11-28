
import { Authentication, AutheticationParams } from '@/domain/usescases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: AutheticationParams

  async auth (params: AutheticationParams): Promise<AccountModel> {
    this.params = params
    return Promise.resolve(this.account)
  }
}
