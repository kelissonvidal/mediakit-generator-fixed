'use client'

import { useState } from 'react'
import { MediaKitData } from '@/types'
import BasicInfo from './tabs/BasicInfo'
import Stats from './tabs/Stats'
import Portfolio from './tabs/Portfolio'
import Packages from './tabs/Packages'
import Services from './tabs/Services'
import Contact from './tabs/Contact'

interface EditorProps {
  data: MediaKitData
  setData: (data: MediaKitData) => void
}

const tabs = [
  { id: 'basic', label: '📝 Básico', component: BasicInfo },
  { id: 'stats', label: '📊 Stats', component: Stats },
  { id: 'portfolio', label: '💼 Portfolio', component: Portfolio },
  { id: 'packages', label: '💰 Pacotes', component: Packages },
  { id: 'services', label: '🛠️ Serviços', component: Services },
  { id: 'contact', label: '📞 Contato', component: Contact },
]

export default function Editor({ data, setData }: EditorProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)

  const ActiveComponent = tabs[activeTab].component

  const handleGeneratePDF = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Falha ao gerar PDF')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `Media-Kit-${data.name.replace(/\s+/g, '-')}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao gerar PDF. Tente novamente.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white shadow-xl">
        <div className="px-4 py-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            📱 Media Kit Generator
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Crie seu PDF profissional
          </p>
        </div>

        {/* Tabs - Scroll horizontal no mobile */}
        <div className="flex overflow-x-auto scrollbar-hide border-t border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`
                flex-shrink-0 px-4 py-3 text-sm font-semibold whitespace-nowrap
                transition-colors duration-200
                ${
                  activeTab === index
                    ? 'text-primary border-b-3 border-primary bg-purple-50'
                    : 'text-gray-600 border-b-3 border-transparent hover:text-primary'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <ActiveComponent data={data} setData={setData} />
        </div>

        {/* Generate Button - Fixed no mobile */}
        {activeTab === tabs.length - 1 && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-2xl md:static md:mt-6 md:shadow-none">
            <button
              onClick={handleGeneratePDF}
              disabled={isGenerating}
              className="
                w-full py-4 px-6 rounded-xl font-bold text-lg
                bg-gradient-to-r from-green-500 to-green-600
                text-white shadow-lg
                hover:from-green-600 hover:to-green-700
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-300
                transform hover:scale-[1.02] active:scale-[0.98]
              "
            >
              {isGenerating ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Gerando PDF...
                </span>
              ) : (
                '🎯 GERAR MEU PDF PROFISSIONAL'
              )}
            </button>
          </div>
        )}
      </div>

      {/* Loading Overlay */}
      {isGenerating && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="text-center text-white">
            <div className="mb-4">
              <svg className="animate-spin h-16 w-16 mx-auto" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Gerando seu Media Kit...</h2>
            <p className="text-gray-300">Aguarde alguns segundos</p>
          </div>
        </div>
      )}
    </div>
  )
}
