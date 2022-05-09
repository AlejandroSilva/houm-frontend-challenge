import { FC } from 'react'

interface ChipProps {
  children: any
  color?: string
}

export const Chip: FC<ChipProps> = ({ children, color }) => (
  <div className='chip'
       data-color={color}
       // @ts-ignore override the default css variable when a custom color is received
       style={{ '--chip-color': color }}
  >
    {children}
  </div>
)