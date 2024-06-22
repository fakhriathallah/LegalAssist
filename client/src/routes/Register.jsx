import React from 'react';
import logoBig from '../images/logo-big.png';
import { Link } from 'react-router-dom';
import arrowBack from '../images/arrow_back.png';

function Register() {
  return (
    <div className='w-[100%] flex justify-between'>
      <div className='w-[50%] flex items-center justify-center 0'>
        <div className='w-[60%]  flex flex-col items-start justify-start'>
          <Link to='/' className='flex items-center gap-4'>
            <img src={arrowBack} alt='' />
            <h2 className='font-semibold text-[32px]'>Kembali</h2>
          </Link>
          <div className='mt-[60px] mb-[40px]'>
            <h1 className='text-[36px] font-bold'>Buat Akun Baru</h1>
            <p className='text-[20px]'>
              Register today and embark on a thrilling journey filled with
              nostalgia, discovery, and
            </p>
          </div>
          <form class='max-w-sm flex flex-col'>
            <div class='mb-[20px]'>
              <label
                for='email'
                class='block mb-2 font-medium text-[20px] text-gray-900'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div class='mb-[20px]'>
              <label
                for='email'
                class='block mb-2 font-medium text-[20px] text-gray-900'
              >
                Username
              </label>
              <input
                type='text'
                id='email'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div class='mb-[20px]'>
              <label
                for='email'
                class='block mb-2 font-medium text-[20px] text-gray-900'
              >
                Kata Sandi
              </label>
              <input
                type='password'
                id='email'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div class='mb-[20px]'>
              <label
                for='email'
                class='block mb-2 font-medium text-[20px] text-gray-900'
              >
                Konfirmasi Kata Sandi
              </label>
              <input
                type='password'
                id='email'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div class='flex items-start'>
              <div class='flex items-center h-5'>
                <input
                  id='remember'
                  type='checkbox'
                  value=''
                  class='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 '
                  required
                />
              </div>
              <label
                for='remember'
                class='ms-2 text-sm font-medium text-gray-900'
              >
                Dengan mendaftar, Anda menyetujui Syarat dan Ketentuan serta
                Kebijakan Privasi kami.
              </label>
            </div>
            <Link
              to='/konsultasi-hukum/isLoggedIn=true'
              class=' text-white bg-[#FFB800] hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-4'
            >
              Daftar
            </Link>
            <p className='w-full text-center'>
              Sudah punya akun? <Link className='underline'>Masuk</Link>
            </p>
          </form>
        </div>
      </div>
      <div className='flex items-center justify-center bg-slate-950 w-[50%] h-[100vh]'>
        <img src={logoBig} alt='' className='' />
      </div>
    </div>
  );
}

export default Register;
