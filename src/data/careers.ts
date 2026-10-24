import type { CareerPath } from '../types/content';

export const careerIntro = {
  title: 'Career Opportunities for PSWs in Ontario',
  description:
    'Graduating as a Personal Support Worker (PSW) in Ontario opens doors to a rewarding and stable career path with diverse employment settings and flexible work arrangements. As a qualified professional, you are essential to the healthcare system, providing compassionate care to those who need it most.',
  extendedDescription:
    'With a high demand for healthcare workers across the province, PSWs enjoy the unique ability to choose the environment that best matches their lifestyle, whether they prefer full-time, part-time, or casual shifts. By choosing this career path, you are entering a field that offers both professional growth and the deep personal fulfilment of making a positive impact on your community every day.',
};

export const careerPaths: CareerPath[] = [
  {
    id: 'long-term-care',
    title: 'Long-Term Care Facilities',
    description:
      'Provide daily living support and companionship in residential nursing homes.',
    icon: 'building-2',
  },
  {
    id: 'home-care',
    title: 'Home Care Agencies',
    description:
      'Offer personalised assistance to clients within their own homes, allowing for highly flexible, independent scheduling.',
    icon: 'home',
  },
  {
    id: 'hospitals',
    title: 'Hospitals',
    description:
      'Assist nursing staff in acute or complex care units, gaining experience in a fast-paced medical environment.',
    icon: 'hospital',
  },
];
