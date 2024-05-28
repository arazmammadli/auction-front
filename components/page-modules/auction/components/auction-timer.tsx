'use client';

import { useGetPublicLang } from '@/global/requests/get-public-lang';
import { getDate, getZero } from '@/utils/date';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

type Props = {
  startDate: string;
  endDate: string;
  statusId: number;
  dayTxt: string;
  hourTxt: string;
  minuteTxt: string;
  secondTxt: string;
};

const clearIntervalSafe = (intervalId: ReturnType<typeof setInterval> | null) => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
};

export default function AuctionTimer(props: Props) {
  const {
    endDate,
    startDate,
    statusId,
    dayTxt,
    hourTxt,
    minuteTxt,
    secondTxt
  } = props;

  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    clearIntervalSafe(interval); // Clear previous interval

    switch (statusId) {
      case 0:
        interval = setInterval(() => {
          const now = new Date();
          const start = getDate(String(now));
          const targetTime = getDate(startDate);

          if (start >= targetTime) {
            setDays('00');
            setHours('00');
            setMinutes('00');
            setSeconds('00');
            clearIntervalSafe(interval); // Interval'ı temizle
          } else {
            const timeDiff = targetTime - start;
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            setDays(String(getZero(days)));
            setHours(String(getZero(hours)));
            setMinutes(String(getZero(minutes)));
            setSeconds(String(getZero(seconds)));
          }

        }, 1000);
        break;

      case 1:
        interval = setInterval(() => {
          const now = Date.now();
          const end = getDate(endDate);
          const start = getDate(startDate);
          const distance = end > now && start < now ? end - now : 0;

          if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(String(getZero(days)));
            setHours(String(getZero(hours)));
            setMinutes(String(getZero(minutes)));
            setSeconds(String(getZero(seconds)));
          } else {
            setDays('00');
            setHours('00');
            setMinutes('00');
            setSeconds('00');
          }
        }, 1000);
        break
      default:
        break;
    }

    return () => clearIntervalSafe(interval);
  }, [startDate, endDate, statusId]);

  return (
    <div className={classNames('flex justify-center py-4  mt-4 rounded-lg', {
      ["bg-[radial-gradient(236.15%_138.52%_at_0%_0%,#1B6392_0%,#124261_100%)]"]: statusId === 0,
      ["bg-[radial-gradient(236.15%_138.52%_at_0%_0%,#1B6B16_0%,#248E1D_100%)]"]: statusId === 1,
      ["bg-[#EE5858]"]: statusId === 2
    })}>
      <div className='grid grid-flow-col gap-5 text-center auto-cols-max text-white'>
        <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
          <span className='countdown md:text-3xl lg:text-4xl'>
            <span>{days}</span>
          </span>
          {dayTxt}
        </div>
        <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
          <span className='countdown md:text-3xl lg:text-4xl'>
            <span>{hours}</span>
          </span>
          {hourTxt}
        </div>
        <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
          <span className='countdown md:text-3xl lg:text-4xl'>
            <span>{minutes}</span>
          </span>
          {minuteTxt}
        </div>
        <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
          <span className='countdown md:text-3xl lg:text-4xl'>
            <span>{seconds}</span>
          </span>
          {secondTxt}
        </div>
      </div>
    </div>
  );
}
