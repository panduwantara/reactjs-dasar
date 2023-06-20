import React from 'react';
import Label from '../../atom/Label';

export default function NavbarMain() {
  return (
    <nav className='flex mx-40 justify-center p-1  pt-10'>
        <div className='flex justify-between items-center border border-white square-2xl to-amber-100'>
      <Label text="Project Front End" />
      <div>
        <img src="cuba.png" alt="Logo" width={300} className='p-5'/>
      </div>
      <div>
        <ul className='flex gap-10 text-center justify-center items-center mx-16 text-white'>
          <li className='w-28'>
            <a href="/">Home</a>
          </li>
          <li className='w-28'>
            <a href="/menu">Menu</a>
          </li>
          <li className='w-28'>
            <a href="/about">About Us</a>
          </li>
          <li className='w-28'>
            <a href="/facilities">Facilities</a>
          </li>
        </ul>
      </div>
      <div className="p-5">
        <a href='/search'><img src="cari.png" alt="Logo" width={30}/></a>
      </div>
      </div>
    </nav>
  );
}
