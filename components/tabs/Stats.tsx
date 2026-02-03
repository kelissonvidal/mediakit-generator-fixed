'use client'

import { MediaKitData } from '@/types'

interface StatsProps {
  data: MediaKitData
  setData: (data: MediaKitData) => void
}

export default function Stats({ data, setData }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Seguidores Instagram
        </label>
        <input
          type="text"
          value={data.stats.instagram}
          onChange={(e) => setData({ ...data, stats: { ...data.stats, instagram: e.target.value } })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
          placeholder="160k+"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Seguidores TikTok
        </label>
        <input
          type="text"
          value={data.stats.tiktok}
          onChange={(e) => setData({ ...data, stats: { ...data.stats, tiktok: e.target.value } })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
          placeholder="50k+"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Alcance Mensal
        </label>
        <input
          type="text"
          value={data.stats.reach}
          onChange={(e) => setData({ ...data, stats: { ...data.stats, reach: e.target.value } })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
          placeholder="500k+"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Publicações Criadas
        </label>
        <input
          type="text"
          value={data.stats.posts}
          onChange={(e) => setData({ ...data, stats: { ...data.stats, posts: e.target.value } })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-purple-100 outline-none transition-all"
          placeholder="24k+"
        />
      </div>
    </div>
  )
}
