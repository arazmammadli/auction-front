'use client';

import Link from 'next/link';
import { Input } from '@/components/common/input';
import { SocialButton } from '@/components/page-modules/auth/components/social.button';
import { Button } from '@/components/common/button';
import { Line } from '@/components/page-modules/auth/components/auth.line';
import { FcGoogle } from 'react-icons/fc';
import { PiArrowRightBold } from 'react-icons/pi';
import { registerFields } from '../data/auth.repository';
import { FormEvent, useEffect } from 'react';
import { FormEntries } from '@/utils/mixed.utils';
import { useRegister } from '../hooks/register.hook';
import { useNotify } from '@/global/hooks/notify.hook';
import { Toast } from '@/components/common/toast';
import { registerValidator } from '../validators/register.validator';
import { useAuthStore } from '../data/auth.store';
import { useParams, useRouter } from 'next/navigation';
import type { IRegister } from '../data/auth.type';
import { LangType } from '@/global/types/lang.type';

export function RegisterContainer() {
  // hooks
  const registerRequest = useRegister();
  const pushNotify = useNotify();

  const router = useRouter();
  const params = useParams();
  const lang = params.lang as LangType;

  // navigate after successfuly request
  useEffect(() => {
    let timer: NodeJS.Timer;

    if (registerRequest.isSuccess) {
      timer = setTimeout(() => {
        router.push(`/${lang}/verify-phone`);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [registerRequest.isSuccess]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form = FormEntries<IRegister>(e.target);
    registerValidator({
      form,
      notify: pushNotify.notify,
      cb: () => {
        pushNotify.promiseNotify(registerRequest.mutateAsync(form), {
          error: (data) => data.response.data.msg,
          loadingText: 'Registering...',
          successText: 'Successfully!',
        });
      },
    });
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='w-full'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {registerFields.map((field, index) => (
            <div className='w-full' key={index}>
              <Input
                name={field.name}
                id={field.name}
                type={field.type as any}
                label={field.label}
                placeholder={field.placeholder}
              />
            </div>
          ))}
          <div className='flex gap-2'>
            <div className='flex h-6 items-center'>
              <input
                id='agree'
                name='agree'
                type='checkbox'
                className='h-5 w-5 rounded-sm text-[#FA8232] focus:ring-0 focus:ring-offset-0'
              />
            </div>
            <div className='block'>
              <p className='text-sm font-normal leading-5 text-[#475156]'>
                Are you agree to Clicon{' '}
                <Link href='/terms-condition' className='font-medium text-[#2DA5F3]'>
                  Terms of Condition
                </Link>{' '}
                and{' '}
                <Link href='/privacy-policy' className='font-medium text-[#2DA5F3]'>
                  Privacy Policy.
                </Link>
              </p>
            </div>
          </div>

          <div className='w-full'>
            <Button width='w-full' type='submit'>
              <span className='text-sm text-white font-bold leading-[48px] uppercase'>
                Sign up
              </span>
              <PiArrowRightBold color='#fff' size='22px' />
            </Button>
          </div>
          <div className='flex flex-col gap-3'>
            <Line text='or' />
            <div className='w-full'>
              <SocialButton icon={<FcGoogle size='20px' />} text='Sign up with Google' />
            </div>
          </div>
        </form>
      </div>

      <Toast />
    </div>
  );
}
