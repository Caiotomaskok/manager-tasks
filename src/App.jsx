import Sidebar from './components/Sidebar.jsx'
import Tasks from './components/Tasks.jsx'

import "./App.scss"

const App = () => {
  return (
    <div className="app-container">
       <Sidebar />
        <Tasks />
    </div>
   
  )
}

export default App;
