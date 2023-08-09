import Header from './components/Header'
import './index.css'
import { useQuiz } from './context/QuizContext'
import Main from './components/Main'
import Loader from './components/Loader'
import Error from './components/Error'
import StartScreen from './components/StartScreen'

function App() {
 const {status} = useQuiz()

  return (
    <div className='app'>
      <Header/>
    <Main>
    {status === "loading" && <Loader />}
    {status === "error" && <Error />}
    {status === "ready" && <StartScreen />}
    </Main>




    </div>
  )
}

export default App
