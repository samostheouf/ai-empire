'use client'

import { useState, useEffect } from 'react'
import { formatPrice } from '@/lib/utils'
import type { Template } from '@/types'

export default function AdminTemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([])

  useEffect(() => {
    fetch('/api/templates')
      .then(res => res.json())
      .then(data => setTemplates(Array.isArray(data) ? data : []))
      .catch(() => {})
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Templates</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-6 py-3 font-medium text-gray-500">Nom</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">Catégorie</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">Prix</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">Téléchargements</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((template) => (
              <tr key={template.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-3 font-medium">{template.name}</td>
                <td className="px-6 py-3">{template.category}</td>
                <td className="px-6 py-3">{formatPrice(template.price)}</td>
                <td className="px-6 py-3">{template.downloads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
