import React, { ChangeEvent, FC } from 'react';

interface TextAreaProps {
  settings: {
    name: string;
    placeholder: string;
    value: string;
    id: string;
    className: string;
    setValue: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  };
}

export const TextArea: FC<TextAreaProps> = ({ settings }) => {
  return (
    <textarea
      className={settings.className}
      name={settings.name}
      placeholder={settings.placeholder}
      id={settings.id}
      value={settings.value}
      onChange={settings.setValue}
    ></textarea>
  );
};
