export const WEB_NAME = 'Memory assistant'

export const COMMON_METADATA = {
  title: WEB_NAME,
  description:
    'Memory Assistant is your ultimate tool for mastering foreign words effortlessly. With our innovative features, you can translate, create personalized dictionaries, and test your knowledge to enhance your learning experience.',
  authors: [{ name: 'Daniil' }, { name: 'Daniil', url: 'https://github.com/DaniilBatiuk' }],
  publisher: 'Daniil Batiuk',
  creator: 'Daniil Batiuk',
  image: {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png`,
    width: 1200,
    height: 630,
    alt: 'Logo',
  },
  url: process.env.NEXT_PUBLIC_BASE_URL,
}
