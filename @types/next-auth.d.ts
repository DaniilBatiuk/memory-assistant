import { DefaultUser } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      imageUrl?: string
    }
  }

  interface User extends DefaultUser {
    id: string
    name: string
    email: string
    imageUrl: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string
    name: string
    email: string
    imageUrl?: string
    dictionaries: { id: string }[]
  }
}
