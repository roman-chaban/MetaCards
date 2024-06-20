import { type FC, ReactNode, CSSProperties } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit';
  className: string;
  style?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  type,
  style,
}) => {
  return (
    <button type={type} style={style} className={className}>
      {children}
    </button>
  );
};
