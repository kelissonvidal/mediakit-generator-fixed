'use client'

import { MediaKitData } from '@/types'
import { useState, useRef } from 'react'

interface BasicInfoProps {
  data: MediaKitData
  setData: (data: MediaKitData) => void
}

export default function BasicInfo({ data, setData }: BasicInfoProps) {
  const [photoPreview, setPhotoPreview] = useState<string | null>(data.photo)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Criar preview
    const reader = new FileReader()
    reader.onload = (event) => {
      const img = new Image()
      img.onload = () => {
        // Redimensionar imagem
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')!
        
        const maxWidth = 800
        const maxHeight = 600
        let width = img.width
        let height = img.height

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height)
          width = width * ratio
          height = height * ratio
        }

        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)

        const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.85)
        setPhotoPreview(resizedDataUrl)
        setData({ ...data, photo: resizedDataUrl })
      }
      img.src = event.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 border-l-4 border-primary p-4 rounded-lg">
        <p className="text-sm text-primary">
          📸 Foto recomendada: 800x600px • JPG ou PNG
        </p>
      </div>

      {/* Frase de Abertura */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Frase de Abertura
        </label>
        <textarea
          value={data.quote1}
          onChange={(e) => setData({ ...data, quote1: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
        />
      </div>

      {/* Upload de Foto */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Sua Foto Principal
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className={`
            w-full py-3 px-6 rounded-xl font-semibold
            transition-all duration-300
            ${
              photoPreview
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                : 'bg-gradient-to-r from-primary to-primary-light text-white'
            }
            hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]
          `}
        >
          {photoPreview ? '✅ Foto Carregada - Trocar' : '📸 Escolher Foto (800x600px recomendado)'}
        </button>
        {photoPreview && (
          <img
            src={photoPreview}
            alt="Preview"
            className="mt-4 w-full max-h-64 object-cover rounded-xl shadow-lg"
          />
        )}
      </div>

      {/* Nome */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Nome
        </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
        />
      </div>

      {/* Título */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Título Profissional
        </label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
        />
      </div>

      {/* Sobre Você */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Sobre Você
        </label>
        <textarea
          value={data.about}
          onChange={(e) => setData({ ...data, about: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
        />
      </div>

      {/* Missão */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Missão
        </label>
        <textarea
          value={data.mission}
          onChange={(e) => setData({ ...data, mission: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
        />
      </div>

      {/* Visão */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Visão
        </label>
        <textarea
          value={data.vision}
          onChange={(e) => setData({ ...data, vision: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
        />
      </div>

      {/* Valores */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Valores
        </label>
        <textarea
          value={data.values}
          onChange={(e) => setData({ ...data, values: e.target.value })}
          rows={2}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
        />
      </div>
    </div>
  )
}
