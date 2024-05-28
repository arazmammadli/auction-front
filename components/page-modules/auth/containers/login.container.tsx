'use client';
import { Input } from '@/components/common/input';
import { SocialButton } from '@/components/page-modules/auth/components/social.button';
import { PiArrowRight } from 'react-icons/pi';
import { FcGoogle } from 'react-icons/fc';
import { OutlinedButton } from '@/components/common/outlined.button';
import { Line } from '@/components/page-modules/auth/components/auth.line';
import { useLogin } from '../hooks/login.hook';
import { useNotify } from '@/global/hooks/notify.hook';
import { useParams, useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { IAuth } from '../data/auth.type';
import { FormEntries } from '@/utils/mixed.utils';
import { loginValidator } from '../validators/login.validator';

import { Toast } from '@/components/common/toast';
import { LangType } from '@/global/types/lang.type';

export function LoginContainer() {
  // hooks
  const loginRequest = useLogin();
  const pushNotify = useNotify();

  const router = useRouter();
  const params = useParams();
  const lang = params.lang as LangType;

  // navigate after successfuly request
  useEffect(() => {
    let timer: NodeJS.Timer;

    if (loginRequest.isSuccess) {
      timer = setTimeout(() => {
        router.push(`/${lang}/user`);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [loginRequest.isSuccess]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form = FormEntries<IAuth>(e.target);
    form.providerId = String(Date.now());

    loginValidator({
      form,
      notify: pushNotify.notify,
      cb: () => {
        pushNotify.promiseNotify(loginRequest.mutateAsync(form), {
          error: (data) => data.response.data.msg,
          loadingText: 'Login...',
          successText: 'Successfully!',
        });
      },
    });
  };

  return (
    <div className='w-full flex flex-col gap-6'>
      <div className='block'>
        <h1 className='text-xl font-semibold leading-5 text-[#191c1f] text-center mb-5'>
          Sign in to your account
        </h1>
        <div className='w-full'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='w-full'>
              <Input type='text' label='Phone' id='username' name='username' placeholder='e.g. 994xxxxxxx' />
            </div>
            <div className='w-full'>
              <Input type='password' isForget={true} label='Password' id='password' name='password' />
            </div>
            <div className='w-full'>
              <button
                type='submit'
                className='w-full flex justify-center items-center px-6 gap-2 rounded-sm bg-[#FA8232]'
              >
                <span className='text-sm font-bold leading-[48px] uppercase text-white'>
                  Login
                </span>
                <PiArrowRight size='20px' color='#fff' />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <Line text='Don’t have account' />
        <div className='w-full'>
          <OutlinedButton type='link' href='/sign-up' borderClr='border-[#FFE7D6]'>
            <span className='text-sm font-bold leading-[48px] text-[#FA8232] uppercase'>
              Create account
            </span>
          </OutlinedButton>
        </div>
      </div>

      <Toast />
    </div>
  );
}
