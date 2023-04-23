import { getPermalink, getBlogPermalink, } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Fund Operations',
      href: getPermalink('/fund-operations'),
    },
    {
      text: 'Founders Stories',
      links: [
        {
          text: 'All stories',
          href: getBlogPermalink(),
        },
        {
          text: 'Tradeblock',
          href: getPermalink('/tradeblock'),
        },
        {
          text: 'Hey Days',
          href: getPermalink('/heydays'),
        },
        {
          text: 'Apex',
          href: getPermalink('/apex'),
        },
      ],
    },
    {
      text: 'Ten X Playbook',
      href: getPermalink('/ten-x-playbook'),
    },
  ],
};

export const footerData = {
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
