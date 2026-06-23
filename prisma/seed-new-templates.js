const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const newTemplates = [
  {
    name: 'NeuraStore — Premium E-commerce Template',
    slug: 'neurastore-ecommerce',
    description: 'Modern e-commerce template with product pages, cart functionality, checkout flow, responsive design, and dark mode support. Built with Next.js 14 and Tailwind CSS.',
    price: 14900,
    category: 'E-commerce',
    tags: JSON.stringify(['next.js', 'tailwind', 'ecommerce', 'cart', 'checkout', 'dark-mode']),
    previewUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    screenshot: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    fileUrl: '/neurastore.tar.gz',
    liveDemo: null,
    stripeProductId: 'prod_Ujr4vwnfVC8o4e',
    stripePriceId: 'price_1TkNMCBQ1UgeJKAdTFoFv1QB',
    featured: true,
    features: JSON.stringify([
      'Product catalog with category filtering',
      'Slide-out cart drawer with quantity management',
      'Full checkout flow with form validation',
      'Dark mode with smooth toggle',
      'Responsive design (mobile, tablet, desktop)',
      'Product detail pages with image gallery',
      'Related products section',
      'Newsletter signup section',
      'Gradient accents and glass morphism effects',
      'Clean modern typography',
    ]),
  },
  {
    name: 'NeuraBlog Pro — Professional Blog Template',
    slug: 'neurablog-pro-blog',
    description: 'Professional blog with MDX support, SEO optimization, newsletter integration, search functionality, and dark mode. Perfect for content creators and publishers.',
    price: 7900,
    category: 'Blog',
    tags: JSON.stringify(['next.js', 'tailwind', 'blog', 'mdx', 'seo', 'newsletter']),
    previewUrl: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80',
    screenshot: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80',
    fileUrl: '/neurablog.tar.gz',
    liveDemo: null,
    stripeProductId: 'prod_Ujr48Dw3L1syel',
    stripePriceId: 'price_1TkNMDBQ1UgeJKAdcuc0grCw',
    featured: true,
    features: JSON.stringify([
      'MDX support for rich content',
      'Full-screen search overlay with live filtering',
      'Newsletter signup modal',
      'Category filtering with tabs',
      'SEO optimized (meta tags, structured data)',
      'Dark mode with warm editorial palette',
      'Social share buttons (Twitter, LinkedIn, Facebook)',
      'About page with team section',
      'Elegant serif headings with sans-serif body',
      '7 sample posts with real content',
    ]),
  },
  {
    name: 'NeuraPortfolio — Creative Portfolio Template',
    slug: 'neuraportfolio-creative',
    description: 'Creative portfolio for designers and developers with project showcase, filters, contact form, CSS animations, and responsive design. Bold, vibrant design.',
    price: 5900,
    category: 'Portfolio',
    tags: JSON.stringify(['next.js', 'tailwind', 'portfolio', 'animations', 'contact-form', 'creative']),
    previewUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    screenshot: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    fileUrl: '/neuraportfolio.tar.gz',
    liveDemo: null,
    stripeProductId: 'prod_Ujr47MDpKqxmM4',
    stripePriceId: 'price_1TkNMEBQ1UgeJKAdGxA9xV3p',
    featured: false,
    features: JSON.stringify([
      'Project showcase with category filters',
      'Scroll-triggered CSS animations',
      'Contact form with validation and loading states',
      'Skill bars with percentage animations',
      'Testimonials section',
      'Dark mode with vibrant accent colors',
      'Masonry-like project grid layout',
      'Glass morphism cards with backdrop blur',
      'Gradient text effects',
      'Project detail pages with prev/next navigation',
    ]),
  },
  {
    name: 'NeuraLanding Pro — High-Converting Landing Page',
    slug: 'neuralanding-pro-landing',
    description: 'High-converting landing page template with multiple sections, CTA optimization, A/B testing support, and fast loading. Built for SaaS products and startups.',
    price: 8900,
    category: 'Landing Page',
    tags: JSON.stringify(['next.js', 'tailwind', 'landing', 'saas', 'conversion', 'startup']),
    previewUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    fileUrl: '/neuralanding.tar.gz',
    liveDemo: null,
    stripeProductId: 'prod_Ujr4DogKoukhAW',
    stripePriceId: 'price_1TkNMGBQ1UgeJKAdN9RuHelS',
    featured: true,
    features: JSON.stringify([
      'High-conversion hero with email capture',
      'Social proof section with stats',
      'Feature grid with icons',
      '3-tier pricing cards',
      'Testimonial carousel',
      'FAQ accordion section',
      'Bottom CTA with gradient',
      'Sticky header with compact mode',
      'Dark mode support',
      'A/B testing ready structure',
    ]),
  },
];

async function main() {
  console.log('Seeding 4 new premium templates...');
  for (const template of newTemplates) {
    const result = await prisma.template.upsert({
      where: { slug: template.slug },
      update: template,
      create: template,
    });
    console.log(`✓ ${result.name} (€${result.price / 100})`);
  }
  console.log(`\nSeeded ${newTemplates.length} new templates successfully!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
