import { FC, useCallback, useState } from 'react'

import { NavBar } from './NavBar'
import { AppContext, defaultFilters } from '../utils/appContext'
import { CharactersFilter } from '../api/rickandmorty'

interface LayoutProps {
  children: any
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  // I do my best to memoize the helper's references to avoid unnecessary renders
  const [filters, setFilters] = useState<CharactersFilter>(defaultFilters)
  const filterByName = useCallback((name: string) => {
    // keep the species filter but fetch from page 1
    setFilters(current => ({ name, species: current.species, page: 1}))
  }, [])
  const filterBySpecies = useCallback((species: string) => {
    // keep the name filter and start from page 1
    setFilters(current => ({ name: current.name, species, page: 1}))
  }, [])
  const removeSpecies = useCallback(() => {
    // keep name filter and start from page 1
    setFilters(current => ({ name: current.name, species: defaultFilters.species, page: 1 }))
  }, [])
  const resetFilters = useCallback(() => setFilters(defaultFilters), [])
  const changePage = useCallback((page: number) => {
    // keep filters
    setFilters(current => ({...current, page}))
  }, [])

  return (
    <div className='layout'>
      <AppContext.Provider value={{
        filters,
        filterByName,
        filterBySpecies,
        changePage,
        removeSpecies,
        resetFilters
      }}>
        <NavBar />
        <main className='layout__content'>
          {children}
        </main>
      </AppContext.Provider>
    </div>
  )
}
