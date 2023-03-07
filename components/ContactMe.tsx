import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../typings';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:byrongomezjr@protonmail.com?subject=${formData.subject}&body=${formData.message} ${formData.name} (${formData.email})`;
  };

  return (
    <div className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl'>
        Contact
      </h3>

      <div className='relative z-20 flex flex-col space-y-10 overflow-x-scroll overflow-y-hidden w-fit snap-x snap-mandatory'>
        <div className='space-y-4'>
          <div className='flex items-center justify-center space-x-2'>
            <MapPinIcon className='text-[#84FF57] h-8 w-8 animate-pulse' />
            <p className='text-1xl'>Teaneck, New Jersey, US</p>
          </div>

          <div>
            <div className='flex items-center justify-center space-x-2'>
              <EnvelopeIcon className='text-[#84FF57] h-8 w-8 animate-pulse' />
              <p className='text-1xl'>byrongomezjr@protonmail.com</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='relative z-20 flex flex-col mx-auto space-y-2 w-80'
        >
          <div className='flex flex-col space-y-2'>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput'
              type='text'
            />
            <input
              {...register('email')}
              placeholder='E-Mail'
              className='contactInput'
              type='email'
            />
          </div>

          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />

          <textarea
            {...register('message')}
            placeholder='Shoot me a message!'
            className='contactInput'
          ></textarea>
          <button
            type='submit'
            className='bg-[#84FF57]/60 py-5 px-10 rounded-md text-[#000000] font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
