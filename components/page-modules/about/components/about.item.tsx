import Image from 'next/image';
import Link from 'next/link';

type Props = {
  img: string;
  name: string;
  position: string;
  linkedin: string;
};

export function OurTeamItem(props: Props) {
  const { img, name, position, linkedin } = props;

  return (
    <div className='p-6 rounded border border-solid border-[#E4E7E9]'>
      <div className='flex flex-row items-center gap-4'>
        <Image
          src={img}
          alt={name}
          className='w-16 h-16 rounded-[50%] object-cover'
          width='64'
          height='64'
        />
        <div className='flex flex-col gap-[6px]'>
          {
            <Link href={`https://linkedin.com/in/${linkedin}`}>
              <h3 className='text-base font-semibold leading-6 text-[#191c1f]'>{name}</h3>
            </Link>
          }
          <p className='text-sm font-normal leading-5 text-[#475156]'>{position}</p>
        </div>
      </div>
    </div>
  );
}
