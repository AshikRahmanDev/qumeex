import { Outlet } from 'react-router-dom'
import { Header } from '../shared/Header'

export const RootLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
