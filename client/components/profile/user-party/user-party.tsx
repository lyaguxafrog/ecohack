import { Avatar } from '@nextui-org/avatar';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Snippet } from '@nextui-org/snippet';

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
    {
      id: '5',
      name: 'Jane Doe',
    },
    {
      id: '6',
      name: 'Tom Doe',
    },
    {
      id: '7',
      name: 'Alice Doe',
    },
    {
      id: '8',
      name: 'Bob Doe',
    },
    {
      id: '9',
      name: 'Emily Doe',
    },
  ];

  return (
    <Card className="w-1/4  max-h-[400px]">
      <CardHeader className="flex flex-col">
        <h1 className="text-medium">
          Ваша <span className="text-green-500 font-semibold">Эко Команда</span>
        </h1>
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
      <CardFooter className="py-5">
        <Snippet size="sm" symbol="" variant="bordered">
          https://ecopass.makridenko.ru/api/
        </Snippet>
      </CardFooter>
    </Card>
  );
}
