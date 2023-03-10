import React from 'react';

// Icons
import {
  RiFileCopyLine,
  RiHome3Line,
  RiPieChartLine,
  RiWalletLine,
} from 'react-icons/ri';

export const Sidebar = () => {
  return (
    <div className='bg-primary-900 h-full'>
      {/* Profile */}
      <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
        <img
          src='https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg'
          alt='Avatar'
          className='w-20 h-20 object-cover rounded-full ring-2 ring-gray-300'
        />
        <h1 className='text-2xl text-white font-bold'>John Smith</h1>
        <p className='bg-primary-100 py-1 px-3 rounded-full text-white'>
          Pro Level
        </p>
      </div>
      {/* Nav */}
      <div className='bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll no-scrollbar flex flex-col justify-between gap-8'>
        <nav className='flex flex-col gap-5'>
          <a
            href='#'
            className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50'>
            <RiHome3Line /> Home
          </a>
          <a
            href='#'
            className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50'>
            <RiFileCopyLine /> Projects
          </a>
          <a
            href='#'
            className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50'>
            <RiWalletLine /> Invoices
          </a>
          <a
            href='#'
            className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50'>
            <RiPieChartLine /> Charts
          </a>
        </nav>
        <div className='bg-primary-900/50 text-white p-4 rounded-xl'>
          <p className='text-gray-400'>Having troubles?</p>
          <a href='#'>Contact us</a>
        </div>
      </div>
    </div>
  );
};
