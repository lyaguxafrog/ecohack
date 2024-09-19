import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ICard {
  id: string;
  img: string;
  title: string;
}

// SignIn
export type SignInInput = {
  phone: string;
};

export type SignInOutput = {
  phoneToCall: string;
};
