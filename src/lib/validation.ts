import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const applicationFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  program: z.string().min(1, 'Please select a program.'),
  studyFormat: z.string().min(1, 'Please select a study format.'),
  message: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
