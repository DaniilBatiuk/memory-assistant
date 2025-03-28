import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { prisma } from '../lib/db'

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (!user.email || !account) {
          return false
        }

        const findUser = await prisma.user.findFirst({
          where: { email: user.email },
        })

        if (findUser) return true

        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name,
            imageUrl: user.image,
            provider: account.provider,
            providerId: account.providerAccountId,
          },
        })

        return true
      } catch (error) {
        console.error('Error [SIGNIN]', error)
        return false
      }
    },
    async jwt({ token }) {
      if (!token.email) {
        return token
      }

      const findUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
        include: {
          dictionaries: { select: { id: true } },
        },
      })

      if (findUser) {
        token.id = findUser.id
        token.email = findUser.email
        token.name = findUser.name
        token.imageUrl = findUser.imageUrl ?? undefined
        token.dictionaries = findUser.dictionaries
      }

      return token
    },
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id
        session.user.imageUrl = token.imageUrl
      }

      return session
    },
  },
}
