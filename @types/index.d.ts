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

type IDictionaryDto = {
  id: string
  createdAt: Date
  title: string
  description: string
  language: Languages
  userId: string
}
