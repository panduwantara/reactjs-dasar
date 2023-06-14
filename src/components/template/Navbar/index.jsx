import React from 'react';
import Label from '../../atom/Label';

export default function Navbar() {
  return (
    <nav className='bg-gradient-to-r from-sky-500 to-red-500 items-center p-3 w-full '>
      <Label text="Project Front End" />
      <p className="text-white font-bold text-xl" >DRUG'S STORE MAJALENGKA</p>
    </nav>
  );
}