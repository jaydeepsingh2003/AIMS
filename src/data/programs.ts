import type { ProgramInfo } from '../types/content';

/**
 * Program data for AIMS Healthcare College.
 * ⚠️ All schedule times, durations, and hours are unverified sample content
 *    and must be confirmed by the college before publication.
 */
export const programs: ProgramInfo[] = [
  {
    slug: 'personal-support-worker',
    title: 'Personal Support Worker (PSW) Program',
    shortTitle: 'Personal Support Worker',
    description:
      'At AIMS Healthcare College, we prioritise your success by offering flexible learning schedules designed to fit your unique lifestyle. Whether you are balancing family responsibilities or professional commitments, our learning programs provide the structure you need to excel in your healthcare career without compromising your daily obligations.',
    overview:
      'The Personal Support Worker (PSW) program prepares students with the essential knowledge and practical skills required to provide compassionate, professional care in a variety of healthcare settings. Graduates are equipped to work in long-term care facilities, home care agencies, hospitals, and community support programs across Ontario.',
    image: '/images/classroom-training.webp',
    deliveryFormat: 'In-Person & Distance Learning',
    schedules: [
      {
        format: 'Day Classes',
        icon: 'sun',
        time: '9:00 am – 3:00 pm',
        duration: '26 Weeks',
        theoryHours: 400,
        practicumHours: 300,
      },
      {
        format: 'Evening Classes',
        icon: 'moon',
        time: '5:30 pm – 11:45 pm',
        duration: '33 Weeks',
        theoryHours: 400,
        practicumHours: 300,
      },
      {
        format: 'Weekend Classes',
        icon: 'calendar',
        time: '8:30 am – 5:00 pm',
        duration: '40 Weeks',
        theoryHours: 400,
        practicumHours: 300,
      },
    ],
  },
];
