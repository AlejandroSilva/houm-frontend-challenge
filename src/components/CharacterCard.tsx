import { FC } from 'react'
import cn from 'classnames'

import { Chip } from './Chip'
import { GENDER_COLOR, SPECIES_COLOR } from '../utils/constants'
import { useAppContext } from '../utils/appContext'

interface VillagerCardProps {
  classname?: string
  name: string
  imageUrl: string
  specie: string
  type: string
  gender: string
  status: string
  location: string
}

export const CharacterCard: FC<VillagerCardProps> = (props) => {
  const { classname, name, imageUrl, specie, type, gender, status, location} = props
  const { filterBySpecies, filterByPersonality } = useAppContext()

  return (
    <div className={cn('character-card', classname)}>
      <div className='character-card__content'>
        <div className='character-card__square-wrapper'>
          <div className='character-card__square'>
            <img className='character-card__image' src={imageUrl} alt=''/>
          </div>
        </div>
        <div className='character-card__footer'>
          <h3 className='character-card__name'>
            {name}
          </h3>
          <div>
            <strong>{status}</strong>
          </div>
          <div>
            Last known location: <strong>{location}</strong>
          </div>
          <div className='character-card__separator' />
          <div>
            <Chip color={SPECIES_COLOR[specie]} onClick={filterBySpecies.bind(null, specie)}>
              {specie} {type && `(${type})`}
            </Chip>
            <Chip color={GENDER_COLOR[gender]}>{gender}</Chip>
          </div>
        </div>
      </div>
    </div>
  )
}
