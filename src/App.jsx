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
import Footer from './components/Footer'

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
            </Footer>
          </>
        )}
    </Main>



    </div>
  )
}

export default App


// 
//               
//               <NextButton />
//             </Footer>
//