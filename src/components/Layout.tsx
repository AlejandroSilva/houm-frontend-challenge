import { FC, useCallback, useState } from 'react'

import { NavBar } from './NavBar'
import { AppContext, defaultFilters, NookpediaFilters } from '../utils/appContext'

interface LayoutProps {
  children: any
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [filters, setFilters] = useState<NookpediaFilters>(defaultFilters)
  const filterBy = useCallback((filters: NookpediaFilters) => setFilters(filters), [])

  return (
    <div className='layout'>
      <AppContext.Provider value={{
        filters,
        filterBy,
      }}>
        <NavBar />
        <main className='layout__content'>
          {children}
        </main>
      </AppContext.Provider>
    </div>
  )
}
