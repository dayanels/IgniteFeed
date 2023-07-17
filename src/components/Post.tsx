import styles from "./Post.module.css";

import { Comment } from "./Comment.tsx";
import { Avatar } from "./Avatar.tsx";

import { CommentsInterface, PostInterface } from "../App.tsx";

import { formatDistanceToNow, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

interface PostProps {
  data: PostInterface;
}

export function Post({ data }: PostProps) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<CommentsInterface[]>([
    ...data.comments,
  ]);
  const isCommentEmpty = commentText.length == 0;

  const publicadedTimeFromNow = formatDistanceToNow(data.postedIn, {
    addSuffix: true,
    locale: ptBR,
  });

  const dateString = format(
    data.postedIn,
    "eee',' d 'de' MMMM 'de' y 'às' k':'m'h'",
    { locale: ptBR }
  );

  function handleCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event?.preventDefault();

    setCommentText(event?.target.value);
  }

  function handleAddNewComment(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setComments([
      ...comments,
      {
        userInfo: {
          name: "John Doe",
          role: "Back-end",
          avatarUrl:
            "https://images.unsplash.com/photo-1607664101908-c2b608c2653b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=164&q=30",
        },
        comment: commentText,
        aplausos: 0,
        commmentedIn: new Date(),
      },
    ]);

    setCommentText("");
  }

  function handleDeleteComment(comment: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (item) => item.comment != comment
    );
    setComments([...commentsWithoutDeletedOne]);
  }

  function handleAplaudir(comment: CommentsInterface) {
    const updatedComments = comments.map((item) => {
      if (item == comment) {
        const upItem: CommentsInterface = {
          userInfo: item.userInfo,
          comment: item.comment,
          aplausos: item.aplausos + 1,
          commmentedIn: item.commmentedIn,
        };
        return upItem;
      } else {
        return item;
      }
    });

    setComments([...updatedComments]);
  }

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div>
          <Avatar hasBorder src={data.userInfo.avatarUrl} />

          <div className={styles.userInfo}>
            <strong>{data.userInfo.name}</strong>
            <span>{data.userInfo.role}</span>
          </div>
        </div>
        <time title={dateString} dateTime={data.postedIn.toDateString()}>
          {publicadedTimeFromNow}
        </time>
      </header>

      <div className={styles.content}>
        {data.post.map((item) => {
          if (item.type == "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else {
            return (
              <p>
                <a key={item.content} href="#">
                  {item.content}
                </a>
              </p>
            );
          }
        })}
      </div>
      <footer>
        <strong>Deixe seu feedback</strong>
        <form onSubmit={(event) => handleAddNewComment(event)}>
          <textarea
            onChange={(event) => handleCommentChange(event)}
            value={commentText}
            name="comment"
            placeholder="Escreva um comentário..."
          />
          <button
            title={isCommentEmpty ? "Escreva um comentário" : ""}
            disabled={isCommentEmpty}
            type="submit">
            Publicar
          </button>
        </form>
      </footer>
      {comments.map((item) => {
        return (
          <Comment
            key={item.comment}
            comment={item}
            handleDeleteComment={handleDeleteComment}
            handleAplaudir={handleAplaudir}
          />
        );
      })}
    </article>
  );
}
