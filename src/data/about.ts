export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials?: string;
}

export const aboutData = {
  hero: {
    title: 'About AIMS Healthcare College',
    subtitle: 'Nurturing compassionate healthcare professionals dedicated to excellence, dignity, and service across Ontario.',
  },
  history: {
    title: 'Our Heritage & Journey',
    content: [
      'AIMS Healthcare College was established in Stoney Creek, Ontario, with a clear focus: bridging the growing need for high-quality, compassionate personal support workers and healthcare support staff in our healthcare system.',
      'Recognizing that healthcare requires both clinical competence and heartfelt empathy, our curriculum was developed in consultation with healthcare leaders, long-term care administrators, and experienced educators.',
      'Today, we proudly deliver flexible learning schedules that empower adult learners, career changers, and newcomers to Canada to succeed in an essential, fulfilling career without sacrificing family or work commitments.',
    ],
  },
  mission: {
    title: 'Mission & Vision',
    statement:
      'To empower aspiring healthcare workers through accessible, practical, and empathetic education that transforms lives and strengthens communities.',
    pillars: [
      {
        title: 'Compassionate Care',
        description: 'Cultivating the empathy, patience, and dignity essential to supporting individuals in vulnerable moments.',
      },
      {
        title: 'Clinical Excellence',
        description: 'Providing rigorous theoretical knowledge combined with 300+ hours of hands-on clinical practicum in accredited facilities.',
      },
      {
        title: 'Flexible Accessibility',
        description: 'Offering day, evening, and weekend pathways tailored to fit diverse life schedules and obligations.',
      },
      {
        title: 'Community Impact',
        description: 'Directly addressing Ontario’s acute healthcare shortage by preparing confident, job-ready personal support workers.',
      },
    ],
  },
  team: [
    {
      name: 'Academic & Practicum Faculty',
      role: 'Clinical Instruction & Placement Team',
      bio: 'Our instructors bring decades of combined frontline nursing, geriatric care, and clinical supervision experience in Ontario hospitals and long-term care homes.',
      credentials: 'RN, RPN & Certified Clinical Preceptors',
    },
    {
      name: 'Student Success & Admissions',
      role: 'Advising & Career Support',
      bio: 'Guiding students every step of the way—from enrollment and prerequisites through exam preparation and post-graduation placement assistance.',
      credentials: 'Student Services Department',
    },
  ],
};
