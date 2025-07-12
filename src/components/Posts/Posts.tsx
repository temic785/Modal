import { useState } from "react"
import { DeletePostModal } from "../DeletePostModal/DeletePostModal.tsx"
import s from "./Posts.module.css"

export const Posts = () => {
  // @ts-ignore
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ])

  const [showModal, setShowModal] = useState(false)

  const openModalHandler = () => {
    setShowModal(true)
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className={s.container}>
        <h2>Posts</h2>
        {posts.map((post) => {
          return (
            <div className={s.postContainer} key={post.id}>
              <h3>{post.title}</h3>
              <button onClick={openModalHandler}>х</button>
            </div>
          )
        })}
      </div>
      <DeletePostModal open={showModal} onClose={closeModalHandler} />
    </>
  )
}
