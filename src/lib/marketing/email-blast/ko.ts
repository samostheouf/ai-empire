// ============================================
// AI-EMPIRE — 이메일 블라스트 템플릿
// 전환 최적화 이메일 캠페인
// ============================================

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  preheader: string;
  body: string;
  cta: string;
  trackingParams: string;
}

// === 캠페인 1: 제품 출시 ===
export const productLaunchEmail: EmailTemplate = {
  id: 'email-launch',
  name: '출시 안내',
  subject: '🚀 AI-Empire가 드디어 출시되었습니다 — 스타트업을 위한 프랑스 AI 플랫폼',
  preheader: '무료 AI API를 5분 만에 받아보세요. 프랑스어 지원 포함.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 AI-Empire가 드디어 출시되었습니다!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">스타트업을 위한 프랑스 AI 플랫폼</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          안녕하세요 {{first_name}}님,
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          좋은 소식이 있습니다: <strong>AI-Empire가 공식 출시되었습니다!</strong>
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          이제 다음 기능을 이용할 수 있습니다:
        </p>

        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #333;">✅ 통합 AI API (Groq + Gemini)</p>
          <p style="margin: 5px 0; color: #333;">✅ 3개 엔드포인트: 생성, SEO, 코드</p>
          <p style="margin: 5px 0; color: #333;">✅ 시작용 무료 크레딧</p>
          <p style="margin: 5px 0; color: #333;">✅ 직관적인 프랑스어 대시보드</p>
          <p style="margin: 5px 0; color: #333;">✅ 프랑스어 지원</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>API 키:</strong> <code style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">{{api_key}}</code>
        </p>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=launch&utm_campaign={{campaign_id}}"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            첫 테스트 시작하기 →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          다음 단계: 2분 만에 첫 API 호출을 해보세요.
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — 스타트업을 위한 프랑스 AI 플랫폼 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">웹사이트</a> |
          <a href="https://ai-empire-steel.vercel.app/docs?utm_source=email&utm_medium=footer" style="color: #667eea;">문서</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">구독 취소</a>
        </p>
      </div>

    </div>
  `,
  cta: '첫 테스트 시작하기 →',
  trackingParams: '?utm_source=email&utm_medium=launch&utm_campaign=product_launch',
};

// === 캠페인 2: 한정 오퍼 -50% ===
export const limitedOfferEmail: EmailTemplate = {
  id: 'email-offer',
  name: '한정 오퍼 -50%',
  subject: '⚡ NeuraPortfolio -50% — 오퍼 48시간 후 만료',
  preheader: '프리미엄 Next.js 템플릿 반값. 50+ 컴포넌트, 다크 모드, 반응형.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px;">⚡ -50%</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">오퍼 48시간 후 만료!</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          안녕하세요 {{first_name}}님,
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>독점 오퍼</strong>를 준비했습니다: <strong>NeuraPortfolio -50%</strong>, AI 포트폴리오를 만들기 위한 프리미엄 Next.js 템플릿.
        </p>

        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⚠️ 50개 판매 한정 — 48시간 후 만료</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          제공 내용:
        </p>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>✅ 50개 이상의 React 컴포넌트</li>
          <li>✅ 다크 모드 + 반응형</li>
          <li>✅ 부드러운 애니메이션</li>
          <li>✅ 네이티브 AI 통합</li>
          <li>✅ 프랑스어 지원</li>
          <li>✅ 무료 평생 업데이트</li>
        </ul>

        <!-- Price -->
        <div style="text-align: center; margin: 30px 0;">
          <p style="margin: 0; font-size: 18px; color: #999; text-decoration: line-through;">€49</p>
          <p style="margin: 0; font-size: 36px; color: #f5576c; font-weight: bold;">€24.99</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/templates/neuraportfolio?utm_source=email&utm_medium=offer&utm_campaign=limited_50"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            오퍼 받기 →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          48시간 후 가격이 €49로 복귀됩니다. 이 기회를 놓치지 마세요!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — 스타트업을 위한 프랑스 AI 플랫폼 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">웹사이트</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">구독 취소</a>
        </p>
      </div>

    </div>
  `,
  cta: '오퍼 받기 →',
  trackingParams: '?utm_source=email&utm_medium=offer&utm_campaign=limited_50',
};

// === 캠페인 3: 성공 사례 ===
export const successStoriesEmail: EmailTemplate = {
  id: 'email-success',
  name: '고객 후기',
  subject: '💬 이 프랑스 스타트업들이 AI로 성공한 방법',
  preheader: 'AI가 누구에게나 접근 가능하다는 것을 증명하는 3가지 고객 사례.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💬 고객 후기</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">그들의 성공이 당신의 것이 될 수 있습니다</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          안녕하세요 {{first_name}}님,
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          프랑스 스타트업들이 AI-Empire로 달성하고 있는 성과를 소개합니다.
        </p>

        <!-- 후기 1 -->
        <div style="background: #f8f9fa; border-left: 4px solid #11998e; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "AI-Empire로 전환하여 AI 비용을 60% 절감했습니다. 통합에는 5분밖에 걸리지 않았고 프랑스어 지원은 정말 큰 장점입니다."
          </p>
          <p style="margin: 0; font-weight: bold; color: #11998e;">— 파리 소재 스타트업 CTO Marc</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">결과: 비용 -60%, 속도 +40%</p>
        </div>

        <!-- 후기 2 -->
        <div style="background: #f8f9fa; border-left: 4px solid #38ef7d; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "SaaS에 2시간 만에 AI를 통합했습니다. 고객들이 새로운 기능을 정말 좋아합니다."
          </p>
          <p style="margin: 0; font-weight: bold; color: #38ef7d;">— 리옹 소재 SaaS 창업자 Sophie</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">결과: 전환율 +25%</p>
        </div>

        <!-- 후기 3 -->
        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "프랑스어 대시보드가 직관적입니다. 팀이 하루 만에 AI를 도입했습니다."
          </p>
          <p style="margin: 0; font-weight: bold; color: #667eea;">— 보르도 소재 스케일업 PM Lucas</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">결과: 생산성 +40%</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=success&utm_campaign=testimonials"
             style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            성공 사례에 참여하기 →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — 스타트업을 위한 프랑스 AI 플랫폼 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">웹사이트</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">구독 취소</a>
        </p>
      </div>

    </div>
  `,
  cta: '성공 사례에 참여하기 →',
  trackingParams: '?utm_source=email&utm_medium=success&utm_campaign=testimonials',
};

// === 캠페인 4: 월간 뉴스레터 ===
export const monthlyNewsletterEmail: EmailTemplate = {
  id: 'email-newsletter',
  name: '월간 뉴스레터',
  subject: '📰 AI-Empire 뉴스레터 — 2025년 1월',
  preheader: '프랑스 AI 플랫폼의 최신 소식, 팁, 오퍼.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">📰 AI-Empire 뉴스레터</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">2025년 1월</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          안녕하세요 {{first_name}}님,
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          AI-Empire의 최신 소식을 전해드립니다:
        </p>

        <!-- 새 기능 1 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">🚀 새소식: SEO 엔드포인트</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          클릭 한 번으로 SEO 최적화된 콘텐츠를 생성하세요. 블로그나 SaaS에 통합할 수 있습니다.
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/seo?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          SEO 엔드포인트 알아보기 →
        </a>

        <!-- 새 기능 2 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📊 팁: API 호출 최적화</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          스마트 캐싱을 사용하여 호출 비용을 최대 30% 절약하세요. 방법은 다음과 같습니다:
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/cache?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          튜토리얼 보기 →
        </a>

        <!-- 오퍼 -->
        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 25px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">🎁 구독자 전용 오퍼: NeuraBlog -30%</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #856404;">코드 NEWSLETTER30 사용</p>
        </div>

        <!-- 통계 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📈 이번 달 수치</h3>
        <div style="display: flex; justify-content: space-around; text-align: center; margin: 20px 0;">
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">+35%</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">사용자</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">10K+</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">API 호출</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">4.8/5</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">만족도</p>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            대시보드 접속 →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — 스타트업을 위한 프랑스 AI 플랫폼 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">웹사이트</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">구독 취소</a>
        </p>
      </div>

    </div>
  `,
  cta: '대시보드 접속 →',
  trackingParams: '?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan',
};

// === 캠페인 5: 추천 프로그램 ===
export const referralProgramEmail: EmailTemplate = {
  id: 'email-referral',
  name: '추천 프로그램',
  subject: '💰 추천한 친구 1명당 €50 받기!',
  preheader: '추천 프로그램: 친구를 초대하고 돈을 벌어보세요.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💰 추천 프로그램</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">추천한 친구 1명당 €50 받기</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          안녕하세요 {{first_name}}님,
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          AI-Empire가 마음에 드셨나요? <strong>친구에게 공유하고 돈을 벌어보세요!</strong>
        </p>

        <!-- 방법 -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">어떻게 작동하나요?</h3>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>1.</strong> 고유 추천 링크 공유
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>2.</strong> 친구가 링크로 가입
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>3.</strong> 유료 플랜 구매
          </p>
          <p style="margin: 0; font-size: 16px; color: #333;">
            <strong>4.</strong> 계정에 <strong>€50</strong> 입금!
          </p>
        </div>

        <!-- 고유 링크 -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">고유 링크:</p>
          <p style="margin: 0; font-size: 16px; color: #667eea; font-weight: bold; word-break: break-all;">
            https://ai-empire-steel.vercel.app/ref/{{referral_code}}?utm_source=referral&utm_medium=email
          </p>
        </div>

        <!-- 혜택 -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">추천자 혜택</h3>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>💰 성공적인 추천 1건당 €50</li>
          <li>📊 실시간 추적 대시보드</li>
          <li>💳 Stripe를 통한 결제 (은행 송금)</li>
          <li>🎁 다음 갱신 시 -20% 할인</li>
          <li>⭐ 5건 추천 후 "골드 추천자" 상태</li>
        </ul>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/referrals?utm_source=email&utm_medium=referral&utm_campaign=referral_program"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            링크 공유하기 →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          추천 횟수 제한 없음. 많이 공유할수록 많이 벌 수 있습니다!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — 스타트업을 위한 프랑스 AI 플랫폼 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">웹사이트</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">구독 취소</a>
        </p>
      </div>

    </div>
  `,
  cta: '링크 공유하기 →',
  trackingParams: '?utm_source=email&utm_medium=referral&utm_campaign=referral_program',
};

// === COLLECTION ===
export const emailTemplates: EmailTemplate[] = [
  productLaunchEmail,
  limitedOfferEmail,
  successStoriesEmail,
  monthlyNewsletterEmail,
  referralProgramEmail,
];

export const getEmailTemplateById = (id: string): EmailTemplate | undefined => {
  return emailTemplates.find((e) => e.id === id);
};

export const generateEmailSequence = (): EmailTemplate[] => {
  return [
    productLaunchEmail,
    limitedOfferEmail,
    successStoriesEmail,
    monthlyNewsletterEmail,
    referralProgramEmail,
  ];
};
