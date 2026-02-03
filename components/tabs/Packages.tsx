'use client'

import { MediaKitData } from '@/types'

interface PackagesProps {
  data: MediaKitData
  setData: (data: MediaKitData) => void
}

export default function Packages({ data, setData }: PackagesProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Frase dos Pacotes
        </label>
        <textarea
          value={data.packagesQuote}
          onChange={(e) => setData({ ...data, packagesQuote: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
        />
      </div>

      {data.packages.map((pkg, index) => (
        <div key={index} className="p-5 bg-gray-50 rounded-xl border-2 border-gray-200">
          <h3 className="text-lg font-bold text-primary mb-4">
            {index === 0 ? 'Pacote 1' : 'Pacote 2 (Destaque)'}
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nome</label>
              <input
                type="text"
                value={pkg.name}
                onChange={(e) => {
                  const newPackages = [...data.packages]
                  newPackages[index] = { ...pkg, name: e.target.value }
                  setData({ ...data, packages: newPackages })
                }}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Preço</label>
              <input
                type="text"
                value={pkg.price}
                onChange={(e) => {
                  const newPackages = [...data.packages]
                  newPackages[index] = { ...pkg, price: e.target.value }
                  setData({ ...data, packages: newPackages })
                }}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Descrição</label>
              <textarea
                value={pkg.description}
                onChange={(e) => {
                  const newPackages = [...data.packages]
                  newPackages[index] = { ...pkg, description: e.target.value }
                  setData({ ...data, packages: newPackages })
                }}
                rows={4}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none resize-none"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
