import { FC } from 'react'

export const NavBar: FC = () => {
  return (
    <header className='navbar'>
      <div className='container'>
        <img className='navbar__logo' src='https://houm.com/static/brandImage/houmLogo.svg' alt='Houm logo'/>
        <input type='text' />
        <button>Buscar</button>
      </div>
    </header>
  )
}