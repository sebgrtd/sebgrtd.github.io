import React from 'react';
import { Container } from 'react-bootstrap'

export default function Footer() {
  return <footer style={{width:'100%'}} className='text-center bg-dark py-4'>
        <h4 className='text-primary'>© 2022 Gratade Sébastien</h4>
        <a className='text-secondary my-2'  href='#'>source</a>
      </footer>
}
