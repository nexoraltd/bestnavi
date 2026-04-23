import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: '必須項目を入力してください' }, { status: 400 })
    }

    const gasUrl = process.env.GAS_CONTACT_URL
    if (!gasUrl) {
      return NextResponse.json({ error: 'お問い合わせ送信が設定されていません' }, { status: 500 })
    }

    const res = await fetch(gasUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ app: 'ベストナビ', name, email, subject, message }),
    })

    if (!res.ok) {
      return NextResponse.json({ error: '送信に失敗しました。しばらく経ってからお試しください。' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: '送信に失敗しました。しばらく経ってからお試しください。' }, { status: 500 })
  }
}
