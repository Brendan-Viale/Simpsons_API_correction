import { BrowserRouter } from 'react-router'
import './App.css'
import Router from './Router'
import Store from './store/Store'
import Header from './partials/header/Header'

function App() {
  return (
    <BrowserRouter>
      <Store>
        <Header />
        <Router />
      </Store>
    </BrowserRouter>
  )
}

export default App
