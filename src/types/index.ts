export interface Template {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  previewUrl: string;
  screenshot: string;
  features: string[];
  fileUrl: string;
  liveDemo?: string | null;
  downloads: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  email: string;
  sessionId: string;
  amount: number;
  status: string;
  templateId: string;
  template?: Template;
  createdAt: Date;
}

export interface ApiUser {
  id: string;
  email: string;
  apiKey: string;
  plan: string;
  credits: number;
  createdAt: Date;
}

export interface AnalyticsEvent {
  id: string;
  event: string;
  page: string;
  visitorId: string;
  data?: string;
  createdAt: Date;
}

export interface TrackingPayload {
  event: string;
  page: string;
  visitorId: string;
  timestamp: number;
  data?: Record<string, string | number | boolean | undefined>;
}

export interface TemplateListResponse {
  templates: Template[];
}

export interface TemplateViewsResponse {
  [slug: string]: number;
}

export interface StatsResponse {
  userCount: number;
  templateCount: number;
  totalDownloads: number;
  orderCount?: number;
}

export interface UserStatsResponse {
  count: number;
}

export interface FreeTemplateRequest {
  email: string;
}

export interface FreeTemplateResponse {
  success: boolean;
  downloadUrl: string;
}

export interface ReferralGetResponse {
  code: string;
  link: string;
  totalReferrals: number;
  completedReferrals: number;
  totalCommission: number;
  monthlyEarnings: number;
  currentMonth: string;
  recentReferrals: Array<{
    id: string;
    email: string | null;
    commission: number;
    status: string;
    date: Date;
  }>;
  rewards: Array<{
    min: number;
    label: string;
    reward: string;
    color: string;
    reached: boolean;
    current: boolean;
  }>;
}

export interface ReferralPostRequest {
  referrerEmail: string;
  referredEmail: string;
}

export interface ReferralPostResponse {
  success: boolean;
  message?: string;
  referral?: { id: string; code: string };
  creditsAwarded?: number;
}

export interface ReferralPutRequest {
  referralId: string;
  orderId: string;
  amount: number;
}

export interface LeaderboardEntry {
  rank: number;
  email: string;
  referralCount: number;
  totalCommission: number;
  badge: string;
}

export interface LeaderboardResponse {
  topByReferrals: LeaderboardEntry[];
  topByCommission: LeaderboardEntry[];
}

export interface CronResponse {
  success: boolean;
  timestamp: string;
  results: Record<string, unknown>;
}

export interface UpsellCandidate {
  email: string;
  apiCalls: number;
  sent: boolean;
}

export interface UpsellResponse {
  candidatesFound: number;
  emailsSent: number;
  details: UpsellCandidate[];
}

export interface AgentExecution {
  id: string;
  agentId: string;
  agentName: string;
  input: Record<string, string | number | boolean>;
  output: Record<string, string | number | boolean> | null;
  status: string;
  tokensUsed: number;
  executedAt: string;
  duration: number;
}

export interface ScheduledTask {
  id: string;
  agentId: string;
  agentName: string;
  input: Record<string, string | number | boolean>;
  schedule: {
    frequency: string;
    time?: string;
  };
  status: string;
  lastExecution?: string;
  nextExecution: string;
  executionCount: number;
  createdAt: string;
}

export interface AnalyticsStatsResponse {
  totalPageViews: number;
  uniqueVisitors: number;
  funnel: {
    visitors: number;
    registerStarts: number;
    registerCompletes: number;
    checkoutStarts: number;
    checkoutCompletes: number;
    conversionRate: string;
  };
  topPages: Array<{ page: string; views: number; uniqueVisitors: number }>;
  avgTimeOnPage: number;
  timeDistribution: Record<string, number>;
  scrollDepths: Record<number, number>;
  ctaClickRates: Record<string, number>;
  deviceBreakdown: { devices: Record<string, number>; browsers: Record<string, number> };
  utmTraffic: { source: Record<string, number>; medium: Record<string, number>; campaign: Record<string, number> };
  last7Days: Array<{ date: string; visitors: number; conversions: number }>;
  totalEvents: number;
  dateRange: { from: string; to: string };
}

export interface NewsletterRequest {
  email: string;
}

export interface RecoveryRequest {
  templateId: string;
  startedAt: number;
}
