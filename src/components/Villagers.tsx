import { FC, useEffect } from 'react'

import { usePromise } from '../utils/hooks/usePromise'
import { getVillagers } from '../api/nookpedia'
import { InfoBox } from './InfoBox'
import { VillagerCard } from './VillagerCard'
import { Spinner } from './Spinner'

export const Villagers: FC = () => {
  const { data, error, status, fetch: fetchAllVillagers } = usePromise(getVillagers)

  useEffect(() => {
    fetchAllVillagers()
  }, [])

  return (
    <section className='container'>
      {status==='PENDING' && (
        <InfoBox>
          <h1>Buscando...</h1>
          <Spinner />
        </InfoBox>
      )}
      {status==='DONE' && data.length===0 && (
        <InfoBox>
          <h1>¡Lo sentimos! No hay Aldeanos con esas características</h1>
          <p>intenta con cambiando los filtros de busqueda</p>
        </InfoBox>
      )}
      {status==='DONE' &&
        <div className='villagers-list'>
          {data.map((villager, i) => (
            <VillagerCard
              classname='villagers-item'
              key={i}
              name={villager.name}
              imageUrl={villager.image_url}
            />
          ))}
        </div>
      }
      {status==='ERROR' && (
        <p>an error</p>
      )}
    </section>
  )
}