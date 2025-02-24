type ITranslationText = {
  ok: boolean
  translations: string[]
}

type ITranslationDto = {
  code: number
  def: Definition[]
}

type Definition = {
  tr: Translation[]
}
type Translation = {
  pos: string
  text: string
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
  language: string
  createdAt: Date
}

type IWordCreate = Omit<IWordDto, 'createdAt' | 'id'>

type IShakenWord = {
  id: string
  word: string
  variants: IVariant[]
}

type IVariant = {
  variant: string
  isRight: boolean
}
