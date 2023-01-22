import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:byrongomezjr@protonmail.com?subject=${formData.subject}&body=Hi Byron, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-3xl font-semibold text-center'>
          {' '}
          <span className='decoration-[#84FF57]/50 underline'>
            Let&apos;s Connect.
          </span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center justify-center space-x-5'>
            <PhoneIcon className='text-[#84FF57] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+1 862-304-0265</p>
          </div>

          <div>
            <div className='flex items-center justify-center space-x-5'>
              <EnvelopeIcon className='text-[#84FF57] h-7 w-7 animate-pulse' />
              <p className='text-2xl'>byrongomezjr@protonmail.com</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col mx-auto space-y-2 w-fit'
        >
          <div className='flex space-x-2'>
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
            className='bg-[#84FF57]/60 py-5 px-10 rounded-md text-[#242424] font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;