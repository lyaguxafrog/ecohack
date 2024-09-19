import { Avatar } from '@nextui-org/avatar';
import { Card, CardBody, CardHeader } from '@nextui-org/card';

export default function UserParty() {
  const data = [
    {
      id: '1',
      name: 'John',
    },
    {
      id: '2',
      name: 'John',
    },
    {
      id: '3',
      name: 'John',
    },
    {
      id: '4',
      name: 'John Doe',
    },
  ];

  return (
    <Card className="w-1/4">
      <CardHeader className="-mb-5 flex flex-col">
        <h1>
          Ваша <span className="text-green-500">Эко Команда</span>
        </h1>
        <h1>Название эко команды</h1>
      </CardHeader>
      <CardBody>
        {data.map((item) => (
          <ul key={item.id}>
            <li className="flex items-center gap-2 mt-2">
              <Avatar size="sm" />
              <p>{item.name}</p>
            </li>
          </ul>
        ))}
      </CardBody>
    </Card>
  );
}
