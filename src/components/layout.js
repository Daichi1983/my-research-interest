import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>

      <main>
        <h1 className={heading} class="title">{pageTitle}</h1>
	<h2 class="subtitle">パラオやオセアニア、沖縄に関する個人的研究のまとめ</h2>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        ホーム
      </a>

      <a class="navbar-item">
        パラオ
      </a>

      <a class="navbar-item" href="about">
        About
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

  </div>
</nav>
        {children}
      </main>

    </div>
  )
}

export default Layout