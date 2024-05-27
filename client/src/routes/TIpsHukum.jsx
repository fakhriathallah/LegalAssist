import '../App.css';
import { Link } from 'react-router-dom';
import { React, Fragment } from 'react';
import logo from '../images/LegalAssist-White.png';
import profile from '../images/profile-icon.png';
import { Menu, Transition } from '@headlessui/react';
import notification from '../images/notification-icon.png';

import content1 from '../images/content1.png';
import content2 from '../images/content2.png';
import content3 from '../images/content3.png';
import content4 from '../images/content4.png';
import content5 from '../images/content5.png';
import content6 from '../images/content6.png';

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const content = [
  { imgSrc: content1 },
  { imgSrc: content2 },
  { imgSrc: content3 },
  { imgSrc: content4 },
  { imgSrc: content5 },
  { imgSrc: content6 },
];

function TIpsHukum() {
  return (
    <div className='container mt-4'>
      {/* Navbar */}
      <div className='flex items-center justify-between'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <div className='flex gap-6'>
          {navigation.map((item) => (
            <Link key={item} to={item.href} className=''>
              {item.name}
            </Link>
          ))}
        </div>
        <div className='flex gap-4 items-center'>
          <img src={notification} alt='logo' />
          {/* Profile Dropdown */}
          <Menu as='div' className='relative ml-3'>
            <div>
              <Menu.Button className=' flex max-w-xs items-center'>
                <span className='absolute -inset-1.5' />
                <span className='sr-only'>Open user menu</span>
                <img className='h-8 w-8 rounded-full' src={profile} alt='' />
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
      </div>
      {/* Content Section */}
      <div className='flex flex-wrap justify-between mt-[120px]'>
        {content.map((item) => (
          <div key={item.imgSrc} className='mb-[40px]'>
            <img src={item.imgSrc} alt='gambar' className='w-[360px]' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TIpsHukum;
