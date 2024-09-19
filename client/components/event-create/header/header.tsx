'use client';
import { Image } from '@nextui-org/image';
import { Input } from '@nextui-org/input';
import { useState } from 'react';

interface File {
  name: string;
  type: string;
}

export default function EventCreateHeader() {
  const [selectedFiles, setSelectedFiles] = useState<Blob[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files!) as Blob[];

    setSelectedFiles(files);
  };

  return (
    <div>
      <div className="w-full h-[300px] bg-gray-200 rounded-lg">
        {selectedFiles.map((file, index) => (
          <Image
            key={index}
            alt={`Изображение ${index + 1}`}
            className="max-h-[300px] w-[1000px] object-cover"
            src={URL.createObjectURL(file)}
          />
        ))}
      </div>
      <Input accept="image/*" className="mt-5" type="file" onChange={handleFileChange} />
      <div className="mt-5">
        <Input label="Название события" placeholder="Введите название события" />
      </div>
    </div>
  );
}
