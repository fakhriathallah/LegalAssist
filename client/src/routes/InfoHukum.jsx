import '../App.css';
import { Link } from 'react-router-dom';
import { React, Fragment, useState } from 'react';
import logo from '../images/LegalAssist-White.png';
import profile from '../images/profile-icon.png';
import { Menu, Transition, Checkbox } from '@headlessui/react';
import notification from '../images/notification-icon.png';
import arrowDown from '../images/arrow_down.png';
import folder from '../images/folder.png';

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const navigation = [
  { name: 'Info Hukum', href: '/info-hukum', current: false },
  { name: 'Tips Hukum', href: '/tips-hukum', current: false },
  { name: 'Konsultasi Hukum', href: '/konsultasi-hukum', current: false },
];

const filterJenisPeraturan = [
  { descr: 'Peraturan Daerah' },
  { descr: 'Peraturan Pemerintah' },
  { descr: 'Peraturan Presiden' },
  { descr: 'Undang Undang' },
];

const filterKategori = [
  { descr: 'Semua Kategori' },
  { descr: 'Lalu Lintas' },
  { descr: 'Angkutan Jalan' },
];

const repositoryPeraturan = [
  {
    title: 'Peraturan Pemerintah Nomor 74 Tahun 2013',
    descr:
      'Peraturan tentang penyelenggaraan angkutan jalan, termasuk angkutan orang dan angkutan barang.',
    link: 'https://peraturan.bpk.go.id/Download/33753/PP%20Nomor%2074%20Tahun%202013.pdf',
  },
  {
    title: 'Peraturan Pemerintah Nomor 74 Tahun 2013',
    descr:
      'Peraturan tentang penyelenggaraan angkutan jalan, termasuk angkutan orang dan angkutan barang.',
    link: '#',
  },
  {
    title: 'Peraturan Pemerintah Nomor 74 Tahun 2013',
    descr:
      'Peraturan tentang penyelenggaraan angkutan jalan, termasuk angkutan orang dan angkutan barang.',
    link: '#',
  },
  {
    title: 'Peraturan Pemerintah Nomor 74 Tahun 2013',
    descr:
      'Peraturan tentang penyelenggaraan angkutan jalan, termasuk angkutan orang dan angkutan barang.',
    link: '#',
  },
  {
    title: 'Peraturan Pemerintah Nomor 74 Tahun 2013',
    descr:
      'Peraturan tentang penyelenggaraan angkutan jalan, termasuk angkutan orang dan angkutan barang.',
    link: '#',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function InfoHukum() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enabled, setEnabled] = useState(false);
  return (
    <div className='container mt-4'>
      {/* Navbar */}
      <div className='flex items-center justify-between'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <div className='flex gap-6'>
          {navigation.map((item) => (
            <Link
              key={item}
              to={item.href}
              className='hover:text-[#FFB800] duration-300'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='flex gap-4 items-center'>
          {isLoggedIn ? (
            <div>
              <img src={notification} alt='logo' />
              {/* Profile Dropdown */}
              <Menu as='div' className='relative ml-3'>
                <div>
                  <Menu.Button className=' flex max-w-xs items-center'>
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src={profile}
                      alt=''
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <div className='flex gap-2 items-center'>
              <Link
                to='/register'
                className='bg-black text-white  rounded py-1 px-3 '
              >
                Masuk
              </Link>
              <Link
                to='/register'
                className='bg-[#FFB800] text-white py-1 px-3 rounded'
              >
                Daftar
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Content */}
      <div className='flex items-start justify-between mt-[52px]'>
        {/* Content Left */}
        <div className='w-[20vw] outline-1 outline-slate-200 outline rounded-[10px] p-6'>
          <div className='mb-[24px]'>
            <div className='flex justify-between'>
              <h2 className='font-semibold text-xl'>Jenis Peraturan</h2>
              <img src={arrowDown} alt='' />
            </div>
            <div className=''>
              {filterJenisPeraturan.map((item) => (
                <div key={item} className='flex items-center gap-3'>
                  <Checkbox
                    checked={enabled}
                    onChange={setEnabled}
                    className='group block size-4 rounded border bg-white data-[checked]:bg-blue-500'
                  >
                    {/* Checkmark icon */}
                    <svg
                      className='stroke-white opacity-0 group-data-[checked]:opacity-100'
                      viewBox='0 0 14 14'
                      fill='none'
                    >
                      <path
                        d='M3 8L6 11L11 3.5'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Checkbox>
                  <p>{item.descr}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Filter Kategori */}
          <div>
            <div className='flex justify-between'>
              <h2 className='font-semibold text-xl'>Kategori</h2>
              <img src={arrowDown} alt='' />
            </div>
            <div className=''>
              {filterKategori.map((item) => (
                <div key={item} className='flex items-center gap-3'>
                  <Checkbox
                    checked={enabled}
                    onChange={setEnabled}
                    className='group block size-4 rounded border bg-white data-[checked]:bg-blue-500'
                  >
                    {/* Checkmark icon */}
                    <svg
                      className='stroke-white opacity-0 group-data-[checked]:opacity-100'
                      viewBox='0 0 14 14'
                      fill='none'
                    >
                      <path
                        d='M3 8L6 11L11 3.5'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Checkbox>
                  <p>{item.descr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Content Right */}
        <div className='w-[55vw] flex flex-col gap-4'>
          {repositoryPeraturan.map((item) => (
            <div
              key={item}
              className='outline-1 outline-slate-200 outline rounded-[10px] p-6'
            >
              <div className='flex items-start justify-between'>
                <div className='w-[60%] flex flex-col gap-2'>
                  <h1 className='font-medium text-[24px]'>{item.title}</h1>
                  <p className='font-[20px]'>{item.descr}</p>
                </div>
                <Link to={item.link}>
                  <img src={folder} alt='' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoHukum;
