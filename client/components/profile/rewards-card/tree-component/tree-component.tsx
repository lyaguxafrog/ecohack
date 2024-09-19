import { CircularProgress } from '@nextui-org/progress';
import { Tooltip } from '@nextui-org/tooltip';

import {
  Competitions1Icon,
  Competitions2Icon,
  Competitions3Icon,
  Concert1Icon,
  Concert2Icon,
  Concert3Icon,
  Conferences1Icon,
  Conferences2Icon,
  Conferences3Icon,
  Exhibition1Icon,
  Exhibition2Icon,
  Exhibition3Icon,
  MasterClasses1Icon,
  MasterClasses2Icon,
  MasterClasses3Icon,
  Party1Icon,
  Party2Icon,
  Party3Icon,
  Party4Icon,
} from '@/components/icons';

interface ITreeComponent {
  variant?: 'exhibition' | 'concert' | 'competitions' | 'conferences' | 'masterClasses';
  lvl: number;
  lvlValue: number;
}

export default function TreeComponent({ lvl, lvlValue, variant }: ITreeComponent) {
  if (variant === 'exhibition') {
    return (
      <div className="flex flex-col items-center">
        {lvl === 1 && <Exhibition1Icon />}
        {lvl === 2 && <Exhibition2Icon />}
        {lvl === 3 && <Exhibition3Icon />}
        <Tooltip content="qwe" placement="bottom">
          <CircularProgress
            classNames={{
              svg: 'w-20 h-20 drop-shadow-md',
              indicator: 'stroke-blue-500',
              track: 'stroke-blue-200',
              value: 'text-xl text-black font-semibold cursor-pointer',
            }}
            showValueLabel={true}
            strokeWidth={4}
            value={lvlValue}
          />
        </Tooltip>
      </div>
    );
  }

  if (variant === 'concert') {
    return (
      <div className="flex flex-col items-center">
        {lvl === 1 && <Concert1Icon />}
        {lvl === 2 && <Concert2Icon />}
        {lvl === 3 && <Concert3Icon />}
        <Tooltip content="qwe" placement="bottom">
          <CircularProgress
            classNames={{
              svg: 'w-20 h-20 drop-shadow-md',
              indicator: 'stroke-blue-500',
              track: 'stroke-blue-200',
              value: 'text-xl text-black font-semibold cursor-pointer',
            }}
            showValueLabel={true}
            strokeWidth={4}
            value={lvlValue}
          />
        </Tooltip>
      </div>
    );
  }

  if (variant === 'competitions') {
    return (
      <div className="flex flex-col items-center">
        {lvl === 1 && <Competitions1Icon />}
        {lvl === 2 && <Competitions2Icon />}
        {lvl === 3 && <Competitions3Icon />}
        <Tooltip content="qwe" placement="bottom">
          <CircularProgress
            classNames={{
              svg: 'w-20 h-20 drop-shadow-md',
              indicator: 'stroke-blue-500',
              track: 'stroke-blue-200',
              value: 'text-xl text-black font-semibold cursor-pointer',
            }}
            showValueLabel={true}
            strokeWidth={4}
            value={lvlValue}
          />
        </Tooltip>
      </div>
    );
  }

  if (variant === 'conferences') {
    return (
      <div className="flex flex-col items-center">
        {lvl === 1 && <Conferences1Icon />}
        {lvl === 2 && <Conferences2Icon />}
        {lvl === 3 && <Conferences3Icon />}
        <Tooltip content="qwe" placement="bottom">
          <CircularProgress
            classNames={{
              svg: 'w-20 h-20 drop-shadow-md',
              indicator: 'stroke-blue-500',
              track: 'stroke-blue-200',
              value: 'text-xl text-black font-semibold cursor-pointer',
            }}
            showValueLabel={true}
            strokeWidth={4}
            value={1}
          />
        </Tooltip>
      </div>
    );
  }

  if (variant === 'masterClasses') {
    return (
      <div className="flex flex-col items-center">
        {lvl === 1 && <MasterClasses1Icon />}
        {lvl === 2 && <MasterClasses2Icon />}
        {lvl === 3 && <MasterClasses3Icon />}
        <Tooltip content="qwe" placement="bottom">
          <CircularProgress
            classNames={{
              svg: 'w-20 h-20 drop-shadow-md',
              indicator: 'stroke-blue-500',
              track: 'stroke-blue-200',
              value: 'text-xl text-black font-semibold cursor-pointer',
            }}
            showValueLabel={true}
            strokeWidth={4}
            value={1}
          />
        </Tooltip>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {lvl === 1 && <Party1Icon />}
      {lvl === 2 && <Party2Icon />}
      {lvl === 3 && <Party3Icon />}
      {lvl === 4 && <Party4Icon />}
      <Tooltip content="qwe" placement="bottom">
        <CircularProgress
          classNames={{
            svg: 'w-20 h-20 drop-shadow-md',
            indicator: 'stroke-blue-500',
            track: 'stroke-blue-200',
            value: 'text-xl text-black font-semibold cursor-pointer',
          }}
          showValueLabel={true}
          strokeWidth={4}
          value={1}
        />
      </Tooltip>
    </div>
  );
}
