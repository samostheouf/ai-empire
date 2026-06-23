import type { EmailCampaignBundle } from './types';

export const emailCampaignBundle: EmailCampaignBundle = {
  language: 'ko',
  campaigns: [
    // 캠페인 1: 출시 안내
    {
      id: 'email-launch',
      name: '출시 안내',
      type: 'launch_announcement',
      variants: [
        { id: 'launch-a', subject: 'AI Empire 출시 — AI 기반 SaaS 툴킷을 만나보세요', previewText: '템플릿, AI API, Stripe, 인증까지 — 하나의 플랫폼에서.' },
        { id: 'launch-b', subject: '드디어 출시: Next.js 14 템플릿 + AI API', previewText: 'SaaS를 24시간 만에 배포할 수 있는 모든 것.' },
        { id: 'launch-c', subject: 'SaaS 배포를 더 빠르게 — AI Empire가 시작됩니다', previewText: 'AI 통합이 포함된 프로페셔널 템플릿, 바로 배포 가능.' },
      ],
      previewText: '템플릿, AI API, Stripe, 인증까지 — 하나의 플랫폼에서.',
      cta: 'AI Empire 살펴보기',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement',
      htmlBody: `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;font-weight:700;">AI Empire가 시작됩니다</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">AI 기반 SaaS 제품을 만들기 위한 완전한 툴킷</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">안녕하세요 {{first_name}}님,</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      <strong>AI Empire</strong>의 출시를 알려드리게 되어 기쁩니다. 개발자 여러분이 AI 기반 SaaS 제품을 더 빠르게 배포할 수 있도록 설계된 플랫폼입니다.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">다음을 포함하고 있습니다:</p>

    <div style="background:#f8f9fa;border-left:4px solid #667eea;padding:16px 20px;margin:24px 0;border-radius:0 8px 8px 0;">
      <p style="margin:4px 0;color:#333;">✅ 프로페셔널 Next.js 14 템플릿 (₩19부터)</p>
      <p style="margin:4px 0;color:#333;">✅ 통합 AI API — Groq + Gemini를 하나의 엔드포인트에서</p>
      <p style="margin:4px 0;color:#333;">✅ Stripe 결제 연동 설정 완료</p>
      <p style="margin:4px 0;color:#333;">✅ 기본 제공 인증 시스템</p>
      <p style="margin:4px 0;color:#333;">✅ 관리자 대시보드 포함</p>
      <p style="margin:4px 0;color:#333;">✅ 무료 API 플랜 — 가입 시 100 크레딧 제공</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      이커머스 스토어, 블로그, 포트폴리오 등 어떤 프로젝트를 만들든 AI Empire가 필수적인 기반을 제공합니다.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        AI Empire 살펴보기
      </a>
    </div>

    <h2 style="font-size:20px;color:#333;margin:32px 0 16px;">사용 가능한 템플릿</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Stripe, 장바구니, 관리자 대시보드가 포함된 완전한 이커머스 템플릿</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">MDX, 다크 모드, RSS 피드를 지원하는 SEO 최적화 블로그</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">애니메이션, 다크 모드, 문의 양식이 포함된 프로페셔널 포트폴리오</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">전체 번들 — €299</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">6개 전체 템플릿 + 우선 지원 + 무료 업데이트</p>
    </div>

    <p style="font-size:14px;color:#666;line-height:1.6;margin-top:32px;">
      질문이 있으신가요? 이 메일에 회신해 주세요 — 모든 답변을 읽어봅니다.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empire 팀
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — AI 기반 SaaS 제품을 더 빠르게 만드세요<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">웹사이트</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">문서</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">수신거부</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // 캠페인 2: 제품 업데이트
    {
      id: 'email-update',
      name: '제품 업데이트',
      type: 'product_update',
      variants: [
        { id: 'update-a', subject: '새로운 소식 — 이번 달 AI Empire 업데이트', previewText: '새로운 기능, 개선 사항, 그리고 다가올 것들.' },
        { id: 'update-b', subject: 'AI Empire 변경 기록 — 새로운 템플릿과 API 기능', previewText: '열심히 개발했습니다. 이번에 배포된 내용을 확인하세요.' },
        { id: 'update-c', subject: '이번 달 AI Empire 업데이트를 확인하세요', previewText: '새로운 통합, 성능 개선, 그리고 upcoming 기능.' },
      ],
      previewText: '새로운 기능, 개선 사항, 그리고 다가올 것들.',
      cta: '변경 기록 보기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/changelog?utm_source=email&utm_medium=update&utm_campaign=product_update',
      htmlBody: `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire의 새로운 소식</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">월간 제품 업데이트 — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">안녕하세요 {{first_name}}님,</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      이번 달 배포한 내용을 안내드립니다:
    </p>

    <div style="margin:24px 0;">
      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">새 기능: AI 코드 생성 엔드포인트</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          코드 생성 작업에 최적화된 새로운 API 엔드포인트입니다. Groq Llama 3와 Gemini Pro를 지원하며, 무료 플랜 포함 모든 플랜에서 사용 가능합니다.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">개선: NeuraStore 결제 흐름</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Apple Pay와 Google Pay 지원을 포함하여 결제 경험을 재설계했습니다. 테스트에서 전환율이 15% 향상되었습니다.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">업데이트: API 문서</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          대화형 예제, 복사-붙여넣기 코드 스니펫, 새로운 빠른 시작 가이드로 문서를 완전히 다시 작성했습니다.
        </p>
      </div>

      <div style="padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">다음 달 예정</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          NeuraBlog용 AI 기반 SEO 최적화 도구. 자동 메타 설명, Open Graph 이미지, 구조화된 데이터 생성 기능이 추가됩니다.
        </p>
      </div>
    </div>

    <div style="text-align:center;margin:24px 0;">
      <a href="https://ai-empire-steel.vercel.app/changelog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        전체 변경 기록 보기
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empire와 함께 빌드해 주셔서 감사합니다.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empire 팀
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — AI 기반 SaaS 제품을 더 빠르게 만드세요<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">웹사이트</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">문서</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">수신거부</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // 캠페인 3: 월간 뉴스레터
    {
      id: 'email-newsletter',
      name: '월간 뉴스레터',
      type: 'newsletter',
      variants: [
        { id: 'newsletter-a', subject: 'AI Empire 월간 — 팁, 튜토리얼, 업데이트', previewText: 'AI와 SaaS 인사이트를 매달 받아보세요.' },
        { id: 'newsletter-b', subject: '이번 달 AI와 SaaS — AI Empire 뉴스레터', previewText: '커뮤니티 하이라이트, 새로운 기능, 업계 인사이트.' },
        { id: 'newsletter-c', subject: 'AI Empire #{{issue_number}} — 이번 달 배운 것들', previewText: 'AI 기반 제품 구축을 위한 실용적인 조언.' },
      ],
      previewText: 'AI와 SaaS 인사이트를 매달 받아보세요.',
      cta: '더 읽기',
      ctaUrl: 'https://ai-empire-steel.vercel.app/blog?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_newsletter',
      htmlBody: `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire 월간</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">제 #{{issue_number}}호 — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">안녕하세요 {{first_name}}님,</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      이번 달 뉴스레터에 오신 것을 환영합니다. AI Empire 커뮤니티와 AI/SaaS 분야에서 일어난 소식을 전해드립니다.
    </p>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">튜토리얼</h2>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Next.js 앱에 AI 채팅 추가하기</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">AI Empire의 채팅 엔드포인트를 Next.js 애플리케이션에 통합하는 단계별 가이드. 코드 샘플과 배포 팁 포함.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">SaaS를 위한 Stripe 통합 모범 사례</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">NeuraStore 결제 흐름 구축에서 배운 교훈. 구독 관리, 웹훅, 고객 포털 설정.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Next.js 14를 Vercel에 배포하기: 완전한 가이드</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">제로부터 프로덕션까지. 환경 변수, 도메인, 미리보기 배포, 성능 최적화.</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">커뮤니티 하이라이트</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>주목할 빌드:</strong> 한 사용자가 NeuraStore를 기본 템플릿으로, AI Empire의 API를 텍스트 추출용으로 활용하여 문서 처리 SaaS를 출시했습니다. 제로에서 유료 고객 확보까지 3주 만에 달성했습니다.
      </p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>이달의 팁:</strong> 실시간 응답에는 Groq를(저지연), 복잡한 추론 작업에는 Gemini를 사용하세요. AI Empire는 매개변수 하나로 모델 간 전환이 가능합니다.
      </p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">업계 인사이트</h2>

    <p style="font-size:15px;color:#333;line-height:1.6;">
      AI API 시장은 빠르게 진화하고 있습니다. 통합 엔드포인트에 대한 명확한 트렌드가 보입니다 — 개발자들은 5개의 개별 통합이 아닌 하나의 통합을 원합니다. AI Empire는 이러한 현실을 위해 만들어졌으며, 지속적으로 새로운 모델을 추가하고 있습니다.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/blog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        블로그 전체 보기
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      다음 달에 만나요,<br>AI Empire 팀
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — AI 기반 SaaS 제품을 더 빠르게 만드세요<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">웹사이트</a> ·
      <a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">블로그</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">수신거부</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // 캠페인 4: 재참여 유도
    {
      id: 'email-reengagement',
      name: '재참여 유도',
      type: 'reengagement',
      variants: [
        { id: 'reeng-a', subject: '기다리고 있습니다 — AI Empire 계정이 여러분을 기다립니다', previewText: '돌아오시면 50 크레딧을 드립니다.' },
        { id: 'reeng-b', subject: '아직 고민 중이신가요? 무료 크레딧이 곧 만료됩니다', previewText: '100 크레딧이 여러분을 기다리고 있습니다. 지금 돌아와 빌드하세요.' },
        { id: 'reeng-c', subject: '마지막 방문 이후 AI Empire에 많은 변화가 있었습니다', previewText: '새로운 기능, 새로운 템플릿, 그리고 추가 크레딧을 준비했습니다.' },
      ],
      previewText: '돌아오시면 50 크레딧을 드립니다.',
      cta: '계정 재활성화',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=reengagement&utm_campaign=reengagement',
      htmlBody: `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">기다리고 있습니다</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">AI Empire 계정이 여전히 여기 있으며, 준비한 것이 있습니다</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">안녕하세요 {{first_name}}님,</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empire를 마지막으로 방문하신 후 시간이 꽤 지났습니다. 계정이 여전히 활성 상태이며, 다시 시작하실 수 있도록 <strong>50 크레딧</strong>을 추가해 두었습니다.
    </p>

    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
      <p style="color:#ffffff;font-size:32px;font-weight:700;margin:0;">+50 크레딧</p>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">무료. 추가 조건 없습니다.</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">마지막 방문 이후 추가된 내용:</p>

    <ul style="font-size:15px;color:#333;line-height:1.8;padding-left:20px;">
      <li>새로운 AI 코드 생성 엔드포인트</li>
      <li>개선된 NeuraStore 결제 흐름</li>
      <li>완전히 다시 작성된 API 문서</li>
      <li>JavaScript 및 Python SDK 개선</li>
    </ul>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/dashboard" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        계정 재활성화하기
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      더 이상 이메일을 받고 싶지 않으시면 <a href="{{unsubscribe_url}}" style="color:#999;">수신거부</a>하실 수 있습니다.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — AI 기반 SaaS 제품을 더 빠르게 만드세요<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">웹사이트</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">문서</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">수신거부</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // 캠페인 5: 업그레이드 혜택
    {
      id: 'email-upgrade',
      name: '업그레이드 혜택',
      type: 'upgrade_offer',
      variants: [
        { id: 'upgrade-a', subject: '더 많은 것을 잠금 해제하세요 — AI Empire 플랜 업그레이드', previewText: '더 많은 크레딧, 더 많은 템플릿, 우선 지원.' },
        { id: 'upgrade-b', subject: 'AI Empire 사용량이 증가하고 있습니다 — 업그레이드할 시간인가요?', previewText: '더 많은 API 크레딧과 프리미엄 템플릿을 받아보세요.' },
        { id: 'upgrade-c', subject: '특별 혜택: AI Empire 템플릿 20% 할인', previewText: '활성 사용자를 위한 한정 혜택. 지금 업그레이드하세요.' },
      ],
      previewText: '더 많은 크레딧, 더 많은 템플릿, 우선 지원.',
      cta: '지금 업그레이드 — 20% 할인',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing?utm_source=email&utm_medium=upgrade&utm_campaign=upgrade_offer',
      htmlBody: `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">SaaS를 한 단계 업그레이드하세요</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">활성 AI Empire 사용자를 위한 템플릿 20% 할인</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">안녕하세요 {{first_name}}님,</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empire를 활발히 사용하고 계시는군요 — 이에 대한 보상을 드리고 싶습니다. 모든 템플릿과 전체 번들에 대한 <strong>20% 할인</strong> 혜택을 드립니다.
    </p>

    <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:24px 0;">
      <p style="text-align:center;font-size:14px;color:#666;margin:0 0 4px;">결제 시 코드를 입력하세요:</p>
      <p style="text-align:center;font-size:28px;font-weight:700;color:#667eea;margin:0;letter-spacing:2px;">UPGRADE20</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:24px 0 12px;">템플릿으로 얻을 수 있는 것</h2>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29 → 코드 적용 시 €23.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Stripe, 장바구니, 관리자 대시보드, AI 추천이 포함된 이커머스 템플릿</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19 → 코드 적용 시 €15.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">MDX, 다크 모드, RSS, SEO 최적화가 포함된 블로그 템플릿</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29 → 코드 적용 시 €23.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">애니메이션, 다크 모드, 문의 양식이 포함된 포트폴리오 템플릿</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#eff6ff;border-radius:8px;border:2px solid #667eea;">
      <p style="margin:0;font-weight:600;color:#333;">전체 번들 — €299 → 코드 적용 시 €239.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">6개 전체 템플릿 + 우선 지원 + 무료 업데이트. 최고의 가치.</p>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/pricing?coupon=UPGRADE20" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        지금 업그레이드 — 20% 할인
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      이 혜택은 72시간 후 만료됩니다. 코드는 1회용입니다.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — AI 기반 SaaS 제품을 더 빠르게 만드세요<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">웹사이트</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">문서</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">수신거부</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },
  ],
};
