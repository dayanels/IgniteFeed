import styles from "./Avatar.module.css";


interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}


export function Avatar({hasBorder = false, ...props}: AvatarProps) {
  return <img className={hasBorder ? styles.avatar : styles.avatarWithoutBorder} {...props} />;
}
