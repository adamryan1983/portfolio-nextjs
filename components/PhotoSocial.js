import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Home.module.scss'

function PhotoSocial() {
  return (
    <div className={styles.photoSocialcontainer}>
      <img src="/images/headshot.webp" />
      <ul className={styles.socialBar}>
        <li><a href="https://instagram.com/thisisadamryan" target="_blank"><FontAwesomeIcon className={styles.iconSocial} icon={['fab', 'instagram']} size="2x"/></a></li>
        <li><a href="https://twitter.com/adamryan1983" target="_blank"><FontAwesomeIcon className={styles.iconSocial} icon={['fab', 'twitter']} size="2x"/></a></li>
        <li><a href="https://github.com/thisisadamryan1983" target="_blank"><FontAwesomeIcon className={styles.iconSocial} icon={['fab', 'github']} size="2x"/></a></li>
        <li><a href="https://linkedin.com/in/adamryan1983" target="_blank"><FontAwesomeIcon className={styles.iconSocial} icon={['fab', 'linkedin']} size="2x"/></a></li>
        <li><a href="mailto:adamryan1983@me.com"><FontAwesomeIcon className={styles.iconSocial} icon={faEnvelope} size="2x" /></a></li>
      </ul>
    </div>
  )
}

export default PhotoSocial
