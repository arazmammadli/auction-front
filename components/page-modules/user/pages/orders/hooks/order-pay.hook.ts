import { useMutation } from "@tanstack/react-query";
import { ordersRequest } from "../data/orders.request";
import { OrderPay } from "../data/orders.type";

export function useOrderPay() {

    const query = useMutation({
        mutationKey: ["orderPay"],
        mutationFn: ordersRequest.payOrder,
        onSuccess: (data, variables) => {
            if (data) {
                if (variables.payType === OrderPay.OneTime && data.redirectUrl) {
                    return window.location.replace(data.redirectUrl);
                }

                if (variables.payType === OrderPay.SavedCard) {
                    return window.location.replace(`${window.location.pathname}?result=success`);
                }
            }
        },
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    };

};