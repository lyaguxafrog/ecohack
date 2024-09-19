import { Button } from '@nextui-org/button';
import { DatePicker } from '@nextui-org/date-picker';
import { Input } from '@nextui-org/input';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';

interface ICreateOrganizeProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function CreateOrganize({ isOpen, onOpenChange }: ICreateOrganizeProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Создание Организатора</ModalHeader>
            <ModalBody className="flex gap-5 w-full">
              <div className="flex gap-2 w-full">
                <Input label="Имя" placeholder="Иван" size="sm" />
                <Input label="Фамилия" placeholder="Иванов" size="sm" />
              </div>
              <Input label="Номер телефона" placeholder="+79991112233" size="sm" />
              <Input label="Email" placeholder="JohnDoe@mail.ru" size="sm" />
              <div className="flex gap-2 w-full">
                <Input className="w-1/3" label="Серия" placeholder="4040" size="sm" />
                <Input label="Номер Паспорта" placeholder="777666" size="sm" />
              </div>
              <div className="w-full max-w-xl flex flex-row gap-4">
                <DatePicker showMonthAndYearPickers label="Дата Рождения" />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Отмена
              </Button>
              <Button color="primary" onPress={onClose}>
                Создать
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
