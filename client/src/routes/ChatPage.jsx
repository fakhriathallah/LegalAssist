import { React, Fragment } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../images/LegalAssist-White.png';
import profile from '../images/profile-icon.png';
import { Menu, Transition } from '@headlessui/react';
import arrowDown from '../images/arrow_down.png';
import setting from '../images/settings.png';
import contact1 from '../images/contact1.png';
import contact2 from '../images/contact2.png';
import contact3 from '../images/contact3.png';
import clock from '../images/clock.png';
import star from '../images/star2.png';
import search from '../images/search.png';
import textKiri1 from '../images/textkiri1.png';
import textKiri2 from '../images/textkiri2.png';
import textKanan1 from '../images/textkanan1.png';
import emoticon from '../images/emoticon.png';

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

const chatContacts = [
  {
    imgContact: contact1,
    nameContact: 'Jennifer Markus',
    chatContact: 'Halo ada yang bisa dibantu?',
    dayContact: 'Today',
    timeContact: '5:30 PM',
  },
  {
    imgContact: contact3,
    nameContact: 'Jerry Helfer',
    chatContact: 'Ada yang bisa saya bantu?',
    dayContact: 'Today',
    timeContact: '5:30 PM',
  },
  {
    imgContact: contact2,
    nameContact: 'David Elson',
    chatContact: 'Apa Kabar?',
    dayContact: 'Today',
    timeContact: '5:30 PM',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function ChatPage() {
  const isLoggedIn = true;
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
                className='hover:text-[#FFB800] duration-300'
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex gap-4 items-center'>
            {isLoggedIn ? (
              <div>
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

        {/* Chat */}
        <div className='flex gap-2 mt-[45px]'>
          <div className='w-[30%] h-[40vw] rounded-xl border-[#D5E0F6] border-2 flex flex-col gap-4 px-6 py-4'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-2 justify-center'>
                <h1>All Messages</h1>
                <img src={arrowDown} alt='' />
              </div>
              <img src={setting} alt='' />
            </div>
            <div>
              <input
                type='text'
                name=''
                id=''
                placeholder='Search or start a new chat'
                className='w-full rounded-lg'
              />
            </div>
            <div className='flex flex-col gap-4'>
              {chatContacts.map((item) => (
                <div key={item} className='flex items-start justify-between'>
                  <div className='flex items-start gap-3'>
                    <img src={item.imgContact} alt='' />
                    <div>
                      <h1 className='font-bold text-xl'>{item.nameContact}</h1>
                      <p className='text-slate-400'>{item.chatContact}</p>
                      <div className='flex gap-2 items-center'>
                        <img src={clock} alt='' />
                        <p>{item.dayContact}</p>
                        <p>{item.timeContact}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={star} alt='' />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-[70%] h-[40vw] rounded-xl border-[#D5E0F6] border-2 flex flex-col gap-4 px-6 py-3'>
            <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <img src={contact1} alt='' />
                <h1 className='text-bold text-lg'>Jennifer Markus</h1>
              </div>
              <div className='flex items-center'>
                <img src={star} alt='' />
                <img src={search} alt='' />
                <img src={setting} alt='' />
              </div>
            </div>
            <h1 className='text-center'>Today | 04:45 PM</h1>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-[120px] items-start'>
                <img src={textKiri1} alt='' />
                <img src={textKiri1} alt='' />
                <img src={textKiri2} alt='' />
              </div>
              <div className='flex flex-col gap-[120px] my-[120px] items-start'>
                <img src={textKanan1} alt='' />
                <img src={textKanan1} alt='' />
              </div>
            </div>
            <div className='flex items-center'>
              <img src={emoticon} alt='' />
              <input
                type='text'
                name=''
                id=''
                className='rounded-[24px] w-full h-8'
                placeholder='Type your message here'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
