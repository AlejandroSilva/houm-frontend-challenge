import { FC } from 'react'
import { useForm } from "react-hook-form"

import { SPECIES_COLOR } from '../utils/constants'
import { useAppContext } from '../utils/appContext'
import { Chip } from './Chip'
import { FindIcon, CancelIcon } from './svg'

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
        <a className='navbar__logo'
           title='Houm Frontend Challenge'
           href='/'
        >
          {/*<img src='https://houm.com/static/brandImage/houmLogo.svg' alt='Houm logo'/>*/}
          <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' alt='Rick And Morty logo'/>
        </a>

        <div className='navbar__filters'>
          <input className='round-text-input'
                 {...register('name')}
                 placeholder='Filter by Name'
          />

          <button className='round-button navbar__submit-button' type='submit'>
            <FindIcon />
          </button>

          {/* show the selected species */}
          {species && (
            <div>
              Species:
              <Chip color={SPECIES_COLOR[species]} onClick={removeSpecies}>
                {species}
              </Chip>
            </div>
          )}

          <button className='round-button navbar__cancel-button' type='button' onClick={onReset}>
            <CancelIcon />
          </button>

          <a className='navbar__github'
             title='GitHub repository'
             href='https://github.com/AlejandroSilva/houm-frontend-challenge'
             target='_blank'
          >
            <img className='' src='https://www.svgrepo.com/show/303615/github-icon-1-logo.svg' alt='github repository'/>
          </a>

        </div>
      </form>
    </header>
  )
}
