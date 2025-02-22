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
  words: IWordDto[]
  createdAt: Date
}

type IDictionary = Omit<IDictionaryDto, 'createdAt'>

type IWordDto = {
  id: string
  word: string
  translations: string
  dictionaryId: string
  language: Languages
  createdAt: Date
}

type IWordCreate = Omit<IWordDto, 'createdAt' | 'id'>
