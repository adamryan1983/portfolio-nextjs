import React from 'react'
import styles from './Resume.module.scss'
import Layout from '../../components/Layout'

function Resume() {
  return (
    <Layout title="resume">
      <div className={styles.resumeContainer}>
        Resume
      </div>    
    </Layout>
  )
}

export default Resume
