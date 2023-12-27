import styles from './App.module.css'
import { Header } from "./components/Header"
import Post from "./components/Post"
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          Sidebar
        </aside>
        <main>
          <Post
            author="John Doe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          />
          <Post
            author="Jane Doe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          />
        </main>
      </div>
    </div>
  )
}

export default App
