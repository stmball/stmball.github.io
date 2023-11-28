import * as React from "react"
import * as globalStyles from "../styles/global.module.css"
import * as indexStyles from "../styles/index.module.css"

const IndexPage = () => {
  return (
    <main className="main">
      <div className={indexStyles.index_container}>
        <div className={indexStyles.index_left_container}>
          <h1>Sam Ball</h1>
          <h3>Data Scientist</h3>
        </div>
        <div className={indexStyles.index_right_container}>
          <a className={indexStyles.link_box} href="https://github.com/stmball/">
            <h3>Portfolio</h3>
            <p>Things I've Done</p>
          </a>
          <a className={indexStyles.link_box} href="blog/">
            <h3>Blog</h3>
            <p>Things I Write About</p>
          </a>
        </div>
      </div>
    </main>
  )
}

export default IndexPage