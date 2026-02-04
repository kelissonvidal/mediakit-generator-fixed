'use client'

import { MediaKitData, Company } from '@/types'
import { useRef } from 'react'

interface PortfolioProps {
  data: MediaKitData
  setData: (data: MediaKitData) => void
}

export default function Portfolio({ data, setData }: PortfolioProps) {
  const fileInputRefs = useRef<{[key: number]: HTMLInputElement | null}>({})

  const addCompany = () => {
    if (data.companies.length >= 6) {
      alert('Máximo de 6 empresas permitido para manter o layout')
      return
    }
    setData({
      ...data,
      companies: [...data.companies, { name: '', link: '', logo: null }],
    })
  }

  const removeCompany = (index: number) => {
    setData({
      ...data,
      companies: data.companies.filter((_, i) => i !== index),
    })
  }

  const updateCompany = (index: number, field: keyof Company, value: string) => {
    const newCompanies = [...data.companies]
    newCompanies[index] = { ...newCompanies[index], [field]: value }
    setData({ ...data, companies: newCompanies })
  }

  const handleLogoUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')!
        
        // Redimensionar para círculo 200x200
        const size = 200
        canvas.width = size
        canvas.height = size

        // Desenhar círculo
        ctx.beginPath()
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
        ctx.closePath()
        ctx.clip()

        // Calcular crop centralizado
        const scale = Math.max(size / img.width, size / img.height)
        const x = (size / 2) - (img.width / 2) * scale
        const y = (size / 2) - (img.height / 2) * scale
        
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale)

        const logoDataUrl = canvas.toDataURL('image/jpeg', 0.85)
        
        const newCompanies = [...data.companies]
        newCompanies[index] = { ...newCompanies[index], logo: logoDataUrl }
        setData({ ...data, companies: newCompanies })
      }
      img.src = event.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Frase do Portfolio
        </label>
        <textarea
          value={data.portfolioQuote}
          onChange={(e) => setData({ ...data, portfolioQuote: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          Empresas do Portfolio
        </label>
        {data.companies.map((company, index) => (
          <div key={index} className="mb-4 p-5 bg-gray-50 rounded-xl border-2 border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-gray-700">
                Empresa {index + 1}
              </span>
              <button
                onClick={() => removeCompany(index)}
                className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors font-semibold"
              >
                Remover
              </button>
            </div>

            {/* Logo Upload */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-600 mb-2">
                Logo da Empresa (formato círculo)
              </label>
              <input
                ref={(el) => { fileInputRefs.current[index] = el }}
                type="file"
                accept="image/*"
                onChange={(e) => handleLogoUpload(index, e)}
                className="hidden"
              />
              <button
                onClick={() => fileInputRefs.current[index]?.click()}
                className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
                  company.logo
                    ? 'bg-green-100 text-green-700 border-2 border-green-500'
                    : 'bg-purple-100 text-primary border-2 border-primary'
                }`}
              >
                {company.logo ? '✅ Logo Carregada - Trocar' : '📸 Upload Logo (Círculo)'}
              </button>
              {company.logo && (
                <img
                  src={company.logo}
                  alt="Logo preview"
                  className="mt-3 w-24 h-24 rounded-full object-cover border-4 border-primary shadow-lg mx-auto"
                />
              )}
            </div>

            <input
              type="text"
              value={company.name}
              onChange={(e) => updateCompany(index, 'name', e.target.value)}
              placeholder="Nome da empresa"
              className="w-full px-4 py-3 mb-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-all"
            />
            <input
              type="url"
              value={company.link}
              onChange={(e) => updateCompany(index, 'link', e.target.value)}
              placeholder="Link do Instagram Reel"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-all"
            />
          </div>
        ))}
        <button
          onClick={addCompany}
          className="w-full py-3 px-6 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
        >
          + Adicionar Empresa
        </button>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Link Stories Instagram
        </label>
        <input
          type="url"
          value={data.storiesLink}
          onChange={(e) => setData({ ...data, storiesLink: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
          placeholder="https://instagram.com/..."
        />
      </div>
    </div>
  )
}
