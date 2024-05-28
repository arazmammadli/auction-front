import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getDictionary } from "@/utils/dictionary";
import { LangType } from "../types/lang.type";

export function useGetPublicLang() {

    const params = useParams()

    const query = useQuery(["getLang"], () => getDictionary(params.lang as LangType));

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data!,
        query
    }
};