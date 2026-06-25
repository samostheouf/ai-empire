'use client'

import { useState, useEffect, ReactNode } from 'react'

interface ABTestProps {
  testName: string
  variants: string[]
  children: (variant: string) => ReactNode
}

export function ABTest({ testName, variants, children }: ABTestProps) {
  const [variant, setVariant] = useState<string>('')

  useEffect(() => {
    const stored = localStorage.getItem(`ab_${testName}`)
    if (stored && variants.includes(stored)) {
      setVariant(stored)
    } else {
      const chosen = variants[Math.floor(Math.random() * variants.length)]
      localStorage.setItem(`ab_${testName}`, chosen)
      setVariant(chosen)

      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics/ab-test', JSON.stringify({
          testName,
          variant: chosen,
          timestamp: Date.now(),
        }))
      }
    }
  }, [testName, variants])

  if (!variant) return null
  return <>{children(variant)}</>
}

export function ABButton({ testName, variants, classNameA, classNameB, textA, textB }: {
  testName: string
  variants: [string, string]
  classNameA: string
  classNameB: string
  textA: string
  textB: string
}) {
  return (
    <ABTest testName={testName} variants={variants}>
      {(variant) => (
        <button className={variant === variants[0] ? classNameA : classNameB}>
          {variant === variants[0] ? textA : textB}
        </button>
      )}
    </ABTest>
  )
}
