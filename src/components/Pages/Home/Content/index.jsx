import React from 'react'

import Preview from './Preview'
import OurProject from './OurProject'
import Register from './Register'

import styles from './styles.module.scss'

const Content = () => (
  <div className={styles.content}>
    <Preview />
    <OurProject />
    <Register />
  </div>
)

export default Content
