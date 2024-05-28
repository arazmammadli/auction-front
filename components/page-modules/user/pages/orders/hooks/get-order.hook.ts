import { useQuery } from "@tanstack/react-query";
import { ordersRequest } from "../data/orders.request";
import { useParams } from "next/navigation";

export function useGetOrder() {

    // hooks
    const params = useParams();
    const id = params.id as string;

    // query
    const query = useQuery(
        ["getAuctionOrder"],
        () => ordersRequest.getOrder(id),
        {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }
    );

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        query
    }
};