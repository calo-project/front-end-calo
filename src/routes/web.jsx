import { lazy } from 'react';
import React from "react";

const HomePage = lazy(() => import('../pages/web/user/HomePage.jsx'));
import AboutPage from '../pages/web/user/features/about/AboutPage.jsx';
import BecomePartnerPage from '../pages/web/user/features/becomepartner/BecomePartnerPage.jsx';
import EventPage from '../pages/web/user/features/event/EventPage.jsx'
import EventDetail from '../pages/web/user/features/event/components/EventDetailPage.jsx'
import FormPartner from '../pages/web/user/features/becomepartner/SubmissionPartner.jsx'
// import EventDetail from '../pages/web/user/features/event/components/EventDetailPage.jsx'


const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/tentang',
        component: AboutPage,
    },
    {
        path: '/jadi-partner',
        component: BecomePartnerPage,
    },
    {
        path: '/acara',
        component: EventPage,
    },
    {
        path: '/partner',
        component: FormPartner,
    },
    {
        path: '/acara/:slug',
        component: EventDetail,
    },
    // {
    //     path: '/acara/*',
    //     component: EventDetailPage,
    // },
    // {
    //     path: '/acara/*/jenis-tiket/*',
    //     component: EventDetailWithTicketTypePage,
    // },
    // {
    //     path: '/beli/*',
    //     component: BuyPage,
    // },
    // {
    //     path: '/beli/*/checkout',
    //     component: CheckoutPage,
    // },
    // {
    //     path: '/beli/*/checkout/status/*',
    //     component: BuyStatusPage,
    // },
    // {
    //     path: '/faq',
    //     component: FaqPage,
    // },
    // {
    //     path: '/penyelenggara-event/',
    //     component: OrganizerPage,
    // },
    // {
    //     path: '/penyelenggara-event/*',
    //     component: DetailOrganizerPage,
    // },
    // {
    //     path: '/kontak-kami',
    //     component: ContactUsPage,
    // },
    // {
    //     path: '/kebijakan-privasi',
    //     component: PrivacyPolicyPage,
    // },
    // {
    //     path: '/cara-beli',
    //     component: BuyTutorialPage,
    // },
    // {
    //     path: '/mekanisme-blockchain',
    //     component: BlockchainMechanismPage,
    // },
]

export default routes;