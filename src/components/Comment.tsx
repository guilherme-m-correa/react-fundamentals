
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/guilherme-m-correa" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Corrêa</strong>
              <time title="December 27th at 13pm" dateTime="2023-12-27 13:00:00">Published 1h ago</time>
            </div>

            <button title="Delete commment">
              <Trash size={24} />
            </button>
          </header>

          <p>Well done, congratulations!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
