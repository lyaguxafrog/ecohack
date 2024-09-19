import { Card, CardBody, CardHeader } from '@nextui-org/card';

import TreeComponent from './tree-component/tree-component';

export default function UserRewardsCard() {
  return (
    <Card className="p-5 w-1/2">
      <CardHeader className="flex items-center gap-5">
        <h1 className="text-2xl font-bold">Твои награды</h1>
      </CardHeader>
      <CardBody className="space-y-6">
        <div className="flex gap-1 items-end m-auto">
          <TreeComponent lvl={3} lvlValue={40} variant="exhibition" />
          <TreeComponent lvl={3} lvlValue={2} variant="concert" />
          <TreeComponent lvl={3} lvlValue={12} variant="competitions" />
          <TreeComponent lvl={3} lvlValue={10} variant="conferences" />
          <TreeComponent lvl={3} lvlValue={40} variant="masterClasses" />
        </div>
        <TreeComponent lvl={4} lvlValue={40} />
      </CardBody>
    </Card>
  );
}
