// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard.jsx'))
const Welcome = lazy(() => import('../pages/protected/Welcome.jsx'))
const Page404 = lazy(() => import('../pages/protected/404.jsx'))
const Blank = lazy(() => import('../pages/protected/Blank.jsx'))
const Charts = lazy(() => import('../pages/protected/Charts.jsx'))
const Leads = lazy(() => import('../pages/protected/Leads.jsx'))
const Integration = lazy(() => import('../pages/protected/Integration.jsx'))
const Calendar = lazy(() => import('../pages/protected/Calendar.jsx'))
const Team = lazy(() => import('../pages/protected/Team.jsx'))
const Transactions = lazy(() => import('../pages/protected/Transactions.jsx'))
const Bills = lazy(() => import('../pages/protected/Bills.jsx'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings.jsx'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))


const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/settings-billing',
    component: Bills,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
