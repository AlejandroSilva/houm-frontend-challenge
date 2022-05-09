import { FC } from 'react'
import cn from 'classnames'

interface VillagerCardProps {
  classname?: string
  name: string
  imageUrl: string
}

export const VillagerCard: FC<VillagerCardProps> = ({ classname, name, imageUrl }) => (
  <div className={cn('villager-card', classname)}>
    <div className='villager-card__content'>
      {name}
      <img className='villager-card__image' src={imageUrl} alt=''/>
    </div>
  </div>
)
