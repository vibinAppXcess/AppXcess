// Application constants

export const APP_NAME = 'AppXcess';
export const APP_DESCRIPTION = 'Your trusted partner for innovative technology solutions';

export const NAVIGATION_ITEMS = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Cloud Solutions', href: '/services/cloud' },
      { label: 'DevOps', href: '/services/devops' },
      { label: 'Backend Development', href: '/services/backend' },
      { label: 'MVP Development', href: '/services/mvp' },
      { label: 'Web3 Solutions', href: '/services/web3' },
      { label: 'Extended Reality', href: '/services/xr' },
    ]
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'FinTech', href: '/industries/fintech' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Media', href: '/industries/media' },
      { label: 'Logistics', href: '/industries/logistics' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/appxcess', icon: 'linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com/appxcess', icon: 'twitter' },
  { platform: 'Facebook', url: 'https://facebook.com/appxcess', icon: 'facebook' },
  { platform: 'Instagram', url: 'https://instagram.com/appxcess', icon: 'instagram' },
];

export const CONTACT_INFO = {
  email: 'info@appxcess.com',
  phone: '+1 (555) 123-4567',
  address: '123 Innovation Drive, Tech City, TC 12345',
  workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
};

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  services: [
    { label: 'Cloud Solutions', href: '/services/cloud' },
    { label: 'DevOps', href: '/services/devops' },
    { label: 'Backend Development', href: '/services/backend' },
    { label: 'MVP Development', href: '/services/mvp' },
  ],
  industries: [
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'FinTech', href: '/industries/fintech' },
    { label: 'Retail', href: '/industries/retail' },
    { label: 'Manufacturing', href: '/industries/manufacturing' },
  ],
};
