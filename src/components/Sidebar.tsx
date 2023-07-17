import { PencilSimpleLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img
        className={styles.backgroundHeader}
        src="https://images.unsplash.com/photo-1579882392185-581038fbc8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        alt=""
      />
      <header>
        <Avatar hasBorder src="https://plus.unsplash.com/premium_photo-1687832783320-35671afbf484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=40" />
        <strong>Nicole Araújo</strong>
        <p>Engenheira de Software</p>
      </header>
      <footer>
        <button>
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </button>
      </footer>
    </div>
  );
}
