import './styles.css'
import logo from './mu.png'

function App() {
  return <div className='application'>
    <h1>React application - {process.env.NODE_ENV}</h1>

    <img src={logo} alt='React logo' width={100} height={100} />
  </div>
}

export default App;