import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="December 27th at 13pm" dateTime="2023-12-27 13:00:00">Published 1h ago</time>
      </header>

      <div className={styles.content}>
        <p>Hey guys 👋</p>
        <p>I just uploaded another project to my portfolio. It's a project I did at NLW Return, an event by Rocketseat. The project's name is DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#newproject</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}
