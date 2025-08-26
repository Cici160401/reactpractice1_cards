import React from 'react'
import '../styles/Footer.css'

export default function Footer({text,year}) {
  return (
    <small className="footer">© {year} {text}</small>
  )
}

