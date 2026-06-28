import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'NeuraAPI'
    const subtitle = searchParams.get('subtitle') || 'APIs IA & Templates Premium Next.js'
    const lang = searchParams.get('lang') || 'fr'

    const badgeTexts: Record<string, string> = {
      fr: 'Gratuit',
      en: 'Free',
      es: 'Gratis',
      de: 'Kostenlos',
      it: 'Gratuito',
      ja: '無料',
      ko: '무료',
      pt: 'Grátis',
      zh: '免费',
      ar: 'مجاني',
    }
    const badgeText = badgeTexts[lang] || badgeTexts.fr

    return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0f0a2e 0%, #1a1145 30%, #2d1b69 60%, #0f0a2e 100%)',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            border: '1px solid rgba(99,102,241,0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '40%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            border: '1px solid rgba(168,85,247,0.1)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>N</span>
            </div>
            <span
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'sans-serif',
              }}
            >
              NeuraAPI
            </span>
          </div>
          <div
            style={{
              fontSize: title.length > 50 ? '48px' : '64px',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: '1.1',
              marginBottom: '24px',
              fontFamily: 'sans-serif',
              maxWidth: '900px',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '28px',
              color: 'rgba(165,180,252,0.8)',
              fontFamily: 'sans-serif',
              maxWidth: '800px',
              lineHeight: '1.4',
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              gap: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                background: 'rgba(99,102,241,0.2)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: 'rgba(196,181,253,0.9)',
                fontSize: '20px',
                fontFamily: 'sans-serif',
              }}
            >
              10+ Templates
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                background: 'rgba(168,85,247,0.2)',
                border: '1px solid rgba(168,85,247,0.3)',
                color: 'rgba(196,181,253,0.9)',
                fontSize: '20px',
                fontFamily: 'sans-serif',
              }}
            >
              8+ Endpoints IA
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                background: 'rgba(236,72,153,0.2)',
                border: '1px solid rgba(236,72,153,0.3)',
                color: 'rgba(196,181,253,0.9)',
                fontSize: '20px',
                fontFamily: 'sans-serif',
              }}
            >
              {badgeText}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
  } catch {
    return new Response('Internal Server Error', { status: 500 })
  }
}
