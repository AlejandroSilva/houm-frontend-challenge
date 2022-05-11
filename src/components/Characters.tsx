import { FC, useEffect, useState } from 'react'

import { useAppContext } from '../utils/appContext'
import { usePromise } from '../utils/hooks/usePromise'
import { getCharacters } from '../api/rickandmorty'
import { InfoBox } from './InfoBox'
import { CharacterCard } from './CharacterCard'
import { Spinner } from './Spinner'
import { Pagination } from './Pagination'

export const Characters: FC = () => {
  // const { filters } = useAppContext()
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, status, fetch: fetchCharacters } = usePromise(getCharacters)
  const characters = data?.results || []
  const totalPages = data?.info.pages

  // When the filters of AppContext change, then a new Api request is made
  useEffect(() => {
    console.log('useEffect', currentPage)
    fetchCharacters(currentPage)
  }, [currentPage])

  return (
    <section className='container'>
      {status==='PENDING' && (
        <InfoBox>
          <h1>Buscando...</h1>
          <Spinner />
        </InfoBox>
      )}

      {status==='DONE' && characters.length===0 && (
        <InfoBox>
          <h1>¡Lo sentimos! No hay Aldeanos con esas características</h1>
          <p>Intenta con cambiando los filtros de busqueda</p>
        </InfoBox>
      )}
      {status==='DONE' &&
        <div className='characters__list'>
          {characters.map((character, i) => (
            <CharacterCard
              key={i}
              classname='characters__item'
              name={character.name}
              imageUrl={character.image}
              specie={character.species}
              type={character.type}
              gender={character.gender}
              status={character.status}
              location={character.location?.name}
            />
          ))}
          <div className='characters__pagination'>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageSelect={setCurrentPage}
            />
          </div>
        </div>
      }
      {status==='ERROR' && (
        <InfoBox>
          <h1>¡Lo sentimos! Ocurrio un error inesperado</h1>
          <p>Por favor intenta nuevamente en unos minutos</p>
        </InfoBox>
      )}
    </section>
  )
}