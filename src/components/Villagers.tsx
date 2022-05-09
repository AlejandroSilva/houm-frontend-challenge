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
      {status==='DONE' && (
        data.map((villager, i) => (
          <div className='red' key={i} style={{ width: '5rem', height: '5rem'}}>
            {villager.name}
            <img src={villager.image_url} alt='' style={{height: '100%'}}/>
          </div>
        ))
      )}
      {status==='ERROR' && (
        <p>an error</p>
      )}
    </section>
  )
}