import './App.css'
import SpaceName from './components/SpaceName'
import WeatherStatus from './components/WeatherStatus'
import TimeDate from './components/TimeDate'
import TodoList from './components/TodoList'
import MusicPlayer from './components/MusicPlayer'
import Timer from './components/Timer'

function App() {
  return (
    <div id='app'>
      <SpaceName />
      <WeatherStatus />
      <TimeDate />
      <TodoList />
      <MusicPlayer />
      <Timer />
    </div>
  )
}

export default App
