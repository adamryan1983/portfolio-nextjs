import React from 'react'
import styles from '../styles/Footer.module.scss'

const showCurrentYear = () => {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <div className={styles.footerContainer}>
      Copyright Adam Ryan {showCurrentYear()}
    </div>
  )
}

export default Footer
