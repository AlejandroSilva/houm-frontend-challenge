import { FC } from 'react'
import { useForm } from "react-hook-form"

import { SPECIES_COLOR } from '../utils/constants'
import { useAppContext } from '../utils/appContext'
import { Chip } from './Chip'

type FormValues = {
  name: string
}

export const NavBar: FC = () => {
  const { filters, filterByName, removeSpecies, resetFilters } = useAppContext()
  const species = filters.species

  const { register, handleSubmit, reset: resetForm } = useForm<FormValues>({
    defaultValues: filters
  })
  const onSubmit = (formData: FormValues) => {
    filterByName(formData.name)
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

          <input className='round-button round-button--no-border'
                 type='button'
                 value='Borrar'
                 onClick={onReset}
          />
      </form>
    </header>
  )
}
