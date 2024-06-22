import '../App.css';
import { Link } from 'react-router-dom';
import { React, Fragment, useState } from 'react';
import logo from '../images/LegalAssist-White.png';
import profile from '../images/profile-icon.png';
import { Menu, Transition } from '@headlessui/react';
import notification from '../images/notification-icon.png';
import hero from '../images/hero-img.png';
import feature1 from '../images/feature-1.png';
import feature2 from '../images/feature-2.png';
import feature3 from '../images/feature-3.png';
import profile1 from '../images/profile-pict1.png';
import lawyer1 from '../images/lawyer1.png';
import star from '../images/star.png';
import linkIcon from '../images/link-icon.png';
import location from '../images/location.png';
import logoSmall from '../images/logo-small.png';

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

const dataLawyer = [
  {
    img: lawyer1,
    lawyerName: 'Aditya Pratama',
    lawyerCategory: 'Hukum Bisnis',
    lawyerRating: '4.7',
    lawyerDesc:
      'Saya memiliki pengalaman luas dalam menyusun, meninjau, dan menegosiasikan kontrak bisnis.',
    lawyerLink: 'apratama.com',
    lawyerLocation: 'Jakarta',
    lawyerPrice: 20000,
  },
  {
    img: lawyer1,
    lawyerName: 'Ihya Choerul',
    lawyerCategory: 'Hukum Bisnis',
    lawyerRating: '4.7',
    lawyerDesc:
      'Saya memiliki pengalaman luas dalam menyusun, meninjau, dan menegosiasikan kontrak bisnis.',
    lawyerLink: 'apratama.com',
    lawyerLocation: 'Jakarta',
    lawyerPrice: 20000,
  },
  {
    img: lawyer1,
    lawyerName: 'Aditya Pratama',
    lawyerCategory: 'Hukum Bisnis',
    lawyerRating: '4.7',
    lawyerDesc:
      'Saya memiliki pengalaman luas dalam menyusun, meninjau, dan menegosiasikan kontrak bisnis.',
    lawyerLink: 'apratama.com',
    lawyerLocation: 'Jakarta',
    lawyerPrice: 20000,
  },
];

const dataFeature = [
  {
    featureImg: feature1,
    featureTitle: 'Info Hukum',
    featureDesc:
      'Dalam dunia yang kompleks ini, pengetahuan adalah kekuatan. Kami memahami bahwa setiap keputusan hukum Anda membutuhkan pemahaman yang komprehensif dan terperinci. Itulah sebabnya kami hadir, sebagai sumber informasi hukum yang tepercaya dan terkini.',
  },
  {
    featureImg: feature2,
    featureTitle: 'Tips Hukum',
    featureDesc:
      'Dalam dunia yang kompleks ini, pengetahuan adalah kekuatan. Kami memahami bahwa setiap keputusan hukum Anda membutuhkan pemahaman yang komprehensif dan terperinci. Itulah sebabnya kami hadir, sebagai sumber informasi hukum yang tepercaya dan terkini.',
  },
  {
    featureImg: feature3,
    featureTitle: 'Konsultasi Hukum',
    featureDesc:
      'Dalam dunia yang kompleks ini, pengetahuan adalah kekuatan. Kami memahami bahwa setiap keputusan hukum Anda membutuhkan pemahaman yang komprehensif dan terperinci. Itulah sebabnya kami hadir, sebagai sumber informasi hukum yang tepercaya dan terkini.',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
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
                className='hover:text-[#FFB800] duration-300 md:text-sm'
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
        {/* Hero Section */}
        <div className='flex my-20 justify-between items-center'>
          <div className='w-[572px] '>
            <h1 className='text-5xl font-bold mb-4 tracking-wider '>
              Jangan Biarkan Tantangan Hukum Mengintimidasi Anda.
            </h1>
            <p className='text-lg mb-4'>
              Kami tidak hanya menyediakan informasi hukum, tetapi juga
              pandangan yang diarahkan untuk melindungi kepentingan Anda. Dari
              konsultasi hingga representasi, kami bersama Anda setiap langkah
              dalam perjalanan hukum Anda.
            </p>
            <Link
              to='/konsultasi-hukum'
              className='px-2 py-2 bg-slate-900 text-white rounded-lg transition-all duration-300 hover:bg-[#FFB800]'
            >
              Selengkapnya
            </Link>
          </div>
          <div className=''>
            <img src={hero} alt='' />
          </div>
        </div>

        {/* Layanan Kami */}
        <div className='my-[220px]'>
          <h1 className='text-[32px] font-bold mb-6'>Layanan Kami</h1>
          <div className='flex justify-between items-center'>
            {dataFeature.map((item) => (
              <div
                key={item}
                className='flex flex-col items-start w-[440px] gap-5'
              >
                <img src={item.featureImg} alt='' />
                <div className='flex flex-col gap-2'>
                  <h1 className='font-semibold text-[32px]'>
                    {item.featureTitle}
                  </h1>
                  <p>{item.featureDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bantuan Hukum Terpecaya */}
        <div className='my-[220px]'>
          <div>
            <h1 className='text-[32px] font-bold mb-6'>
              Bantuan Hukum Terpecaya
            </h1>
          </div>
          <div className='flex justify-between'>
            {dataLawyer.map((item) => (
              <Link
                to='/register'
                key={item}
                className='w-[440px] px-8 py-6 rounded-xl border-[#D5E0F6] border-2 flex flex-col gap-4 hover:scale-105 transition-all duration-300 hover:cursor-pointer'
              >
                <div className='flex gap-4 items-center'>
                  <img src={item.img} alt='' className='w-[86px]' />
                  <div>
                    <h1 className='font-semibold text-[20px]'>
                      {item.lawyerName}
                    </h1>
                    <p>Konsultan {item.lawyerCategory}</p>
                    <div className='flex items-center gap-2'>
                      <img src={star} alt='' className='' />
                      <p>{item.lawyerRating}</p>
                    </div>
                  </div>
                </div>
                <p>{item.lawyerDesc}</p>
                <div>
                  <div className='flex items-center gap-2'>
                    <img src={linkIcon} alt='' />
                    <p>{item.lawyerLink}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={location} alt='' />
                    <p>{item.lawyerLocation}</p>
                  </div>
                </div>
                <Link
                  to='/register'
                  className='text-[18px] bg-[#FFB800] py-3 text-center text-white rounded-[80px]'
                >
                  Rp. {item.lawyerPrice} / Sesi
                </Link>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className='w-[100%] h-[15vw] bg-[#1D1D1D] flex flex-col justify-center'>
        <div className='container flex flex-col justify-center'>
          <div className='flex justify-between'>
            <Link to='/'>
              <img src={logoSmall} alt='' />
            </Link>
            <div className='flex gap-[120px]'>
              <Link to='/info-hukum' className='text-white text-[20px]'>
                Info Hukum
              </Link>
              <Link to='/tips-hukum' className='text-white text-[20px]'>
                Tips Hukum
              </Link>
              <Link to='/konsultasi-hukum' className='text-white text-[20px]'>
                Konsultasi Hukum
              </Link>
            </div>
          </div>
          <div className='text-center mt-[70px]'>
            <p className='text-white'>Made with 🩷 by Kelompok 7</p>
            <p className='text-white mt-2'>Copyritght 2024.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
