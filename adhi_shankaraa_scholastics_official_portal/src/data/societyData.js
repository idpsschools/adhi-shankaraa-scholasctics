/**
 * Content + asset references for the Adhi Shankaraa Scholastics site.
 * Images are the originals supplied by the client, bundled from
 * `src/assets/images/` by Vite (hashed + optimised at build time).
 */

/* ------------------------------- Images -------------------------------- */
import heroCampus from '../assets/images/heroCampus.jpg';
import heroCaptionEmblem from '../assets/images/heroCaptionEmblem.jpg';
import schoolCrest from '../assets/images/schoolCrest.jpg';
import calloutEmblem from '../assets/images/calloutEmblem.jpg';
import contactSchoolLogo from '../assets/images/contactSchoolLogo.jpg';
import societySeal from '../assets/images/societySeal.png'

export const IMG = {
  // No local asset supplied for the society seal yet — keep the export URL.
  societySeal,
  heroCampus,
  heroCaptionEmblem,
  schoolCrest,
  calloutEmblem,
  contactSchoolLogo,
};

/* ------------------------------ Navigation ---------------------------- */
export const navLinks = [
  { label: 'About Us', href: '#about', path: 'about-us' },
  { label: 'Affiliated School', href: '#school', path: 'affiliated-school' },
  { label: 'Contact', href: '#contact', path: 'contact' },
];

/* ---------------------- Hero: statutory highlight ribbon -------------- */
export const heroStats = [
  {
    icon: 'calendar_today',
    label: 'Registered Date',
    value: '14 November 2022',
    note: 'Continuous statutory operation',
  },
  {
    icon: 'gavel',
    label: 'Licensing & Corporate Framework',
    value: 'Trademark Licensing· Certification',
    note: 'Scholastic Services',
  },
  {
    icon: 'fingerprint',
    label: 'Adhi Shankaraa Scholastics.',
    value: 'Educational Licensing & Brand Services',
    note: 'Cherukupalli / Bapatla Dist.',
  },
  {
    icon: 'account_balance',
    label: 'Managing Institution',
    value: 'IDPS Cherukupalli',
    note: 'CBSE Affiliation 130739',
    noteAccent: true,
  },
];

/* ----------------------- About: founding objects -------------------- */
export const foundingObjects = [
  {
    icon: 'domain_add',
    number: 'Founding Object 01',
    title: 'Establishing and maintaining educational institutions',
    description:
      'Establishing, maintaining, and regulating quality educational institutions that provide high-caliber scholastic infrastructure, progressive pedagogy, and state-of-the-art facilities for youth.',
    tag: 'Realized via IDPS Campus',
  },
  {
    icon: 'palette',
    number: 'Founding Object 02',
    title: 'Encouraging literary, cultural, and sporting activities',
    description:
      'Fostering multifaceted human development through debate, regional arts, musical heritage, physical education, athletic sports meets, and cultural exhibitions that build character.',
    tag: 'Active Student Life',
  },
  {
    icon: 'volunteer_activism',
    number: 'Founding Object 03',
    title: 'Working toward the eradication of illiteracy',
    description:
      'Empowering semi-urban and rural families in Cherukupalli mandal by breaking socioeconomic barriers to literacy through community outreach, library access, and inclusive enrollment.',
    tag: 'Social Upliftment',
  },
  {
    icon: 'child_care',
    number: 'Founding Object 04',
    title: 'Running nursery and pre-primary programs',
    description:
      'Delivering structured foundational early childhood care, motor development frameworks, phonics instruction, and child-centered inquiry during the most critical early development years.',
    tag: 'Foundational Years Care',
  },
];

/* ---------------- Affiliated School: institutional registry --------- */
export const schoolFacts = [
  {
    label: 'Institution Name',
    value: 'International Delhi Public School (IDPS)',
    valueSize: 'text-[16px]',
    sub: 'Cherukupalli Campus',
  },
  {
    label: 'CBSE Affiliation No.',
    value: '130739',
    valueSize: 'text-headline-sm',
    sub: 'Senior Secondary Level (10+2)',
  },
  {
    label: 'Inception Year',
    value: 'Founded in 2022',
    valueSize: 'text-headline-sm',
    sub: 'Modern, purpose-built school',
  },
  {
    label: 'Campus Location & PIN',
    value: 'Ponnappalli, Cherukupalli',
    valueSize: 'text-[16px]',
    sub: 'Bapatla District, Andhra Pradesh – 522259',
  },
];

/* ------------------- Campus showcase: carousel slides -------------- */
export const carouselSlides = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxCkrNF8pU7cGKrch2UibrMoe_jm-61ihlSow7G1vEL6D9YUM5muv01HQnKoW3LZBUHw81F8-kgNwyiqEInoBmWpZvm32cfYgDnhbFJ1VWuAIZl5vAHpTo8-3sSH1oyy7FIVsZRcQIGa_oWw3E-DUXjzdkexjdUU7TNIPIbIWOPkuEtg_xDke_AKSeauNZSB0rmI7x7gRE9DTAnJgIEIwPfs7ZbbKcNzP_xo_bH-rx-WhbKW1h1VLsObuKyTB79ZTuTb0',
    alt: 'Cherukupalli Sports Arena and Main Academic Quad',
    icon: 'stadium',
    title: 'Main Academic Quad & Sports Arena',
    tag: 'Adhi Shankaraa Scholastics',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdsohbn46ShIOgsAYAqngH4tc7DKgn-qocXOuSUMmLbB3dQP0W78DOtpHUtS7AKisOEotOQQcQcUJ7QhxVMVIHP6GNi5wMbWfL1VzD3gdc6k0-vIo4uADbwQVNJ2AcqWwOt6MMWPsX3lXL6uyFZcr0H7KtpaLPlOxKvTXXu7AlBBYC74FFl2V9zz0OdRJy6-Hdqzjw_Cb3G6Tj4QdFULflu-LAxL1kS3WXldDcaFPpRl9k_BtjTo70EPKbYeI2QScE-4Y',
    alt: 'Aerial view of courts and sports complex',
    icon: 'sports_basketball',
    title: 'Multi-Sport Courts & Play Area',
    tag: 'All-Weather Courts',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoevGzngE_dyQWL4IhTwZ7mtJWaxXr9SNcHeLpe7jChtIH8d_3CqJs2UyxOmtNaTpb_Ey2Ier7ZZG_5Pti_z7IN182mkg_kj6ZuVe9MpMhdA1XEdgMy20sxvvC2e9ph3arQtA_XsEGHHCJnp_oy8Wd462OB85Yjk6yhuOAlLO18UNgd4kUNKwvZIR9pyqE24DuAd9IQS1cKQGZZbF8W8Wl0MVxUP-ISHhe6PEY1CF4TTj9b8xJQIYffPrKpCg8rloXOQY',
    alt: 'Athletic running track and school grounds',
    icon: 'directions_run',
    title: 'Athletic Running Track & Grounds',
    tag: 'Field & Athletics',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLh1p8fiCYPjx_4DODRn22QH63FrosrpisAqaJD72bC5W0YTAKy4M9wQSp6ZRQJkjykp5LI8VkkSSIbvqzCos6hs0XD9EYYh5zY4K9tE4ylzen-qYVdrKkCyHpnvPlKmIE4AKJ3aHgz6BsZWO4H_8QAvnRLLq7_1VwVJ4lschAD2PNrtpnaR1tRpUgOw743diaD0H6eUKhGijmXbVrYg4lGdZ07HNZH4vylYT1DbEEB8h3_aWw5Ne2BrRAXsusYdon6YQ',
    alt: 'Campus infirmary / health and medical room',
    icon: 'medical_services',
    title: 'Campus Infirmary & Medical Care',
    tag: 'Health & Wellness',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHrO48HTOEq8UxBeQi808XUjoYSV4eTkfbxl8ie95yyWYOsy22734meztuvLZE1XfCV3Ujb8kVlrlYUqlwLpiD3t1V2wehECrougrI_011t3Q4pecvWrkvpy_J9VOcaTmVWMUbYAMJHJaamrwY0IyIrT4qQAInCjMn706sBfMgrxBF2wYDGFB43ave8UpVyIndYL1MmFmrk6w4UCP7xj26fKPRlIjQKdIzIuRqtSz91PmwYBFK-1OkX1vyRBZoST--1lc',
    alt: "Children's Day celebration backdrop and stage",
    icon: 'celebration',
    title: 'Annual Cultural Festivities',
    tag: "Children's Day Gala",
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3TY0U4ZFfzeYqB3ugZrzXw7Wo8OL1ccyTJjfFaJe_oe92tSCN_AzZrx0biqZ6Y6Ku7Q5cQ2w8vGaBrKCSSU-WS5uYV0ThdbGD0nIBRMFe76YKrCFZUs3Nid3QhrHbjWAfD1clp0KhC_lBg1Yu_ltCM7kYFC4sJzumHhqaIzxJzh-JhE-6dZ1qMWCNe2rfRwHwuheQmSTOIFzSeHRngO7W_tPp-jpqYhnH4_Lmh0vPF1DpLTc542e421EpWzDUqnhbn_A',
    alt: 'School sports championship and trophy winners celebration',
    icon: 'emoji_events',
    title: 'Championship Accolades & Trophies',
    tag: 'Student Laurels',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYs_748_Ci87B-14ii5v64CDNvvLbx6M5tkJaie7WLmd5LC7DGXcKUfJOmJVWdXBLJ16QJ3YuNUl2E-frGOPB6fvxkTFAe_uzNisIhZLdLg1CbnHvzacf5tRY4SpbsKa1eDpnJI2zPlUuddVOywUOFXT-zS1Hjp1_azGPMKmyy-QnLe43g-RAemF8xNNU_5vHIV5PRGwm-qgkci0i-5zIjaLi0J_-DX6BMXto0Ft_oiUkpl2I3UcpEAM1eGHOWpNzBIVQ',
    alt: 'Cultural dance and performing arts celebration',
    icon: 'theater_comedy',
    title: 'Performing Arts & Cultural Celebration',
    tag: 'Classical Heritage',
  },
];
