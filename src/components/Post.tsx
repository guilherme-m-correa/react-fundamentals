import { format } from 'date-fns';
import { FormEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';


interface PostProps{
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  },
  content: {
    type: string;
    content: string;
  }[],
  publishedAt: Date;
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([
    'Well done, congratulations!! 👏👏'
  ]);
  const [newCommentText, setNewCommentText] = useState('');
 
  const publishedDateFormatted = format(publishedAt, 'MMMM do \'at\' h a')

  function handleCrateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: FormEvent<HTMLTextAreaElement>) {
    setNewCommentText((event.target as HTMLTextAreaElement).value);
  }
  
  function deleteComment(commentToDelete: string) {
    setComments(comments.filter(comment => comment !== commentToDelete));
  }

  function handleNewCommentInvalid(event: FormEvent<HTMLTextAreaElement>) {
    (event.target as HTMLTextAreaElement).setCustomValidity('Please, leave a comment');
  }

  const isNewCommentEmpty = newCommentText.length === 0
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea
          placeholder="Leave a comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
           return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />)
        })}
      </div>
    </article>
  )
}
