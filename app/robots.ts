
import {MetadataRoute} from "next";

export default function Robots():MetadataRoute.Robots {
    return {
        rules: {
            userAgent:"*",
            allow:"/",
            disallow:"/private/"
        },
        sitemap:"https://mybid.az/sitemap.xml"
    };
}