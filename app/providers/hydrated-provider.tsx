import { PropsWithChildren } from 'react'
import getQueryClient from '@/shared/query-client'
import { dehydrate, Hydrate } from '@tanstack/react-query'
import { QueryFns } from '@/global/types/query.type';

type Props = {
    queryFns: QueryFns[];
    queryKeys: string[][];
} & PropsWithChildren;

export default async function HydratedProvider({ children, queryFns, queryKeys }: Props) {
    const queryClient = getQueryClient()

    const queries = queryFns.map((query, index) => {
        const key = queryKeys[index];
        return {
            queryKey: key,
            queryFn: query.queryFn,
            queryType: query.prefetchType
        }
    });

    await Promise.all(
        queries.map(async (query) => {
            const { queryFn, queryKey, queryType } = query;

            if (queryType === "query") {
                await queryClient.prefetchQuery(queryKey, queryFn);
            } else if (queryType === "infiniteQuery") {
                await queryClient.prefetchInfiniteQuery(queryKey, queryFn);
            } 
        })
    );

    const dehydratedState = dehydrate(queryClient);


    return (
        <Hydrate state={dehydratedState}>
            {children}
        </Hydrate>
    )
};