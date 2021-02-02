import React from 'react'
import Layout from '../../components/Layout'
import styles from './Portfolio.module.scss'

function Portfolio() {
  return (
    <Layout title="portfolio">
      <div className={styles.portfolioContainer}>
        Portfolio
      </div>
    </Layout>
  )
}

export default Portfolio
