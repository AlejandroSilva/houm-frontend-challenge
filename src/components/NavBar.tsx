import { FC } from 'react'
import { useForm } from "react-hook-form"

import { defaultFilters, NookpediaFilters, useAppContext } from '../utils/appContext'
import { Chip } from './Chip'
import { SPECIES_COLOR } from '../utils/constants'

export const NavBar: FC = () => {
  const { filters, filterBy, removeSpecies } = useAppContext()
  const { register, handleSubmit, reset } = useForm<NookpediaFilters>({
    defaultValues: filters
  })
  const onSubmit = (formData: NookpediaFilters) => {
    filterBy(formData)
  }
  // reset form data + reset AppContext filters
  const onReset = () => {
    reset()
    filterBy(defaultFilters)
  }
  const species = filters.species

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
              <Chip color={SPECIES_COLOR[species]}
                    onClick={removeSpecies}
              >
                {species}
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
