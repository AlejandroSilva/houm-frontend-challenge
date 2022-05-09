import { FC, useEffect } from 'react'

import { usePromise } from '../utils/hooks/usePromise'
import { getVillagers } from '../api/nookpedia'

export const Villagers: FC = () => {
  const { data, error, status, fetch: fetchAllVillagers } = usePromise(getVillagers)

  useEffect(() => {
    fetchAllVillagers()
  }, [])

  return (
    <section className='container'>
      {status==='PENDING' && (
        <p>loading</p>
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