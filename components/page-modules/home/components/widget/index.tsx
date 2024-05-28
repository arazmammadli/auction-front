"use client"
import { ClientOnly } from "@/components/layout/client-only";
import {Suspense,lazy} from "react";
import {WidgetLoading} from "@/page-modules/home/components/widget/components/loading";

const WidgetConatiner = lazy(() => import('@/page-modules/home/components/widget/container/widget.container'));

export function Widget() {
    return (
        <div className="w-full mb-6">
            <ClientOnly>
                <Suspense fallback={<WidgetLoading></WidgetLoading>}>
                    <WidgetConatiner />
                </Suspense>
            </ClientOnly>
        </div>
    )
};