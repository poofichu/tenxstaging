import { getPermalink, getBlogPermalink, } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Fund Operations',
      href: getPermalink('/fund-operations'),
    },
    {
      text: 'Founders Stories',
      href: getBlogPermalink(),
    },
    {
      text: 'Ten X Playbook',
    href: getPermalink('/ten-x-playbook'),
    },
  ],
};

const navData = [
  {
    name: 'Fund Operations',
    href: getPermalink('/fund-operations'),
  },
  {
    name: 'Founders Stories',
    href: getBlogPermalink(),
  },
  {
    name: 'Ten X Playbook',
    href: getPermalink('/ten-x-playbook'),
  },
];

export default navData;
