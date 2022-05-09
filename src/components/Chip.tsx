import { FC } from 'react'
import cn from 'classnames'

interface ChipProps {
  children: any
  classname?: string
  onClick?: () => void
  color?: string
}

export const Chip: FC<ChipProps> = ({ children, classname, onClick, color }) => (
  <div className={cn('chip', classname, { 'chip--clickeable': !!onClick })}
       data-color={color}
       // @ts-ignore override the default css variable when a custom color is received
       style={{ '--chip-color': color }}
       onClick={onClick}
  >
    {children}
  </div>
)