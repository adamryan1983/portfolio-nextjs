import React from 'react'
import styles from '../styles/Home.module.scss'
import PhotoSocial from './PhotoSocial'
import Description from './Description'

function Home() {
  return (
    <div className={styles.mainPageContainer}>
      <PhotoSocial />
      <Description />
    </div>
  )
}

export default Home
