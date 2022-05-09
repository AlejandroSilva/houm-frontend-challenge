import { FC } from 'react'
import { useForm } from "react-hook-form"

import { PERSONALITY_COLOR, SPECIES_COLOR } from '../utils/constants'
import { NookpediaFilters, useAppContext } from '../utils/appContext'
import { Chip } from './Chip'

export const NavBar: FC = () => {
  const { filters, filterBy, removeSpecies, removePersonality, resetFilters } = useAppContext()
  const species = filters.species
  const personality = filters.personality

  const { register, handleSubmit, reset: resetForm } = useForm<NookpediaFilters>({
    defaultValues: filters
  })
  const onSubmit = (formData: NookpediaFilters) => {
    filterBy(formData)
  }

  const onReset = () => {
    resetForm()
    resetFilters()
  }

  return (
    <header className='navbar'>
        <form className='navbar__form container'
              onSubmit={handleSubmit(onSubmit)}
        >
          <img className='navbar__logo' src='https://houm.com/static/brandImage/houmLogo.svg' alt='Houm logo'/>
          <input className='text-input'
                 {...register('name')}
                 placeholder='Buscar por nombre'
          />
          <input className='round-button round-button--primary'
                 type='submit'
                 value='Buscar'
          />
          {/* show the selected species */}
          {species && (
            <div>
              Especie:
              <Chip color={SPECIES_COLOR[species]} onClick={removeSpecies}>
                {species}
              </Chip>
            </div>
          )}
          {/* show the selected species */}
          {species && (
            <div>
              Personalidad:
              <Chip color={PERSONALITY_COLOR[personality]} onClick={removePersonality}>
                {personality}
              </Chip>
            </div>
          )}

          <input className='round-button round-button--no-border'
                 type='button'
                 value='Borrar'
                 onClick={onReset}
          />
      </form>
    </header>
  )
}
