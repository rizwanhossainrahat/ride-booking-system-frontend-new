
import { Outlet } from 'react-router'
import './App.css'

import CommonLayout from './components/layouts/CommonLayout'

function App() {
  

  return (
    <>
      <CommonLayout>
        <Outlet></Outlet>
        <h1>Rider eikhane theke render hobe </h1>
        <h1>Driver eikhane theke render hobe</h1>
        <h1>Admin o eikhane theke render hobe</h1>
      </CommonLayout>
      
    </>
  )
}

export default App
