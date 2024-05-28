import {
  PiMedal,
  PiTruck,
  PiHandshake,
  PiHeadphones,
  PiCreditCard,
} from 'react-icons/pi';

type Props = {
  info: string;
};

export function ProductDescription(props: Props) {
  const { info } = props;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: info }}
      className='w-full px-10 my-20'
    />
  );
}
