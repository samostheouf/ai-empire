'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '@/i18n'
import {
  Bot,
  Play,
  Trash2,
  CheckCircle,
  XCircle,
  RefreshCw,
  TrendingUp,
  BarChart3,
  Calendar,
  DollarSign,
  Activity,
  Timer,
} from 'lucide-react'

interface Agent {
  id: string
  name: string
  description: string
  status: string
  executions: number
  lastExecution: string | null
  successRate: number
}

interface Execution {
  id: string
  agentId: string
  agentName: string
  input: Record<string, unknown>
  output: Record<string, unknown> | null
  status: string
  tokensUsed: number
  executedAt: string
  duration: number
}

interface ScheduledTask {
  id: string
  agentId: string
  agentName: string
  input: Record<string, unknown>
  schedule: {
    frequency: string
    time?: string
  }
  status: string
  lastExecution?: string
  nextExecution: string
  executionCount: number
  createdAt: string
}

interface RevenueMetrics {
  totalRevenue: number
  monthlyGrowth: number
  conversionRate: number
  averageOrderValue: number
}

export default function AgentsDashboard() {
  const { t, locale } = useI18n()
  const [agents, setAgents] = useState<Agent[]>([])
  const [executions, setExecutions] = useState<Execution[]>([])
  const [tasks, setTasks] = useState<ScheduledTask[]>([])
  const [revenueMetrics, setRevenueMetrics] = useState<RevenueMetrics>({
    totalRevenue: 12500,
    monthlyGrowth: 23,
    conversionRate: 2.8,
    averageOrderValue: 89
  })
  const [loading, setLoading] = useState(true)
  const [executingAgent, setExecutingAgent] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'execute' | 'schedule' | 'history'>('overview')
  const [selectedAgent, setSelectedAgent] = useState<string>('')
  const [agentInput, setAgentInput] = useState('{}')

  useEffect(() => {
    loadData()
    const interval = setInterval(loadData, 30000)
    return () => clearInterval(interval)
  }, [])

  async function loadData() {
    try {
      const [agentsRes, tasksRes] = await Promise.all([
        fetch('/api/agents/execute'),
        fetch('/api/agents/schedule')
      ])

      if (agentsRes.ok) {
        const agentsData = await agentsRes.json()
        setAgents(agentsData.agents || [])
        setExecutions(agentsData.history || [])
      }

      if (tasksRes.ok) {
        const tasksData = await tasksRes.json()
        setTasks(tasksData.tasks || [])
      }
    } catch {
      // Agent data load failed
    } finally {
      setLoading(false)
    }
  }

  async function executeAgent(agentId: string) {
    setExecutingAgent(agentId)
    try {
      let input = {}
      try {
        input = JSON.parse(agentInput)
      } catch {
        // Invalid JSON input
      }

      const response = await fetch('/api/agents/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentId, input })
      })

      if (response.ok) {
        await loadData()
      }
    } catch {
      // Agent execution failed
    } finally {
      setExecutingAgent(null)
    }
  }

  async function scheduleTask(agentId: string, frequency: string) {
    try {
      const response = await fetch('/api/agents/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          agentId,
          schedule: { frequency, time: '09:00' }
        })
      })

      if (response.ok) {
        await loadData()
      }
    } catch {
      // Schedule task failed
    }
  }

  async function executeTask(taskId: string) {
    try {
      const response = await fetch('/api/agents/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'execute', taskId })
      })

      if (response.ok) {
        await loadData()
      }
    } catch {
      // Task execution failed
    }
  }

  async function deleteTask(taskId: string) {
    try {
      const response = await fetch('/api/agents/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete', taskId })
      })

      if (response.ok) {
        await loadData()
      }
    } catch {
      // Task deletion failed
    }
  }

  function getStatusColor(status: string): string {
    switch (status) {
      case 'success':
      case 'termine':
        return 'text-emerald-600 bg-emerald-100'
      case 'error':
      case 'erreur':
        return 'text-red-600 bg-red-100'
      case 'en_cours':
      case 'pending':
        return 'text-amber-600 bg-amber-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  function getStatusIcon(status: string) {
    switch (status) {
      case 'success':
      case 'termine':
        return <CheckCircle className="w-4 h-4" />
      case 'error':
      case 'erreur':
        return <XCircle className="w-4 h-4" />
      case 'en_cours':
      case 'pending':
        return <RefreshCw className="w-4 h-4 animate-spin" />
      default:
        return <Timer className="w-4 h-4" />
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Bot className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">{t('adminAgentsDashboardTitle')}</h1>
          </div>
          <p className="text-gray-500">{t('adminAgentsDashboardSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{t('adminAgentsDashboardRevenue')}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{revenueMetrics.totalRevenue.toLocaleString()}€</p>
              </div>
              <DollarSign className="w-8 h-8 text-emerald-500" />
            </div>
            <div className="mt-2 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
              <span className="text-emerald-600">+{revenueMetrics.monthlyGrowth}%</span>
              <span className="text-gray-500 ml-1">{t('adminAgentsDashboardThisMonth')}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{t('adminAgentsDashboardActiveAgents')}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{agents.length}</p>
              </div>
              <Bot className="w-8 h-8 text-indigo-500" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {agents.filter(a => a.status === 'actif').length} {t('adminAgentsDashboardRunning')}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{t('adminAgentsDashboardExecutions')}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{executions.length}</p>
              </div>
              <Activity className="w-8 h-8 text-violet-500" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {executions.filter(e => e.status === 'success').length} {t('adminAgentsDashboardSuccessful')}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{t('adminAgentsDashboardScheduledTasks')}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{tasks.length}</p>
              </div>
              <Calendar className="w-8 h-8 text-amber-500" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {tasks.filter(t => t.status === 'termine').length} {t('adminAgentsDashboardCompleted')}
            </div>
          </div>
        </div>

        <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
          {[
            { id: 'overview', label: t('adminAgentsDashboardOverview'), icon: BarChart3 },
            { id: 'execute', label: t('adminAgentsDashboardExecute'), icon: Play },
            { id: 'schedule', label: t('adminAgentsDashboardSchedule'), icon: Calendar },
            { id: 'history', label: t('adminAgentsDashboardHistory'), icon: Timer }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as 'overview' | 'execute' | 'schedule' | 'history')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('adminAgentsDashboardAvailableAgents')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {agents.map(agent => (
                  <div
                    key={agent.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                          <Bot className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                          <p className="text-xs text-gray-500">{agent.id}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
                        {agent.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{agent.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{agent.executions} {t('adminAgentsDashboardExecutions2')}</span>
                      <span className="text-gray-500">{agent.successRate}% {t('adminAgentsDashboardSuccessRate')}</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedAgent(agent.id)
                          setActiveTab('execute')
                        }}
                        className="flex-1 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1"
                      >
                        <Play className="w-3 h-3" />
                        {t('adminAgentsDashboardExecuteButton')}
                      </button>
                      <button
                        onClick={() => scheduleTask(agent.id, 'quotidien')}
                        className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                        aria-label={t('adminAgentsDashboardScheduleDaily')}
                      >
                        <Calendar className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('adminAgentsDashboardLatestExecutions')}</h2>
              {executions.length === 0 ? (
                <p className="text-gray-500 text-center py-8">{t('adminAgentsDashboardNoExecutions')}</p>
              ) : (
                <div className="space-y-3">
                  {executions.slice(0, 5).map(exec => (
                    <div
                      key={exec.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        {getStatusIcon(exec.status)}
                        <div>
                          <p className="font-medium text-gray-900">{exec.agentName}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(exec.executedAt).toLocaleString(locale)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{exec.duration}ms</p>
                        <p className="text-xs text-gray-500">{exec.tokensUsed} tokens</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'execute' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('adminAgentsDashboardExecuteAgent')}</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('adminAgentsDashboardAgent')}
                </label>
                <select
                  value={selectedAgent}
                  onChange={(e) => setSelectedAgent(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">{t('adminAgentsDashboardSelectAgent')}</option>
                  {agents.map(agent => (
                    <option key={agent.id} value={agent.id}>
                      {agent.name} - {agent.description}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('adminAgentsDashboardParameters')}
                </label>
                <textarea
                  value={agentInput}
                  onChange={(e) => setAgentInput(e.target.value)}
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 font-mono text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder='{"type": "blog", "topic": "Templates IA"}'
                />
              </div>

              <button
                onClick={() => executeAgent(selectedAgent)}
                disabled={!selectedAgent || executingAgent === selectedAgent}
                className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {executingAgent === selectedAgent ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    {t('adminAgentsDashboardExecuting')}
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    {t('adminAgentsDashboardExecuteAgentButton')}
                  </>
                )}
              </button>
            </div>

            {executions.filter(e => e.agentId === selectedAgent).length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">{t('adminAgentsDashboardLastExecution')}</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-700 overflow-auto max-h-64">
                    {JSON.stringify(
                      executions.filter(e => e.agentId === selectedAgent)[0]?.output,
                      null,
                      2
                    )}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('adminAgentsDashboardScheduleTask')}</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {agents.map(agent => (
                  <div
                    key={agent.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Bot className="w-5 h-5 text-indigo-600" />
                      <h3 className="font-medium text-gray-900">{agent.name}</h3>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => scheduleTask(agent.id, 'quotidien')}
                        className="flex-1 px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors"
                      >
                        {t('adminAgentsDashboardDaily')}
                      </button>
                      <button
                        onClick={() => scheduleTask(agent.id, 'hebdomadaire')}
                        className="flex-1 px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors"
                      >
                        {t('adminAgentsDashboardWeekly')}
                      </button>
                      <button
                        onClick={() => scheduleTask(agent.id, 'mensuel')}
                        className="flex-1 px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors"
                      >
                        {t('adminAgentsDashboardMonthly')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('adminAgentsDashboardScheduledTasksList')}</h2>
              {tasks.length === 0 ? (
                <p className="text-gray-500 text-center py-8">{t('adminAgentsDashboardNoScheduledTasks')}</p>
              ) : (
                <div className="space-y-3">
                  {tasks.map(task => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        {getStatusIcon(task.status)}
                        <div>
                          <p className="font-medium text-gray-900">{task.agentName}</p>
                          <p className="text-sm text-gray-500">
                            {task.schedule.frequency} à {task.schedule.time || '09:00'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-500">
                            {t('adminAgentsDashboardNext')}: {new Date(task.nextExecution).toLocaleString(locale)}
                          </p>
                          <p className="text-xs text-gray-400">
                            {task.executionCount} {t('adminAgentsDashboardExecutions3')}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => executeTask(task.id)}
                            className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-lg transition-colors"
                            aria-label={t('adminAgentsDashboardExecuteTask')}
                          >
                            <Play className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                            aria-label={t('adminAgentsDashboardDeleteTask')}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('adminAgentsDashboardExecutionHistory')}</h2>
            {executions.length === 0 ? (
              <p className="text-gray-500 text-center py-8">{t('adminAgentsDashboardNoExecutionHistory')}</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">{t('adminAgentsDashboardAgent')}</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">{t('adminAgentsDashboardStatus')}</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">{t('adminAgentsDashboardDate')}</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">{t('adminAgentsDashboardDuration')}</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">{t('adminAgentsDashboardTokens')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {executions.map(exec => (
                      <tr key={exec.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Bot className="w-4 h-4 text-indigo-600" />
                            <span className="font-medium text-gray-900">{exec.agentName}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(exec.status)}`}>
                            {getStatusIcon(exec.status)}
                            {exec.status === 'success' ? t('adminAgentsDashboardSuccess') : t('adminAgentsDashboardError')}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-500">
                          {new Date(exec.executedAt).toLocaleString(locale)}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">{exec.duration}ms</td>
                        <td className="py-3 px-4 text-sm text-gray-500">{exec.tokensUsed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
