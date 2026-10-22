// GitHub Pages project-site base. Must stay in sync with `base` in astro.config.mjs.
// `import.meta.env.BASE_URL` includes a trailing slash, so strip it here.
export const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const site = {
  name: 'Optsam Eye Care and Optical Workshop Store',
  shortName: 'Optsam',
  tagline: 'Clear vision. Better living.',
  description:
    'Primary eye care and an optical workshop in Mbagala, Dar es Salaam. Eye examinations, prescription spectacles, contact lenses and referrals, founded by Optometrist J.M. Samwel.',
  phoneDisplay: '+255 755 477 225',
  phoneHref: 'tel:+255755477225',
  whatsappHref: 'https://wa.me/255755477225',
  email: 'optsamtz@gmail.com',
  emailHref: 'mailto:optsamtz@gmail.com',
  address: {
    street: 'Mianzini Street',
    area: 'Mbagala',
    city: 'Dar es Salaam',
    country: 'Tanzania',
    display: 'Mianzini Street, Mbagala, Dar es Salaam, Tanzania',
  },
  directionsHref:
    'https://www.google.com/maps/search/?api=1&query=Mianzini%20Street%2C%20Mbagala%2C%20Dar%20es%20Salaam%2C%20Tanzania',
  founded: 2017,
  businessIdentity: 2019,
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/optsam/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UC0IVKzUwwL8PBH_Df7-uiDQ' },
    { label: 'Blog', href: 'https://optsam.blogspot.com/' },
  ],
  sourceProfile: 'https://www.blogger.com/profile/11050891577867619885',
  availabilityNote:
    'Opening hours are not published online. Please call or email before travelling to confirm current availability and appointment times.',
  whatsappNote:
    'WhatsApp uses the mobile number Optsam publishes. If the number is not enabled for WhatsApp, please call or email instead.',
  emailNote:
    'Email address as printed on Optsam’s published service flyer. Please confirm it is monitored before relying on it for urgent matters.',
} as const;

export const nav = [
  { label: 'Home', href: `${base}/` },
  { label: 'About', href: `${base}/about` },
  { label: 'Services', href: `${base}/services` },
  { label: 'Eyewear', href: `${base}/eyewear` },
  { label: 'Our work', href: `${base}/work` },
  { label: 'Blog', href: `${base}/blog` },
  { label: 'Contact', href: `${base}/contact` },
] as const;

export const serviceRows = [
  {
    number: '01',
    title: 'Eye examinations',
    href: `${base}/services#examinations`,
    text: 'Vision and eyesight assessment with an optometrist, with a clear explanation of what the results mean and what to do next.',
  },
  {
    number: '02',
    title: 'Prescription spectacles',
    href: `${base}/services#spectacles`,
    text: 'Corrective lenses prescribed and dispensed for your eyes, with frames selected and measured for comfort.',
  },
  {
    number: '03',
    title: 'Optical workshop',
    href: `${base}/eyewear`,
    text: 'A workshop for making and fitting spectacles — the practical side of turning a prescription into a pair you can wear.',
  },
  {
    number: '04',
    title: 'Contact lenses',
    href: `${base}/services#contact-lenses`,
    text: 'Contact-lens fitting and supply, including the lens types Optsam lists as available.',
  },
  {
    number: '05',
    title: 'Referral & eye health',
    href: `${base}/services#referral`,
    text: 'When a condition needs specialist care, Optsam refers patients to an ophthalmologist rather than stretching the limits of primary eye care.',
  },
] as const;
