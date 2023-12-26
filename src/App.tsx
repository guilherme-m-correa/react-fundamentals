import { Header } from "./components/Header"
import Post from "./components/Post"

import './global.css'

function App() {
  return (
    <div>
      <Header />
      <Post 
        author="John Doe"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
        />
      <Post
        author="Jane Doe"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
      />
    </div>
  )
}

export default App
