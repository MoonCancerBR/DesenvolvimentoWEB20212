import Arena from './Componentes/Arena'
import World from './Componentes/World'
import "./App.css"
import data from './service/data.js'

function App() {
  return (
    <div className="App">

      <World >
        {data.map(a=>(
          <Arena arena={a.arena} 
            local= {a.local}
            enemy={a.enemy}
            hero={a.hero}  />
        ))}
      </World>
    </div>
  );
}

export default App;