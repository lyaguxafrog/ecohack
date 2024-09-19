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
        {lvl === 1 && <Exhibition1Icon className="scale-50" />}
        {lvl === 2 && <Exhibition2Icon className="scale-50" />}
        {lvl === 3 && <Exhibition3Icon className="scale-50" />}
        <Tooltip
          content={
            <div>
              <h1 className="text-xl font-bold">Экспонативные выставки</h1>
              <h2 className="font-semibold text-medium">
                Ваш уровень: <span className="text-blue-500">{lvl}</span>
              </h2>
              <p className="text-sm">
                Экспонативные выставки предоставляют гостям возможность увидеть мир продукции, которая находится в
                постоянном движении.
              </p>
              <p>
                Продукция из экспонативных выставок может быть изготовлена из любых материалов, таких как стекло,
                пластик, дерево, бумага, кожа, керамика.
              </p>
            </div>
          }
          placement="bottom"
        >
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
        {lvl === 1 && <Concert1Icon className="scale-50" />}
        {lvl === 2 && <Concert2Icon className="scale-50" />}
        {lvl === 3 && <Concert3Icon className="scale-50" />}
        <Tooltip
          content={
            <div>
              <h1 className="text-xl font-bold">Концерты</h1>
              <h2 className="font-semibold text-medium">
                Ваш уровень: <span className="text-red-500">{lvl}</span>
              </h2>
              <p className="text-sm">
                Концерты представляют собой мероприятия, в которых люди из разных групп или организаций проводят
                музыкальные советы и концерты.
              </p>
            </div>
          }
          placement="bottom"
        >
          <CircularProgress
            classNames={{
              svg: 'w-20 h-20 drop-shadow-md',
              indicator: 'stroke-red-500',
              track: 'stroke-red-200',
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
        {lvl === 1 && <Competitions1Icon className="scale-50" />}
        {lvl === 2 && <Competitions2Icon className="scale-50" />}
        {lvl === 3 && <Competitions3Icon className="scale-50" />}
        <Tooltip
          content={
            <div>
              <h1 className="text-xl font-bold">Конкурсы</h1>
              <h2 className="font-semibold text-medium">
                Ваш уровень: <span className="text-purple-500">{lvl}</span>
              </h2>
              <p className="text-sm">
                Конкурсы представляют собой мероприятия, в которых участники соревнуются за призы или награды.
              </p>
            </div>
          }
          placement="bottom"
        >
          <CircularProgress
            classNames={{
              svg: 'w-20 h-20 drop-shadow-md',
              indicator: 'stroke-purple-500',
              track: 'stroke-purple-200',
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
        {lvl === 1 && <Conferences1Icon className="scale-50" />}
        {lvl === 2 && <Conferences2Icon className="scale-50" />}
        {lvl === 3 && <Conferences3Icon className="scale-50" />}
        <Tooltip
          content={
            <div>
              <h1 className="text-xl font-bold">Конференции</h1>
              <h2 className="font-semibold text-medium">
                Ваш уровень: <span className="text-pink-500">{lvl}</span>
              </h2>
              <p className="text-sm">
                Конференции представляют собой мероприятия, в которых люди обсуждают новые технологии, техники, принципы
                и практики в области конструкторского дела.
              </p>
            </div>
          }
          placement="bottom"
        >
          <CircularProgress
            classNames={{
              svg: 'w-20 h-20 drop-shadow-md',
              indicator: 'stroke-pink-500',
              track: 'stroke-pink-200',
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
        {lvl === 1 && <MasterClasses1Icon className="scale-50" />}
        {lvl === 2 && <MasterClasses2Icon className="scale-50" />}
        {lvl === 3 && <MasterClasses3Icon className="scale-50" />}
        <Tooltip
          content={
            <div>
              <h1 className="text-xl font-bold">Мастер-классы</h1>
              <h2 className="font-semibold text-medium">
                Ваш уровень: <span className="text-yellow-500">{lvl}</span>
              </h2>
              <p className="text-sm">
                Мастер-классы представляют собой тренинговые занятия, в которых преподаватель помогает участникам
                изучать новые технологии, техники, принципы и практики в области конструкторского дела.
              </p>
            </div>
          }
          placement="bottom"
        >
          <CircularProgress
            classNames={{
              svg: 'w-20 h-20 drop-shadow-md',
              indicator: 'stroke-yellow-500',
              track: 'stroke-yellow-200',
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
      {lvl === 1 && <Party1Icon className="scale-50" />}
      {lvl === 2 && <Party2Icon className="scale-50" />}
      {lvl === 3 && <Party3Icon className="scale-50" />}
      {lvl === 4 && <Party4Icon className="scale-50" />}
      <Tooltip
        content={
          <div>
            <h1 className="text-xl font-bold">Команда</h1>
            <h2 className="font-semibold text-medium">
              Ваш уровень: <span className="text-green-500">{lvl}</span>
            </h2>
            <p>Спасибо что зазываете с собой друзей и оберегаете нашу планету.</p>
          </div>
        }
        placement="bottom"
      >
        <CircularProgress
          classNames={{
            svg: 'w-20 h-20 drop-shadow-md',
            indicator: 'stroke-green-500',
            track: 'stroke-green-200',
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
