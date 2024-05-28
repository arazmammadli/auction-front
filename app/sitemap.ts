import {auctionRequest} from "@/page-modules/auction/data/auction.request";
import {cookies} from "next/headers";
import {AuthStoreTypes} from "@/page-modules/auth/data/auth.store";
import {getBlogs} from "@/page-modules/home/components/blogs/lib/get-blogs";

export default async function sitemap() {
    const baseUrl = "https://mybid.az";
    const cookiesStore = cookies();
    const auth = cookiesStore.get("auth-storage");

    // Function to create URL objects
    const createUrlObject = (slug:string, type:string) => ({
        url: `${baseUrl}/${type}/${slug}`,
        lastModified: new Date(),
    });

    // Get Auction from CMS
    let auctionsUrls:{url: string, lastModified: Date}[] = [];
    if(auth) {
        const authType: { state:AuthStoreTypes } = JSON.parse(auth.value);
        const accessToken = authType.state.auth.accessToken;
        const {list:auctions} = await auctionRequest.getAuctions({},accessToken);
        auctionsUrls = auctions?.map((auction) => createUrlObject(auction.slug,"auction")) || [];
    }

    // Get New from CMS
    const {list:posts} = await getBlogs(20);
    const postsUrls = posts?.map((post) => createUrlObject(post.slug,"blog")) || [];

    // Create and return the sitemap array
    return [
        {
            url:baseUrl,
            lastModified:new Date()
        },
        ...auctionsUrls,
        ...postsUrls
    ]

};