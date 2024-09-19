import { store } from '@/store';
import { SVGProps } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

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

//register
export type RegisterInput = {
  phone: string;
  firstName: string;
  lastName: string;
};

export type RegisterOutput = {
  registerUser: {
    phoneToCall: string;
  };
};

export type checkAuthInput = {
  phone: string;
};

export type checkAuthOutput = {
  token: string;
  profile: {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: string;
  };
};
