import { store } from '@/store';
import { SVGProps } from 'react';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';

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

export interface IGetEventsOut {
  allEvents: {
    edges: {
      node: IEvent;
    }[];
  };
}

export interface IEvent {
  date: string;
  description: string;
  id: string;
  isArchive: boolean;
  latitude: string;
  longtitude: string;
  rating: number;
  title: string;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
