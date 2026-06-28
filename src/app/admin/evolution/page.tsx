'use client'

import { useState, useEffect } from 'react'
import { Cpu, TrendingUp, Clock, Users, RefreshCw } from 'lucide-react'

interface Agent {
  id: string
  name: string
  role: string
  version: number
  score: number
  stats: {
    totalRequests: number
    successRate: number
    averageResponseTime: number
  }
}

interface EvolutionReport {
  id: string
  agentId: string
  agentName: string
  improvementType: string
  previousScore: number
  newScore: number
  changes: string
  createdAt: string
}

export default function EvolutionDashboard() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [reports, setReports] = useState<EvolutionReport[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/agents').then(res => res.json()),
      fetch('/api/evolution').then(res => res.json()),
    ])
      .then(([agentsData, reportsData]) => {
        setAgents(agentsData.agents || [])
        setReports(reportsData.reports || [])
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const totalImprovements = reports.length
  const avgScore = agents.length > 0
    ? (agents.reduce((sum, a) => sum + a.score, 0) / agents.length).toFixed(2)
    : '0.00'
  const lastRun = reports.length > 0 ? reports[0].createdAt : 'N/A'
  const agentsMonitored = agents.length

  const statCards = [
    { label: 'Total Improvements', value: totalImprovements, icon: TrendingUp, color: 'text-green-500' },
    { label: 'Average Score', value: avgScore, icon: Cpu, color: 'text-blue-500' },
    { label: 'Last Evolution Run', value: lastRun ? new Date(lastRun).toLocaleDateString() : 'N/A', icon: Clock, color: 'text-purple-500' },
    { label: 'Agents Monitored', value: agentsMonitored, icon: Users, color: 'text-orange-500' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Auto-Evolution Dashboard</h1>
        {loading && <RefreshCw className="w-5 h-5 text-gray-400 animate-spin" />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h2 className="text-xl font-bold mb-4">Agents</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Role</th>
                <th className="text-left py-3 px-4">Version</th>
                <th className="text-left py-3 px-4">Score</th>
                <th className="text-left py-3 px-4">Requests</th>
                <th className="text-left py-3 px-4">Success Rate</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr key={agent.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{agent.name}</td>
                  <td className="py-3 px-4">{agent.role}</td>
                  <td className="py-3 px-4">v{agent.version}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      agent.score >= 9 ? 'bg-green-100 text-green-700' :
                      agent.score >= 7 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {agent.score.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-3 px-4">{agent.stats.totalRequests.toLocaleString()}</td>
                  <td className="py-3 px-4">{agent.stats.successRate.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Recent Evolution Reports</h2>
        {reports.length === 0 ? (
          <p className="text-gray-500">No evolution reports yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Agent</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Previous Score</th>
                  <th className="text-left py-3 px-4">New Score</th>
                  <th className="text-left py-3 px-4">Changes</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">{new Date(report.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 px-4 font-medium">{report.agentName}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        {report.improvementType}
                      </span>
                    </td>
                    <td className="py-3 px-4">{report.previousScore.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className="text-green-600 font-medium">+{(report.newScore - report.previousScore).toFixed(2)}</span>
                    </td>
                    <td className="py-3 px-4 max-w-xs truncate">{report.changes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
