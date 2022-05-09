import { FC, useCallback, useState } from 'react'

import { NavBar } from './NavBar'
import { AppContext, defaultFilters, NookpediaFilters } from '../utils/appContext'

interface LayoutProps {
  children: any
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  // I do my best to memoize the helper's references
  const [filters, setFilters] = useState<NookpediaFilters>(defaultFilters)
  const filterBy = useCallback((newFilters: NookpediaFilters) => {
    setFilters(newFilters)
  }, [])
  const filterBySpecies = useCallback((species: string) => {
    setFilters(filters => ({ ...filters, species}))
  }, [])
  const removeSpecies = useCallback(() => {
    setFilters(filters => ({ ...filters, species: defaultFilters.species }))
  }, [])

  return (
    <div className='layout'>
      <AppContext.Provider value={{
        filters,
        filterBy,
        filterBySpecies,
        removeSpecies,
      }}>
        <NavBar />
        <main className='layout__content'>
          {children}
        </main>
      </AppContext.Provider>
    </div>
  )
}
