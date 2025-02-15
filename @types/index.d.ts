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
