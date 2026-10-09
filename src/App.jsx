import Header from './components/Header.jsx'
import { character } from './data/character.js'

function App() {
  return (
    <main className="sheet">
      <Header character={character} />
    </main>
  )
}

export default App