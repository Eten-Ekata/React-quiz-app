import Header from './components/Header'
import './index.css'
import { useQuiz } from './context/QuizContext'
import Main from './components/Main'
import Loader from './components/Loader'
import Error from './components/Error'
import StartScreen from './components/StartScreen'
import Progress from './components/Progress'
import Question from './components/Question'
import Timer from './components/Timer'
import NextButton from './components/NextButton'
import Footer from './components/Footer'
import FinishScreen from './components/FinishScreen'

function App() {
 const {status} = useQuiz()
  return (
    <div className='app'>
      <Header/>
    <Main>
    {status === "loading" && <Loader />}
    {status === "error" && <Error />}
    {status === "ready" && <StartScreen />}
    {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
            <Timer />
            <NextButton />
            </Footer>
          </>
          
        )}
        {status === "finished" && <FinishScreen />}
    </Main>



    </div>
  )
}

export default App


// 
//               
//               
//             </Footer>
//