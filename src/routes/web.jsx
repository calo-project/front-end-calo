import { lazy } from 'react';


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
        path: '/jadi-patner',
        component: BecomePartnerPage,
    },
    {
        path: '/ajukan-patner',
        component: SubmissionPartnerPage,
    },
    {
        path: '/acara',
        component: EventPage,
    },
    {
        path: '/acara/*',
        component: EventDetailPage,
    },
    {
        path: '/acara/*/jenis-tiket/*',
        component: EventDetailWithTicketTypePage,
    },
    {
        path: '/beli/*',
        component: BuyPage,
    },
    {
        path: '/beli/*/checkout',
        component: CheckoutPage,
    },
    {
        path: '/beli/*/checkout/status/*',
        component: BuyStatusPage,
    },
    {
        path: '/faq',
        component: FaqPage,
    },
    {
        path: '/penyelenggara-event/',
        component: OrganizerPage,
    },
    {
        path: '/penyelenggara-event/*',
        component: DetailOrganizerPage,
    },
    {
        path: '/kontak-kami',
        component: ContactUsPage,
    },
    {
        path: '/kebijakan-privasi',
        component: PrivacyPolicyPage,
    },
    {
        path: '/cara-beli',
        component: BuyTutorialPage,
    },
    {
        path: '/mekanisme-blockchain',
        component: BlockchainMechanismPage,
    },
]