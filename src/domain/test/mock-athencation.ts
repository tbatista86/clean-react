import { AutheticationParams } from '@/domain/usescases/authentication'
import faker from 'faker'

export const mockAthentication = (): AutheticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
