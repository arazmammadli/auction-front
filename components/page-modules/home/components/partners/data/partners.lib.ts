import {partnersRequest} from "@/page-modules/home/components/partners/data/partners.request";

export async function getPartners(){
    const response = await partnersRequest.getPartners();
    return response;
}