import type { AdmissionRequirement } from '../types/content';

/**
 * Admissions data for AIMS Healthcare College.
 * ⚠️ All eligibility rules, requirements and documents must be verified
 *    against the college's current official policy before launch.
 */
export const admissionRequirements: AdmissionRequirement[] = [
  {
    id: 'education',
    title: 'Educational Background',
    icon: 'graduation-cap',
    items: [
      'You must have an Ontario Secondary School Diploma (OSSD) or an equivalent Grade 12 credential.',
      'If you studied outside of Canada, your foreign credentials must be translated and evaluated for Canadian equivalency.',
    ],
  },
  {
    id: 'mature-student',
    title: 'Mature Student Status',
    icon: 'user-check',
    items: [
      'If you do not have a high school diploma but are 18 or 19 years of age or older, you can apply as a mature student.',
      'You will be required to pass an approved qualifying test, such as the Wonderlic Scholastic Level Exam (SLE).',
    ],
  },
  {
    id: 'entrance-exam',
    title: 'Entrance Examinations',
    icon: 'file-text',
    items: [
      'NACC Technical Literacy Exam or English language proficiency test to ensure you have the required verbal and written communication skills.',
    ],
  },
  {
    id: 'medical',
    title: 'Medical Certificate of Fitness',
    icon: 'heart-pulse',
    items: [
      'A signed doctor\'s note confirming you are in good physical health and capable of fulfilling the physical demands of the job (such as lifting and standing for long periods).',
    ],
  },
  {
    id: 'immunisation',
    title: 'Up-to-Date Immunisations',
    icon: 'shield-check',
    items: [
      'Proof of current immunisation status.',
      'Tuberculosis (TB) skin tests, MMR, Tdap, Hepatitis B, and relevant seasonal vaccines required by healthcare placement facilities.',
    ],
  },
  {
    id: 'vsc',
    title: 'Vulnerable Sector Check (VSC)',
    icon: 'scan-search',
    items: [
      'A clear, current Police Criminal Record Check with Vulnerable Sector Screening.',
      'This is a strict requirement for anyone working with vulnerable populations (like the elderly or disabled) and must be submitted within 30 to 45 days of starting classes.',
    ],
  },
];

export const admissionIntro = {
  title: 'Admission Requirements',
  description:
    'Are you asking yourself if you have the requirements needed for this next chapter? Please take a look at our list below to ensure you are prepared to embark on your educational journey with us.',
};
