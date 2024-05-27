import '../App.css';
import { Link } from 'react-router-dom';
import { React, Fragment } from 'react';
import logo from '../images/LegalAssist-White.png';
import profile from '../images/profile-icon.png';
import { Menu, Transition } from '@headlessui/react';
import notification from '../images/notification-icon.png';
import hero from '../images/hero-img.png';
import feature1 from '../images/feature-1.png';
import feature2 from '../images/feature-2.png';
import feature3 from '../images/feature-3.png';
import profile1 from '../images/profile-pict1.png';

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

function home() {
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
      {/* Hero Section */}
      <div className='flex my-32 justify-between items-center'>
        <div className='w-[572px]'>
          <h1 className='text-5xl font-bold mb-4'>
            Jangan Biarkan Tantangan Hukum Mengintimidasi Anda.
          </h1>
          <p className='text-lg'>
            Kami tidak hanya menyediakan informasi hukum, tetapi juga pandangan
            yang diarahkan untuk melindungi kepentingan Anda. Dari konsultasi
            hingga representasi, kami bersama Anda setiap langkah dalam
            perjalanan hukum Anda.
          </p>
        </div>
        <div className=''>
          <img src={hero} alt='' />
        </div>
      </div>
      {/* Layanan Kami */}
      <div className='my-32'>
        <div>
          <h1 className='text-[32px] font-bold mb-6'>Layanan Kami</h1>
        </div>
        <div className='flex justify-between items-start'>
          <div className='w-[288px]'>
            <img src={feature1} alt='' />
            <h1 className='text-[32px]'>Info Hukum</h1>
            <p className='text-[16px]'>
              Dalam dunia yang kompleks ini, pengetahuan adalah kekuatan. Kami
              memahami bahwa setiap keputusan hukum Anda membutuhkan pemahaman
              yang komprehensif dan terperinci. Itulah sebabnya kami hadir,
              sebagai sumber informasi hukum yang tepercaya dan terkini.
            </p>
          </div>
          <div className='w-[288px]'>
            <img src={feature2} alt='' />
            <h1 className='text-[32px]'>Tips Hukum</h1>
            <p className='text-[16px]'>
              Dalam dunia yang kompleks ini, pengetahuan adalah kekuatan. Kami
              memahami bahwa setiap keputusan hukum Anda membutuhkan pemahaman
              yang komprehensif dan terperinci. Itulah sebabnya kami hadir,
              sebagai sumber informasi hukum yang tepercaya dan terkini.
            </p>
          </div>
          <div className='w-[288px]'>
            <img src={feature3} alt='' />
            <h1 className='text-[32px]'>Konsultasi Hukum</h1>
            <p className='text-[16px]'>
              Dalam dunia yang kompleks ini, pengetahuan adalah kekuatan. Kami
              memahami bahwa setiap keputusan hukum Anda membutuhkan pemahaman
              yang komprehensif dan terperinci. Itulah sebabnya kami hadir,
              sebagai sumber informasi hukum yang tepercaya dan terkini.
            </p>
          </div>
        </div>
      </div>
      {/* Bantuan Hukum Terpecaya */}
      <div>
        <div>
          <h1 className='text-[32px] font-bold mb-6'>
            Bantuan Hukum Terpecaya
          </h1>
        </div>
        <div>
          <div className='w-[320px]'>
            <div>
              <img src={profile1} alt='' />
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <h1 className='text-xl'>Anne Maria</h1>
                <p>Law Consultant</p>
                <p>2+ Years Experience</p>
              </div>
              <div>
                <h1>Pilih</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
