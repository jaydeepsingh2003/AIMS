import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ProgramsPage } from '../pages/ProgramsPage';
import { PSWProgramPage } from '../pages/PSWProgramPage';
import { AdmissionsPage } from '../pages/AdmissionsPage';
import { CareerOpportunitiesPage } from '../pages/CareerOpportunitiesPage';
import { CommunitySupportPage } from '../pages/CommunitySupportPage';
import { ContactPage } from '../pages/ContactPage';
import { PolicyPage } from '../pages/PolicyPage';
import { ApplyPage } from '../pages/ApplyPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'programs', element: <ProgramsPage /> },
      { path: 'programs/personal-support-worker', element: <PSWProgramPage /> },
      { path: 'admissions', element: <AdmissionsPage /> },
      { path: 'career-opportunities', element: <CareerOpportunitiesPage /> },
      { path: 'community-support', element: <CommunitySupportPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'policies/sexual-violence-harassment', element: <PolicyPage /> },
      { path: 'apply', element: <ApplyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
