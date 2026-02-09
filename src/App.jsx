import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Commponets/header/header'
import StudentsTable from './Commponets/Body/StudentsTable'
import InputArea from './Commponets/AddStudents/InputArea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="h-full">
      
<Header/>
<InputArea />
<StudentsTable />

     </div>
    </>
  )
}

export default App
