import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { CommentsInterface } from "../App";
import { formatDistanceStrict, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface CommentsProps {
  comment: CommentsInterface;
  handleDeleteComment: (commentKey: string) => void;
  handleAplaudir: (comment: CommentsInterface)=>void;
}

export function Comment({ comment, handleDeleteComment,handleAplaudir }: CommentsProps) {
  const publicadedTimeFromNow = formatDistanceStrict(
    comment.commmentedIn,
    new Date(),
    {
      addSuffix: true,
      locale: ptBR,
    }
  );

  const dateString = format(
    comment.commmentedIn,
    "eee',' d 'de' MMMM 'de' y 'às' k':'m'h'",
    { locale: ptBR }
  );

  return (
    <div className={styles.comment}>
      <Avatar src={comment.userInfo.avatarUrl} />

      <div className={styles.right}>
        <div className={styles.content}>
          <header>
            <div>
              <strong>{comment.userInfo.name}</strong>
              <time title={dateString}>{publicadedTimeFromNow}</time>
            </div>
            <button onClick={() => handleDeleteComment(comment.comment)}>
              <Trash size={24} />
            </button>
          </header>
          <div>
            <p>{comment.comment}</p>
          </div>
        </div>
        <button onClick={()=>handleAplaudir(comment)}>
          <ThumbsUp size={20} />
          Aplaudir <span>{comment.aplausos}</span>
        </button>
      </div>
    </div>
  );
}
