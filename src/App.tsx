import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

export interface UserInterface {
  name: string;
  avatarUrl: string;
  role: string;
}

export interface CommentsInterface {
  userInfo: UserInterface;
  comment: string;
  aplausos: number;
  commmentedIn: Date;
}

export interface PostInterface {
  id: number;
  userInfo: UserInterface;
  post: {
    type: string;
    content: string;
  }[];
  postedIn: Date;
  comments: CommentsInterface[];
}

const posts: PostInterface[] = [
  {
    id: 1,
    postedIn: new Date(2023, 6, 16, 13, 25, 0),
    post: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojetonlw" },
      { type: "link", content: "#rocketseat" },
    ],
    userInfo: {
      name: "Jane Cooper",
      role: "Dev front-end",
      avatarUrl:
        "https://images.unsplash.com/photo-1607664101908-c2b608c2653b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=164&q=30",
    },
    comments: [
      {
        userInfo: {
          name: "Devon Lane",
          role: "Developer",
          avatarUrl:
            "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=170&q=10",
        },
        comment: "lorem",
        aplausos: 2,
        commmentedIn: new Date(2023, 6, 16, 14, 55, 0),
      },
      {
        userInfo: {
          name: "Lorane",
          role: "CTO",
          avatarUrl:
            "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
        },
        comment: "Muito bom Devon, parabéns!! 👏👏",
        aplausos: 4,
        commmentedIn: new Date(2023, 6, 16, 16, 40, 0),
      },
    ],
  },
];

export function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Sidebar />
        <div className={styles.postList}>
          {posts.map((post) => {
            return <Post key={post.id} data={post} />;
          })}
        </div>
      </main>
    </>
  );
}
