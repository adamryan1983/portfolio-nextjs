import React from 'react'
import styles from '../styles/Footer.module.scss'
import styleLight from '../styles/FooterLight.module.scss'

const showCurrentYear = () => {
  return new Date().getFullYear();
}

function Footer(props) {

  return (
    <div className={props.theme ? styles.footerContainer : styleLight.footerContainer}>
      Copyright Adam Ryan {showCurrentYear()}
    </div>
  )
}

export default Footer
