export interface ButtonProps {
  label: string;
  iconPrimary: string;
  iconSecondary: string;
}

export type ChooseButtons = ButtonProps[];

export const chooseButtons: ChooseButtons = [
  {
    label: 'Metamask',
    iconPrimary: '/images/choose/Metamask.svg',
    iconSecondary: '/images/choose/next-icon.svg'
  },
  {
    label: 'Trust Wallet',
    iconPrimary: '/images/choose/Trust.svg',
    iconSecondary: '/images/choose/next-icon.svg'
  },
  {
    label: 'Enter ethereum address',
    iconPrimary: '/images/choose/Link.svg',
    iconSecondary: '/images/choose/next-icon.svg'
  }
];
