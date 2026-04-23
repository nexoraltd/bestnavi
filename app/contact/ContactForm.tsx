'use client'

import { useState } from 'react'

const SUBJECTS = [
  '記事内容に関するご質問',
  '広告掲載・タイアップのご相談',
  '掲載情報の修正依頼',
  'その他のお問い合わせ',
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: SUBJECTS[0], message: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error ?? '送信に失敗しました')
        return
      }
      setDone(true)
    } catch {
      setError('送信に失敗しました。しばらく経ってからお試しください。')
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '40px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#166534', marginBottom: 8 }}>送信完了しました</p>
        <p style={{ fontSize: 13, color: '#15803d', lineHeight: 1.7 }}>
          お問い合わせありがとうございます。<br />通常2営業日以内にご返信いたします。
        </p>
      </div>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: '1px solid var(--border)',
    borderRadius: 6,
    padding: '10px 14px',
    fontSize: 14,
    color: 'var(--text-primary)',
    outline: 'none',
    background: '#fff',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s',
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>
            お名前 <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="山田 太郎"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>
            メールアドレス <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="example@mail.com"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>お問い合わせ種別</label>
        <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} style={{ ...inputStyle, cursor: 'pointer' }}>
          {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>
          お問い合わせ内容 <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="ご質問・ご要望の詳細をご記入ください"
          style={{ ...inputStyle, resize: 'none' }}
        />
      </div>

      {error && <p style={{ fontSize: 12, color: '#ef4444', textAlign: 'center' }}>{error}</p>}

      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: 6,
          background: 'var(--accent)',
          color: '#fff',
          fontWeight: 700,
          fontSize: 14,
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.5 : 1,
          transition: 'opacity 0.15s',
        }}
      >
        {loading ? '送信中...' : '送信する'}
      </button>

      <p style={{ fontSize: 12, color: 'var(--text-secondary)', textAlign: 'center' }}>通常2営業日以内にご返信いたします</p>
    </form>
  )
}
