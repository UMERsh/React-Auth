import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear()
  return (
    <>
     <footer className='bg-dark'>
        <div className="container">
            <div className="col">
                <div className="row">
                    <div className='mb-0'>
                        <p className='text-white text-center'>Copyright &copy; {year} All Rights Reserved by Umer</p>
                    </div>
                </div>
            </div>
        </div>
     </footer>
    </>
  )
}
