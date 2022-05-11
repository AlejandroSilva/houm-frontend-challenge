import { FC, useEffect } from 'react'

import { useAppContext } from '../utils/appContext'
import { usePromise } from '../utils/hooks/usePromise'
import { getCharacters } from '../api/rickandmorty'
import { InfoBox } from './InfoBox'
import { CharacterCard } from './CharacterCard'
import { Spinner } from './Spinner'
import { Pagination } from './Pagination'

export const Characters: FC = () => {
  // const { filters } = useAppContext()
  const filters = 1
  const { data, error, status, fetch: fetchCharacters } = usePromise(getCharacters)

  // When the filters of AppContext change, then a new Api request is made
  useEffect(() => {
    console.log('useEffect', filters)
    fetchCharacters(filters)
  }, [filters])

  return (
    <section className='container'>
      {status==='PENDING' && (
        <InfoBox>
          <h1>Buscando...</h1>
          <Spinner />
        </InfoBox>
      )}

      {status==='DONE' && data.results.length===0 && (
        <InfoBox>
          <h1>¡Lo sentimos! No hay Aldeanos con esas características</h1>
          <p>Intenta con cambiando los filtros de busqueda</p>
        </InfoBox>
      )}
      {status==='DONE' &&
        <div className='characters__list'>
          {data.results.map((character, i) => (
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
              loading={false}
              currentPage={filters}
              totalPages={42}
              onPageSelect={() => {}}
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