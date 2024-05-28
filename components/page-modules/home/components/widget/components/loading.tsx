import {Skeleton} from "@/components/common/skeleton";

function WidgetLoading() {
    return (
        <div className="w-full relative">
            <Skeleton width="100%" height="500px"/>
        </div>
    )
}

export {WidgetLoading};