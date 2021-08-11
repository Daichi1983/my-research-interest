import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import Footer from '../components/footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>

      <main>
        <h1 className={heading} class="title">{pageTitle}</h1>
	<h2 class="subtitle">パラオやオセアニア、沖縄に関する個人的研究のまとめ</h2>

<nav class="navbar" role="navigation" aria-label="main navigation" class="navbar is-info">
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        ホーム
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link" href="palau">
        パラオ
      </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="/palau/books">
            パラオ関連書籍
          </a>
          <a class="navbar-item">
            パラオの風景
          </a>
	</div>
	</div>

      <a class="navbar-item" href="about">
        About
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            文化人類学とは
          </a>
          <a class="navbar-item">
            言語学とは
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

    <Footer />
    </div>
  )
}

export default Layout