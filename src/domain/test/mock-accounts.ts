import { AutheticationParams } from '@/domain/usescases'
import { AccountModel } from '../models'
import faker from 'faker'

export const mockAthentication = (): AutheticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
