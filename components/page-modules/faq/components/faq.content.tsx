import { Collapse } from 'antd';
import { FaqType } from '../data/faq.type';

type Props = {
    head: string;
    data: FaqType;
}

export function FaqContent(props: Props) {
    const { data, head } = props;
    return (
        <div className="w-full">
            <div className="mb-10">
                <h1 className="text-[32px] font-semibold leading-10 text-[#191c1f]">{head}</h1>
            </div>
            <div className="w-full">
                <Collapse className='flex flex-col gap-5 bg-white' accordion bordered={false} expandIconPosition='end' items={data} />
            </div>
        </div>
    )
}