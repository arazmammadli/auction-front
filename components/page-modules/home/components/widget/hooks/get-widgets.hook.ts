import { useQuery } from "@tanstack/react-query";
import { useWidgetStore } from "../data/widget.store";
import { widgetRequest } from "../data/widget.request";

export function useGetWidgets() {
    const widgetState = useWidgetStore((state) => ({
        setWidgets: state.setWidgets
    }))

    const query = useQuery(["getWidgets"], widgetRequest.getWidgets, {
        onSuccess: (data) => {
            if (data) {
                widgetState.setWidgets(data);
            }
        }
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        query
    }
};