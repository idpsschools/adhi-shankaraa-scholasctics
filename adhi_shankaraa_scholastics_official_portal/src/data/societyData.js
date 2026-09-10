/**
 * Content + asset references for the Adhi Shankaraa Scholastics site.
 * Images are bundled from `src/assets/images/` by Vite (hashed + optimised
 * at build time).
 */

/* ------------------------------- Images -------------------------------- */
// Photography is generic, India-based (students in uniform; no single
// institution identifiable).
//  - heroLibrary       : students with textbooks in a school library — used in the hero
//  - studentsClassroom : a teacher and students in a modern classroom — used in Products & Services
import heroLibrary from '../assets/images/studentsLibrary.jpg';
import studentsClassroom from '../assets/images/studentsClassroom.jpg';
import societySeal from '../assets/images/societySeal.png'

export const IMG = {
  // The company seal doubles as the brand mark across the site.
  societySeal,
  heroLibrary,
  studentsClassroom,
};

/* ------------------------------ Navigation ---------------------------- */
export const navLinks = [
  { label: 'About Us', href: '#about', path: 'about-us' },
  { label: 'Products & Services', href: '#school', path: 'products-services' },
  { label: 'Contact', href: '#contact', path: 'contact' },
];

/* ---------------------- Hero: quick highlight ribbon ----------------- */
export const heroStats = [
  {
    icon: 'store',
    label: 'Business Type',
    value: 'Partnership Firm',
    note: 'Based in Cherukupalli, Bapatla Dist.',
  },
  {
    icon: 'inventory_2',
    label: 'What We Supply',
    value: 'Books · Uniforms · Stationery',
    note: 'And wider campus essentials',
  },
  {
    icon: 'school',
    label: 'Who We Serve',
    value: 'Schools & Institutions',
    note: 'Multiple institutions, not one',
  },
  {
    icon: 'local_shipping',
    label: 'How We Work',
    value: 'Bulk & Recurring Orders',
    note: 'Planned around the academic year',
    noteAccent: true,
  },
];

/* ----------------------- About: what we do ------------------------- */
export const foundingObjects = [
  {
    icon: 'menu_book',
    number: 'What We Do 01',
    title: 'School books and educational materials',
    description:
      'Textbooks, workbooks, reference sets and classroom resources, sourced from established publishers and supplied as complete grade-wise sets for the school year.',
    tag: 'Publisher-sourced',
  },
  {
    icon: 'checkroom',
    number: 'What We Do 02',
    title: 'School uniforms and wear',
    description:
      'Uniforms, sportswear and seasonal clothing made to each institution’s specification, with sizing support across every grade and repeat orders through the year.',
    tag: 'Made to specification',
  },
  {
    icon: 'edit',
    number: 'What We Do 03',
    title: 'Stationery and academic essentials',
    description:
      'Notebooks, writing materials, art and craft supplies, examination stationery and everyday classroom consumables, available individually or as ready-made student kits.',
    tag: 'Individual or bulk',
  },
  {
    icon: 'inventory',
    number: 'What We Do 04',
    title: 'Institutional supply and support services',
    description:
      'Procurement coordination, bulk and recurring supply schedules, and delivery support that help school offices plan and budget around the academic calendar.',
    tag: 'Procurement & delivery',
  },
];

/* ---------------- Products & Services: capability facts ------------ */
export const schoolFacts = [
  {
    label: 'Core Supplies',
    value: 'Textbooks & Workbooks',
    valueSize: 'text-[16px]',
    sub: 'Publisher-sourced, grade-wise sets',
  },
  {
    label: 'Uniforms',
    value: 'Made to School Specification',
    valueSize: 'text-[16px]',
    sub: 'Sizing support for all grades',
  },
  {
    label: 'Stationery & Essentials',
    value: 'Classroom & Exam Materials',
    valueSize: 'text-[16px]',
    sub: 'Sold individually or as student kits',
  },
  {
    label: 'Institutional Services',
    value: 'Procurement & Delivery Support',
    valueSize: 'text-[16px]',
    sub: 'Recurring and seasonal supply schedules',
  },
];

/* ------------- Campus needs we supply: carousel slides ------------ */
export const carouselSlides = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxCkrNF8pU7cGKrch2UibrMoe_jm-61ihlSow7G1vEL6D9YUM5muv01HQnKoW3LZBUHw81F8-kgNwyiqEInoBmWpZvm32cfYgDnhbFJ1VWuAIZl5vAHpTo8-3sSH1oyy7FIVsZRcQIGa_oWw3E-DUXjzdkexjdUU7TNIPIbIWOPkuEtg_xDke_AKSeauNZSB0rmI7x7gRE9DTAnJgIEIwPfs7ZbbKcNzP_xo_bH-rx-WhbKW1h1VLsObuKyTB79ZTuTb0',
    alt: 'Academic block and quad of a school campus',
    icon: 'menu_book',
    title: 'Classrooms & Academic Blocks',
    tag: 'Books & Learning Materials',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdsohbn46ShIOgsAYAqngH4tc7DKgn-qocXOuSUMmLbB3dQP0W78DOtpHUtS7AKisOEotOQQcQcUJ7QhxVMVIHP6GNi5wMbWfL1VzD3gdc6k0-vIo4uADbwQVNJ2AcqWwOt6MMWPsX3lXL6uyFZcr0H7KtpaLPlOxKvTXXu7AlBBYC74FFl2V9zz0OdRJy6-Hdqzjw_Cb3G6Tj4QdFULflu-LAxL1kS3WXldDcaFPpRl9k_BtjTo70EPKbYeI2QScE-4Y',
    alt: 'Multi-sport courts at a school',
    icon: 'sports_basketball',
    title: 'Sports Courts & Play Areas',
    tag: 'Sports & PE Supplies',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoevGzngE_dyQWL4IhTwZ7mtJWaxXr9SNcHeLpe7jChtIH8d_3CqJs2UyxOmtNaTpb_Ey2Ier7ZZG_5Pti_z7IN182mkg_kj6ZuVe9MpMhdA1XEdgMy20sxvvC2e9ph3arQtA_XsEGHHCJnp_oy8Wd462OB85Yjk6yhuOAlLO18UNgd4kUNKwvZIR9pyqE24DuAd9IQS1cKQGZZbF8W8Wl0MVxUP-ISHhe6PEY1CF4TTj9b8xJQIYffPrKpCg8rloXOQY',
    alt: 'Athletic running track and school grounds',
    icon: 'directions_run',
    title: 'Athletics & Grounds',
    tag: 'Track & Field Kit',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLh1p8fiCYPjx_4DODRn22QH63FrosrpisAqaJD72bC5W0YTAKy4M9wQSp6ZRQJkjykp5LI8VkkSSIbvqzCos6hs0XD9EYYh5zY4K9tE4ylzen-qYVdrKkCyHpnvPlKmIE4AKJ3aHgz6BsZWO4H_8QAvnRLLq7_1VwVJ4lschAD2PNrtpnaR1tRpUgOw743diaD0H6eUKhGijmXbVrYg4lGdZ07HNZH4vylYT1DbEEB8h3_aWw5Ne2BrRAXsusYdon6YQ',
    alt: 'School health room',
    icon: 'medical_services',
    title: 'Health Rooms & First Aid',
    tag: 'Health-room Essentials',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHrO48HTOEq8UxBeQi808XUjoYSV4eTkfbxl8ie95yyWYOsy22734meztuvLZE1XfCV3Ujb8kVlrlYUqlwLpiD3t1V2wehECrougrI_011t3Q4pecvWrkvpy_J9VOcaTmVWMUbYAMJHJaamrwY0IyIrT4qQAInCjMn706sBfMgrxBF2wYDGFB43ave8UpVyIndYL1MmFmrk6w4UCP7xj26fKPRlIjQKdIzIuRqtSz91PmwYBFK-1OkX1vyRBZoST--1lc',
    alt: 'School event stage and backdrop',
    icon: 'celebration',
    title: 'School Events & Functions',
    tag: 'Event & Activity Materials',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3TY0U4ZFfzeYqB3ugZrzXw7Wo8OL1ccyTJjfFaJe_oe92tSCN_AzZrx0biqZ6Y6Ku7Q5cQ2w8vGaBrKCSSU-WS5uYV0ThdbGD0nIBRMFe76YKrCFZUs3Nid3QhrHbjWAfD1clp0KhC_lBg1Yu_ltCM7kYFC4sJzumHhqaIzxJzh-JhE-6dZ1qMWCNe2rfRwHwuheQmSTOIFzSeHRngO7W_tPp-jpqYhnH4_Lmh0vPF1DpLTc542e421EpWzDUqnhbn_A',
    alt: 'Awards and trophies on display at a school',
    icon: 'emoji_events',
    title: 'Awards & Recognition',
    tag: 'Trophies & Medals',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYs_748_Ci87B-14ii5v64CDNvvLbx6M5tkJaie7WLmd5LC7DGXcKUfJOmJVWdXBLJ16QJ3YuNUl2E-frGOPB6fvxkTFAe_uzNisIhZLdLg1CbnHvzacf5tRY4SpbsKa1eDpnJI2zPlUuddVOywUOFXT-zS1Hjp1_azGPMKmyy-QnLe43g-RAemF8xNNU_5vHIV5PRGwm-qgkci0i-5zIjaLi0J_-DX6BMXto0Ft_oiUkpl2I3UcpEAM1eGHOWpNzBIVQ',
    alt: 'Students in a cultural programme at school',
    icon: 'theater_comedy',
    title: 'Cultural Programmes',
    tag: 'Costume & Craft Support',
  },
];
