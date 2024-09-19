import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { User } from '@nextui-org/user';

interface IReviewsCard {
  firstName: string;
  lastName: string;
  rating: number;
  comment: string;
  date: string;
}

export default function ReviewsCard({ comment, date, firstName, lastName, rating }: IReviewsCard) {
  const fullName = `${firstName} ${lastName}`;

  return (
    <Card className="max-w-[287px] max-h-[250px] mt-5">
      <CardHeader className="justify-between">
        <div className="flex gap-5 items-center ">
          <User
            avatarProps={{
              src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
            }}
            description="Product Designer"
            name={fullName}
          />
          <p>+++++</p>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 max-h-[200px]">
        <p>{comment}</p>
        <span className="pt-2">#FrontendWithZoey</span>
      </CardBody>
      <CardFooter className="gap-5 text-small text-default-300">
        <p>{date}</p>
      </CardFooter>
    </Card>
  );
}
