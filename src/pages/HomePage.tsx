import { Link } from 'react-router-dom'
import binuImage from '../assets/binu.png'

export function HomePage() {
  return (
    <div className="home-sections">
    <section className="hero panel">
      <h1>Hi, I'm Eungi! 👋 </h1>
      <h2>I'm an Entrepreneur & Software Engineer passionate about building tech projects and platforms that make a difference in my community.</h2>
      <h3>
        Welcome to my digital portfolio, where I share my projects, skills, and journey as a software engineer 👉
      </h3>
      <div className="hero-actions">
        <Link to="/about" className="btn btn-primary">
          View Experience
        </Link>
        <Link to="/projects" className="btn btn-primary">
          View Projects
        </Link>
        <Link to="/contact" className="btn btn-ghost">
          Let&apos;s Connect
        </Link>
      </div>
      </section>

    <section className="hero panel">
      <div className="stats-grid">
        <article>
          <strong>featured... BINU for femine health! Binu is a social media platform built with a mission to normalize stigma-free discussions around feminine health on campus, backed by a Swift + Firebase architecture.</strong>
          <div className="article-links">
            <a
              href="https://tinyurl.com/binumobileapp"
              target="_blank"
              rel="noreferrer"
              className="article-link"
            >
              Click to view Mobile App Prototype💡
            </a>
            <a
              href="https://drive.google.com/file/d/1uB7U3TTiGJy0NiUXZ6AGPstuzWQlSZHr/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="article-link"
            >
              Click to view Pitch Deck💡
            </a>
            <a
              href="https://tinyurl.com/BinuUserSurvey"
              target="_blank"
              rel="noreferrer"
              className="article-link"
            >
              User Survey: Help us improve BINU and let's normalize stigma-free discussion on all things women's health! 💡
            </a>
          </div>
          <img src={binuImage} alt="Binu project preview" className="article-image" />
        </article>
      </div>
    </section>
    </div>
  )
}

