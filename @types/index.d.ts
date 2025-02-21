type ITranslation = {
  ok: boolean
  translations: string[]
}

type Example = {
  id: number
  source: string
  target: string
}

type IContext = {
  ok: boolean
  examples: Example[]
}

type IUserDto = {
  id: string
  email: string
  name: string
  provider: string
  providerId: string
  imageUrl?: string
  createdAt: Date
}

type IUser = Omit<IUserDto, 'createdAt' | 'providerId' | 'provider'>

type IDictionaryDto = {
  id: string
  title: string
  description: string
  userId: string
  createdAt: Date
}

type IDictionary = Omit<IDictionaryDto, 'createdAt'>
