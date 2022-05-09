import { FC } from 'react'
import { useForm } from "react-hook-form"

import { defaultFilters, NookpediaFilters, useAppContext } from '../utils/appContext'

export const NavBar: FC = () => {
  const { register, handleSubmit, reset } = useForm<NookpediaFilters>()
  const { filterBy } = useAppContext()

  const onSubmit = (formData: NookpediaFilters) => {
    filterBy(formData)
  }
  // reset form data + reset AppContext filters
  const onReset = () => {
    reset()
    filterBy(defaultFilters)
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
          <input className='round-button round-button--no-border'
                 type='button'
                 value='Borrar'
                 onClick={onReset}
          />
      </form>
    </header>
  )
}
