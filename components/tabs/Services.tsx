'use client'

import { MediaKitData } from '@/types'

interface ServicesProps {
  data: MediaKitData
  setData: (data: MediaKitData) => void
}

export default function Services({ data, setData }: ServicesProps) {
  const addService = () => {
    setData({ ...data, services: [...data.services, ''] })
  }

  const removeService = (index: number) => {
    setData({ ...data, services: data.services.filter((_, i) => i !== index) })
  }

  const updateService = (index: number, value: string) => {
    const newServices = [...data.services]
    newServices[index] = value
    setData({ ...data, services: newServices })
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-primary">Seus Serviços Adicionais</h3>
      
      {data.services.map((service, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="text"
            value={service}
            onChange={(e) => updateService(index, e.target.value)}
            placeholder="Nome do serviço"
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
          />
          <button
            onClick={() => removeService(index)}
            className="px-4 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors"
          >
            ×
          </button>
        </div>
      ))}
      
      <button
        onClick={addService}
        className="w-full py-3 px-6 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
      >
        + Adicionar Serviço
      </button>
    </div>
  )
}
