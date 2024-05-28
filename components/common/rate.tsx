import { Rate } from 'antd';

type Props = {
    value: number;
}

export function Rating({ value }: Props) {
    return (
        <Rate value={value} disabled={true} count={5} />
    )
}