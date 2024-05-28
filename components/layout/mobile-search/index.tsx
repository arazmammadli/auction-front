import {MobileSearchContainer} from "@/components/layout/mobile-search/container/mobile-search-container";

type Props = {
    close: () => void;
}

export function MobileSearch({close}:Props) {
    return <MobileSearchContainer close={close}/>
};