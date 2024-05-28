'use client';

import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { BiRepeat } from 'react-icons/bi';
import { PiArrowRightBold } from 'react-icons/pi';
import { useAuthStore } from '../data/auth.store';
import { FormEvent, useEffect, useState } from 'react';
import { Interval } from '@/components/common/interval';
import { useOtpConfirm } from '../hooks/otp-confirm.hook';
import { useOtpSend } from '../hooks/otp-send.hook';
import { FormEntries } from '@/utils/mixed.utils';
import { IConfirmPhone } from '../data/auth.type';
import { otpConfirmValidator } from '../validators/otp-confirm.validator';
import { useNotify } from '@/global/hooks/notify.hook';
import { Toast } from '@/components/common/toast';
import { useParams, useRouter } from 'next/navigation';
import { otpSendValidator } from '../validators/otp-send.validator';

export function VerifyPhoneContainer() {
  // state
  const authState = useAuthStore((state) => ({
    user: state.user,
    setTimeout: state.setTimeOut,
    timeout: state.timeout,
    phoneForOtp: state.phoneForOtp,
  }));

  const [seconds, setSeconds] = useState(authState.timeout);

  // requests
  const otpConfirmRequest = useOtpConfirm();
  const sendOtpRequest = useOtpSend();

  // hooks
  const pushNotify = useNotify();

  const router = useRouter();
  const params = useParams();
  const lang = params.lang;

  function setInterval() {
    setSeconds((seconds) => seconds - 1);
    authState.setTimeout(seconds);
  }

  // navigate after successfuly request
  useEffect(() => {
    let timer: NodeJS.Timer;

    if (otpConfirmRequest.isSuccess) {
      timer = setTimeout(() => {
        router.push(`/${lang}/sign-in`);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [otpConfirmRequest.isSuccess]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form = FormEntries<IConfirmPhone>(e.target);
    form.phone = authState.phoneForOtp!;

    otpConfirmValidator({
      form,
      notify: pushNotify.notify,
      cb: () => {
        pushNotify.promiseNotify(otpConfirmRequest.mutateAsync(form), {
          error: (data) =>
            data.response.status === 422 ? 'Incorrect OTP' : 'Something went wrong...',
          loadingText: 'Confirming...',
          successText: 'Successfully!',
        });
      },
    });
  };

  const handleResend = async () => {
    const form = {
      phone: authState.phoneForOtp!,
    };

    otpSendValidator({
      form,
      notify: pushNotify.notify,
      cb: () => {
        pushNotify.promiseNotify(sendOtpRequest.mutateAsync(form), {
          error: (data) => data.response.data.msg,
          loadingText: 'Confirming...',
          successText: 'Successfully!',
        });
      },
    });
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='w-full flex justify-between items-center text-center'>
        <h1 className='text-xl font-semibold leading-5 text-[#191c1f] mb-3'>
          Verify Your Phone
        </h1>
        <div className='w-[50px] h-[50px] border-2 rounded-full border-green-600 flex justify-center items-center'>
          <Interval interval={1000} seconds={seconds} cb={setInterval} />
        </div>
      </div>
      <div className='w-full'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <div className='w-full'>
            <div className='flex justify-between items-center mb-2'>
              <label
                htmlFor='verification-code'
                className='block text-sm font-normal leading-5 text-[#191c1f]'
              >
                Verification Code
              </label>
            </div>
            <Input type='text' id='code' name='code' />
          </div>
          <div className='w-full flex gap-2'>
            <Button
              type='button'
              onClick={handleResend}
              disabled={seconds > 0}
              width='w-full'
              bgColor='bg-green-600'
            >
              <span className='text-sm text-white font-bold leading-[48px] uppercase'>
                Resend
              </span>
              <BiRepeat color='#fff' size='22px' />
            </Button>
            <Button width='w-full' type='submit'>
              <span className='text-sm text-white font-bold leading-[48px] uppercase'>
                Verify me
              </span>
              <PiArrowRightBold color='#fff' size='22px' />
            </Button>
          </div>
        </form>
      </div>
      <Toast />
    </div>
  );
}
