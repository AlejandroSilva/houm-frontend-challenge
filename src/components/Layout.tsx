import { FC } from 'react'

import { NavBar } from './NavBar'

interface LayoutProps {
  children: any
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <NavBar />
      <main className='layout__content'>
        {children}
      </main>
    </div>
  )
}
