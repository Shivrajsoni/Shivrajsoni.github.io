export type IconNameType = 'pull-request' | 'video' | 'github';

interface ILink {
  name: string;
  href: string;
  icon?: IconNameType;
  iconClass?: string;
  hidden?: true;
}


export const links: Array<ILink> = [
  {
    name: 'Podcast with Harkirat Singh after getting into us based tech startup',
    href: 'https://youtu.be/y5Ewu8wYgqM?si=7uZiqrpsoyeIft30',
    icon: 'video',
    iconClass: 'text-black dark:text-white',
  },
  {
    name: 'Mannu Aurora & Harkirat appreciating me for my work',
    href: 'https://x.com/_callmeXavier_',
    hidden: true,
  },
  {
    name: 'created Excalidraw by scratch',
    href: 'https://github.com/Shivrajsoni/excalidraw',
    icon: 'pull-request',
  },
  {
    name: 'created own nginx server ',
    href: 'https://github.com/Shivrajsoni/nginx-reverse-proxy',
    icon: 'pull-request',
  },
  {
    name: 'Added previously build portfolio',
    href: 'https://portfolio-kywx-9ulfxae3c-shivrajsonis-projects.vercel.app',
    icon: 'pull-request',
  },
];


interface WorkExperience {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
}

export const experiences: WorkExperience[] = [
  {
    startDate: 'October 2023',
    endDate: 'Present',
    company: 'Panjab University',
    position: 'Intern',
  },
  {
    startDate: 'April 2024',
    endDate: 'October 2025',
    company: 'Panjab University EDC',
    position: 'tech team ',
  },
  {
    startDate: 'Feb 2024',
    endDate: 'April 2024',
    company: 'Gambaba',
    position: 'Bla la la',
  },
];
