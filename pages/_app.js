import React, {useState} from 'react'

import styles from '../styles/globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library, config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;

library.add(fab, faMoon)


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(true)
  return <Component {...pageProps} theme={theme} setTheme={setTheme} />
}

export default MyApp
