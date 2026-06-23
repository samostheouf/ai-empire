'use client'

import { useState, useEffect } from 'react'
import UsersPageClient from '@/components/UsersPageClient'

interface AdminUser {
  id: string
  email: string
  plan: string
  credits: number
  apiKey: string
  createdAt?: { toString(): string }
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([])

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(data => setUsers(data.users || []))
      .catch(() => {})
  }, [])

  return <UsersPageClient users={users.map((u) => ({ ...u, createdAt: u.createdAt?.toString() || '' }))} />
}
