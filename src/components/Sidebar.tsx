import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/guilherme-m-correa" />
        <strong>Guilherme Corrêa</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit Profile
        </a>
      </footer>
    </aside>
  )
}

export default Sidebar
