'use client'

import { useState, useEffect } from 'react'
import { formatPrice } from '@/lib/utils'
import type { Order } from '@/types'

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(data => setOrders(data.recentOrders || []))
      .catch(() => {})
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Commandes</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-6 py-3 font-medium text-gray-500">Email</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">Template</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">Montant</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">Statut</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-3 font-medium">{order.email}</td>
                <td className="px-6 py-3">{order.template?.name || 'Template'}</td>
                <td className="px-6 py-3">{formatPrice(order.amount)}</td>
                <td className="px-6 py-3">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {order.status === 'completed' ? 'Terminé' : 'En attente'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
