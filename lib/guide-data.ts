/**
 * Static metadata for Memory Bank guide steps.
 * Maps guide files to human-readable titles and descriptions.
 */

export interface GuideStep {
  step: string;
  slug: string;
  title: string;
  description: string;
  path: string;
}

export const GUIDE_STEPS: GuideStep[] = [
  {
    step: '01',
    slug: '01_introduction',
    title: 'Introduction',
    description: 'What is the Memory Bank and how does it work?',
    path: '/guide/01_introduction.md',
  },
  {
    step: '02',
    slug: '02_installation',
    title: 'Installation',
    description: 'Set up your development environment and install dependencies.',
    path: '/guide/02_installation.md',
  },
  {
    step: '03',
    slug: '03_activation',
    title: 'Activation',
    description: 'Activate the systemic architect mode and internalize memory modules.',
    path: '/guide/03_activation.md',
  },
  {
    step: '04',
    slug: '04_phases',
    title: 'Development Phases',
    description: 'Understand the four phases of Memory Bank development.',
    path: '/guide/04_phases.md',
  },
  {
    step: '05',
    slug: '05_operational_protocol',
    title: 'Operational Protocol',
    description: 'Learn how to interact with the Memory Bank system.',
    path: '/guide/05_operational_protocol.md',
  },
  {
    step: '06',
    slug: '06_runtime_verification',
    title: 'Runtime Verification',
    description: 'Verify your implementation and test deployment readiness.',
    path: '/guide/06_runtime_verification.md',
  },
  {
    step: '07',
    slug: '07_domain_expansion',
    title: 'Domain Expansion',
    description: 'Extend the system with domain-oriented Memory Banks.',
    path: '/guide/07_domain_expansion.md',
  },
  {
    step: '08',
    slug: '08_troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and their solutions.',
    path: '/guide/08_troubleshooting.md',
  },
];

/**
 * Get all guide steps in order.
 */
export function getGuideSteps(): GuideStep[] {
  return GUIDE_STEPS;
}

/**
 * Get a single guide step by slug.
 */
export function getStepBySlug(slug: string): GuideStep | undefined {
  return GUIDE_STEPS.find((step) => step.slug === slug);
}

/**
 * Get previous and next steps for navigation.
 */
export function getAdjacentSteps(slug: string): {
  prev?: GuideStep;
  next?: GuideStep;
} {
  const currentIndex = GUIDE_STEPS.findIndex((step) => step.slug === slug);
  
  if (currentIndex === -1) {
    return {};
  }

  return {
    prev: currentIndex > 0 ? GUIDE_STEPS[currentIndex - 1] : undefined,
    next: currentIndex < GUIDE_STEPS.length - 1 ? GUIDE_STEPS[currentIndex + 1] : undefined,
  };
}

