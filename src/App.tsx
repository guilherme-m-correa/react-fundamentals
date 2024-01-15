import styles from './App.module.css'
import { Header } from "./components/Header"
import { Post, PostType } from "./components/Post"
import { Sidebar } from './components/Sidebar'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/guilherme-m-correa',
      name: 'Guilherme Corrêa',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hello guys 👋' },
      { type: 'paragraph', content: 'I just uploaded another project to my portfolio. It\'s a project I did at NLW Return, an event by Rocketseat. The project\'s name is DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/guilherme-m-correa',
      name: 'Guilherme Corrêa',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hello guys 👋' },
      { type: 'paragraph', content: 'I just uploaded another project to my portfolio. It\'s a project I did at NLW Return, an event by Rocketseat. The project\'s name is DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
