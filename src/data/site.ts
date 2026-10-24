import type { SiteInfo } from '../types/content';

/**
 * Central site information for AIMS Healthcare College.
 * ⚠️ Verify address, phone number, and hours before publication.
 */
export const siteInfo: SiteInfo = {
  name: 'AIMS Healthcare College',
  tagline: 'A Way to Success',
  address: '309-800 Queenston Road, Stoney Creek, ON, Canada',
  phone: '(905) 525-5111',
  email: 'info@aimshealthcarecollege.com',
  hours: [
    { day: 'Monday', time: '09:00 am – 05:00 pm' },
    { day: 'Tuesday', time: '09:00 am – 05:00 pm' },
    { day: 'Wednesday', time: '09:00 am – 05:00 pm' },
    { day: 'Thursday', time: '09:00 am – 05:00 pm' },
    { day: 'Friday', time: '09:00 am – 05:00 pm' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ],
  copyright: `© ${new Date().getFullYear()} AIMS Healthcare College. All Rights Reserved.`,
};
