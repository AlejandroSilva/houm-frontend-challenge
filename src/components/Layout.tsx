import { FC, useCallback, useState } from 'react'

import { NavBar } from './NavBar'
import { AppContext, NookpediaFilters } from '../utils/appContext'

interface LayoutProps {
  children: any
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [filters, setFilters] = useState<NookpediaFilters>({
    name: ''
  })
  const filterByName = useCallback((name: string) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      name
    }))
  }, [])

  return (
    <div className='layout'>
      <AppContext.Provider value={{
        filters,
        filterByName
      }}>
        <NavBar />
        <main className='layout__content'>
          {children}
        </main>
      </AppContext.Provider>
    </div>
  )
}
