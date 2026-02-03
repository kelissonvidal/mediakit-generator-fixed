'use client'

import { MediaKitData } from '@/types'

interface ContactProps {
  data: MediaKitData
  setData: (data: MediaKitData) => void
}

export default function Contact({ data, setData }: ContactProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Frase Final
        </label>
        <textarea
          value={data.finalQuote}
          onChange={(e) => setData({ ...data, finalQuote: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={data.contact.email}
          onChange={(e) => setData({ ...data, contact: { ...data.contact, email: e.target.value } })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
        <input
          type="text"
          value={data.contact.phone}
          onChange={(e) => setData({ ...data, contact: { ...data.contact, phone: e.target.value } })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Instagram</label>
        <input
          type="text"
          value={data.contact.instagram}
          onChange={(e) => setData({ ...data, contact: { ...data.contact, instagram: e.target.value } })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
          placeholder="@seuinstagram"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Link WhatsApp</label>
        <input
          type="url"
          value={data.contact.whatsapp}
          onChange={(e) => setData({ ...data, contact: { ...data.contact, whatsapp: e.target.value } })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
          placeholder="https://wa.me/..."
        />
      </div>
    </div>
  )
}
