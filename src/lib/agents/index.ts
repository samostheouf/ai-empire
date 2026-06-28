export * from './scoring'
export * from './monitor'
export * from './feedback'
export * from './templates'
export * from './improvement'
export * from './content-creator'
export * from './seo-specialist'
export * from './marketing-expert'
export * from './sales-agent'
export * from './lead-generator'
export * from './voice-agent'
export * from './automation-agent'
export * from './analyst'

export {
  getAgentTemplates,
  getTemplateById,
  getTemplateByRole,
  createPromptVersion,
  optimizePrompt,
  rollbackAgent,
  getVersionHistory
} from './templates'

export {
  getScoringCriteria,
  calculateCompositeScore,
  normalizeCriteriaScores,
  calculateScoreDelta,
  getTargetScore,
  isNearTarget,
  calculatePerformanceBonus,
  getScoreBreakdown,
  AGENT_ROLE_WEIGHTS
} from './scoring'

export {
  improvementEngine,
  ImprovementEngine
} from './improvement'

export type {
  ABTest,
  PromptVersionControl,
  ImprovementPlan,
  ImprovementAction
} from './improvement'

export {
  feedbackSystem,
  FeedbackSystem
} from './feedback'

export type {
  UserFeedback,
  FeedbackAnalysis,
  ImprovementSuggestion
} from './feedback'

export {
  performanceMonitor,
  PerformanceMonitor,
  trackPerformance
} from './monitor'

export type {
  PerformanceMetric,
  PerformanceStats,
  RealTimeMetrics
} from './monitor'

export {
  contentCreatorAgent,
  executeContentCreator
} from './content-creator'

export type {
  ContentRequest,
  GeneratedContent
} from './content-creator'

export {
  seoSpecialistAgent,
  executeSEOAnalysis
} from './seo-specialist'

export type {
  SEOAnalysisRequest,
  SEOAnalysis,
  SEORecommendation,
  MetaTags
} from './seo-specialist'

export {
  marketingExpertAgent,
  executeMarketingPlan
} from './marketing-expert'

export type {
  MarketingRequest,
  MarketingPlan,
  MarketingAction,
  MarketingMetrics
} from './marketing-expert'

export {
  salesAgent,
  executeSalesAgent
} from './sales-agent'

export type {
  SalesRequest,
  SalesResult,
  EmailSequence
} from './sales-agent'

export {
  leadGeneratorAgent,
  executeLeadGenerator
} from './lead-generator'

export type {
  LeadRequest,
  LeadResult,
  Lead
} from './lead-generator'

export {
  voiceAgent,
  executeVoiceAgent
} from './voice-agent'

export type {
  VoiceRequest,
  VoiceResult
} from './voice-agent'

export {
  automationAgent,
  executeAutomationAgent
} from './automation-agent'

export type {
  AutomationRequest,
  AutomationResult
} from './automation-agent'

export {
  analystAgent,
  executeAnalyst
} from './analyst'

export type {
  AnalysisRequest,
  AnalysisResult,
  Insight,
  Forecast
} from './analyst'

export {
  architectSecurityAgent,
  executeSecurityAudit
} from './architect-security'

export type {
  SecurityAuditRequest,
  SecurityAuditResult,
  RouteSecurityAudit,
  MiddlewareAudit,
  DatabaseAudit,
  Vulnerability,
  SecurityRecommendation
} from './architect-security'

export {
  architectQualityAgent,
  executeQualityAudit
} from './architect-quality'

export type {
  QualityAuditRequest,
  QualityAuditResult,
  TypeScriptAudit,
  DuplicationAudit,
  ErrorHandlingAudit,
  PerformanceAudit,
  AccessibilityAudit,
  QualityIssue,
  QualityRecommendation,
  CodeMetrics
} from './architect-quality'

export {
  teamGenerator,
  generateTeam,
  backupTeamContext,
  evolveTeam
} from './team-generator'

export type {
  Team,
  TeamMember,
  ContextBackup,
  EvolutionProgress,
  TeamGeneratorRequest,
  TeamGeneratorResult,
  AuditPlan
} from './team-generator'
