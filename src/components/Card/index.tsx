import { FC } from 'react'

import { SPaper } from './styles'

type Properties = {  children: React.ReactNode; width?: number }

export const Card: FC<Properties> = ({ children, width = 400 }) => (
  <SPaper width={width}>
    {children}
  </SPaper>
)