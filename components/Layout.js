import React, {useState} from 'react'
import NavBar from "./NavBar";
import Footer from './Footer';
import styles from '../styles/layout.module.scss'
import Head from 'next/head'

function Layout(props) {
  return (
  <div className={styles.layoutContainer}>
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <NavBar />
    <div>
      {props.children}
    </div>
    <Footer />
  </div>
  )}

export default Layout;