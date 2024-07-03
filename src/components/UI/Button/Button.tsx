import { type FC, ReactNode, CSSProperties } from 'react'

interface ButtonProps {
  children: ReactNode
  type: 'button' | 'submit'
  className: string
  title?: string
  style?: CSSProperties
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  type,
  style,
  title,
  onClick
}) => {
  return (
    <button
      title={title}
      onClick={onClick}
      type={type}
      style={style}
      className={className}
    >
      {children}
    </button>
  )
}
