import { FC } from 'react'

interface InfoBoxProps {
  children: any
}

export const InfoBox: FC<InfoBoxProps> = ({ children }) => (
  <div className='info-box'>
    {children}
  </div>
)
