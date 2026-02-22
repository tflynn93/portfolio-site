import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { WorkHistory } from './pages/WorkHistory'
import { WildlifePhotography } from './pages/WildlifePhotography'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="/wildlife-photography" element={<WildlifePhotography />} />
        </Routes>
      </main>
    </>
  )
}

export default App
