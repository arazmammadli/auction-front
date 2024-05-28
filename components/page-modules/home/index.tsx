import { Widget } from '@/page-modules/home/components/widget';
import { Features } from '@/page-modules/home/components/features';
import { Blogs } from '@/page-modules/home/components/blogs';
import { NewsLetter } from '@/page-modules/home/components/news-letter';
import { Container } from '@/components/common/container';
import { Auction } from '../auction';
import { LangType } from '@/global/types/lang.type';
import {Partners} from "@/page-modules/home/components/partners";

type Props = {
    lang:LangType;
};

export async function Home(props: Props) {
    const { lang } = props;
    return (
        <div className='w-full mt-6'>
            <Container>
                <Widget />
                <Features lang={lang} />
                <Auction lang={lang} />
            </Container>

            <div className='w-full bg-[#F2F4F5] py-[72px]'>
                <Container>
                    <Blogs lang={lang} />
                </Container>
            </div>
            <div className='w-full bg-[#1B6392] py-[72px]'>
                <Container>
                    <NewsLetter lang={lang} />
                </Container>
            </div>
            <div className="w-full py-[72px]">
                <Container>
                    <Partners lang={lang}/>
                </Container>
            </div>
        </div>
    );
}
