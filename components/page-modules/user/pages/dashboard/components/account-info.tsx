import { OutlinedButton } from '@/components/common/outlined.button';
import Image from 'next/image';

type Props = {
  displayName: string;
  phoneNumber: string;
  email: string;
  account_info_head: string;
  account_info_btn: string;
  account_info_email: string;
  account_info_phone: string;
};

export function AccountInfo(props: Props) {
  return (
    <div className='w-full rounded border border-solid border-[#E4E7E9]'>
      <div className='bg-white py-4 pl-6 rounded-t border-b border-solid border-[#E4E7E9]'>
        <h1 className='text-sm font-medium leading-5 text-[#191c1f] uppercase'>
          {props.account_info_head}
        </h1>
      </div>
      <div className='flex flex-col gap-[22px] py-6 pl-6'>
        <div className='flex flex-col gap-2'>
          <div className='w-full'>
            <h1 className='text-sm font-medium leading-5 text-[#191c1f]'>
              {props?.displayName}
            </h1>
          </div>
          <div className='flex flex-row gap-1 items-center'>
            <h3 className='text-sm font-normal leading-5 text-[#191c1f]'>{props.account_info_email}:</h3>
            <p className='text-sm font-normal leading-5 text-[#5F6C72]'>{props?.email}</p>
          </div>
          <div className='flex flex-row gap-1 items-center'>
            <h3 className='text-sm font-normal leading-5 text-[#191c1f]'>{props.account_info_phone}:</h3>
            <p className='text-sm font-normal leading-5 text-[#5F6C72]'>
              +{props?.phoneNumber}
            </p>
          </div>
        </div>
        <div className='w-fit'>
          <OutlinedButton type='link' href='/user/setting' borderClr='border-[#D5EDFD]'>
            <span className='text-sm font-bold leading-[48px] text-[#2DA5F3] uppercase'>
              {props.account_info_btn}
            </span>
          </OutlinedButton>
        </div>
      </div>
    </div>
  );
}
