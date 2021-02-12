import React, {useState} from 'react'
import NavBar from "./NavBar";
import Footer from './Footer';
import styles from '../styles/layout.module.scss'
import Head from 'next/head'

function Layout(props) {
  let styling = props.theme ?     <style jsx global>{`
  body {
    height: 100vh;
    background-color: #393e41;
  }
`}</style>
: 
<style jsx global>{`
body {
  height: 100vh;
  background-color: #faf3dd;
}

`}</style>
  return (
  <div className={styles.layoutContainer}>
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <NavBar theme={props.theme} setTheme={props.setTheme}/>
    <div>
      {props.children}
    </div>
    <Footer theme={props.theme} />
  </div>
  )}

export default Layout;