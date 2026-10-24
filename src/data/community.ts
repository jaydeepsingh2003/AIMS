import type { CommunityService } from '../types/content';

export const communityIntro = {
  title: 'Community Support & Healthcare Partnerships',
  subtitle:
    'Dedicated to delivering compassionate care and empowering vulnerable communities across Ontario through skilled Personal Support Workers.',
  description:
    'Personal Support Workers are the heartbeat of Ontario’s community healthcare framework. Our training bridges the gap between academic preparation and real-world care settings, ensuring that our graduates bring empathy, safety, and clinical competence to diverse community environments.',
};

export const communityServices: CommunityService[] = [
  {
    id: 'retirement-residences',
    title: 'Retirement Residences',
    description:
      'Retirement residences provide older adults with an engaging, supportive living environment where they can enjoy their golden years with dignity and peace of mind. Personal Support Workers assist residents with personal grooming, mealtime assistance, mobility support, and daily activities, while fostering a warm, friendly community atmosphere.',
    image: '/images/community-retirement.jpg',
    imagePosition: 'left',
  },
  {
    id: 'community-support-programs',
    title: 'Community Support Programs',
    description:
      'Community support initiatives provide vital home and neighborhood care to individuals recovering from surgery, managing chronic illnesses, or living with disabilities. PSWs work closely with families and multidisciplinary care coordinators to ensure independence, safety, and continuous holistic care in familiar surroundings.',
    image: '/images/community-support.jpg',
    imagePosition: 'right',
  },
  {
    id: 'private-practice',
    title: 'Private Care & Specialized Practice',
    description:
      'In specialized and private care environments, Personal Support Workers provide one-on-one attention tailored directly to individual client needs. Whether supporting palliative care, respite relief for family caregivers, or continuous overnight support, PSWs play an invaluable, deeply trusted role.',
    image: '/images/community-private-care.jpg',
    imagePosition: 'left',
  },
];
