import { AutheticationParams } from '@/domain/usescases/authentication'
import faker from 'faker'
import { AccountModel } from '../models/account-models'

export const mockAthentication = (): AutheticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
