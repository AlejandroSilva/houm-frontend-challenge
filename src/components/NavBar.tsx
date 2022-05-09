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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='container'>
          <img className='navbar__logo' src='https://houm.com/static/brandImage/houmLogo.svg' alt='Houm logo'/>
          <input {...register('name')} />
          <input type='submit' value='Buscar' />
          <input type='button' value='X' onClick={onReset}/>
        </div>
      </form>
    </header>
  )
}
