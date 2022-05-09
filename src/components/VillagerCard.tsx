import { FC } from 'react'
import cn from 'classnames'

interface VillagerCardProps {
  classname?: string
  name: string
  imageUrl: string
  specie: string
  gender: string
  personality: string
  quote?: string
}

export const VillagerCard: FC<VillagerCardProps> = (props) => {
  const { classname, name, imageUrl, specie, gender, personality, quote } = props
  return (
    <div className={cn('villager-card', classname)}>
      <div className='villager-card__content'>
        <div className='villager-card__square-wrapper'>
          <div className='villager-card__square'>
            <img className='villager-card__image' src={imageUrl} alt=''/>
          </div>
        </div>
        <div className='villager-card__footer'>
          <h3 className='villager-card__name'>
            {name}
          </h3>
          <div>
            {specie} | {gender}
          </div>
          <div>
            {personality}
          </div>
          {quote && (
            <>
              <span className='villager-card__separator' />
              <div className='villager-card__quote'>{quote}</div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
