import Link from "next/link";
import classNames from "classnames";
import { useParams } from "next/navigation";


type Props = {
    path: string;
    head: string;
    icon: React.ReactNode;
    active: boolean;
}

export function MenuItem(props: Props) {
    const params = useParams();

    const { path, head, icon, active } = props;

    return <Link href={`/${params.lang}${path}`} locale={params.lang as string} as={`/${params.lang}${path}`} className={classNames('flex flex-row items-center text-[#5f6c72] gap-2', {
        ["text-[#FA8232] font-medium"]: active
    })}>
        {icon}
        <span className='text-sm leading-5'>{head}</span>
    </Link>
}