import styles from '@/styles/Modal.module.css'
import Button from './Button'
import { useState } from 'react'

export default function Modal ({ children, aditionalButton }) {
  const [show, setShow] = useState(true)
  const handleClick = () => {
    setShow(false)
  }
  if (!show) {
    return null
  }
  return (
    <section className={styles.modal} onClick={handleClick}>
      <div className={styles.content}>
        <header className={styles.header}>
          {children}
        </header>
        <footer className={styles.modalControl}>
          <Button onClick={handleClick}>Exit</Button>
          {aditionalButton}
        </footer>
      </div>
    </section>
  )
}
