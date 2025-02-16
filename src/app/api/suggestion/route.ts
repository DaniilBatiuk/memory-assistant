import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const response = await fetch(process.env.NEXT_PUBLIC_SUGGESTION_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(res => res.json())

    return NextResponse.json(
      response.suggestions
        .filter((item: any) => item.lang === body.source_lang)
        .map((item: any) => item.suggestion)
        .slice(0, 6),
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка при получении данных' }, { status: 500 })
  }
}
