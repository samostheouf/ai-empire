-- Add missing data column to AnalyticsEvent
ALTER TABLE "AnalyticsEvent" ADD COLUMN IF NOT EXISTS "data" TEXT;
