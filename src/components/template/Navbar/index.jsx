import React from 'react';
import Label from '../../atom/Label';

export default function Navbar() {
  return (
    <nav className='bg-gradient-to-r from-orange-900 to-amber-100 items-center p-3 w-full '>
      <Label text="Project Front End" />
      <p className="text-white font-bold text-xl" >STARBAK'S KELILING</p>
    </nav>
  );
}