import { IBlogs, ICategory } from "./blog.type";

export const BLOG_LIMIT = 4;

export const filterData = {
    category: [
        {
            id: 1,
            name: "Electronics Devices"
        },
        {
            id: 2,
            name: "Computer & Laptop"
        },
        {
            id: 3,
            name: "Computer Accessories"
        },
        {
            id: 4,
            name: "SmartPhone"
        },
        {
            id: 5,
            name: "Headphone"
        }, {
            id: 6,
            name: "Mobile Accessories"
        },
        {
            id: 7,
            name: "Gaming Console"
        },
        {
            id: 8,
            name: "Camera & Photo"
        }
    ],
    latestBlog:[
        {
            id:"1",
            img:"latest-blog.png",
            title:"Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
            createdAt:"28 Nov, 2015"
        },
        {
            id:"2",
            img:"latest-blog.png",
            title:"Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
            createdAt:"28 Nov, 2015"
        },
        {
            id:"3",
            img:"latest-blog.png",
            title:"Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
            createdAt:"28 Nov, 2015"
        }
    ],
    tags: [
        {
            id:1,
            name:"Game"
        },
        {
            id:2,
            name:"iPhone"
        },
        {
            id:3,
            name:"TV"
        },
        {
            id:4,
            name:"Asus Laptops"
        },
        {
            id:5,
            name:"Macbook "
        },
        {
            id:6,
            name:"SSD"
        },
        {
            id:7,
            name:"Graphics Card"
        },
        {
            id:8,
            name:"Speaker"
        },
        {
            id:9,
            name:"Tablet"
        },
        {
            id:10,
            name:"Microwave"
        },
        {
            id:11,
            name:"Samsung"
        },
        {
            id:12,
            name:"Power Bank "
        }
    ]
};

export const initialBlogState:IBlogs =  {
    title: "",
    image: "",
    category_slug: "",
    category_name: "",
    slug: "",
    created_date: "",
    modified_date: "",
};

export const initialCategoryState:ICategory =  {
    name: "",
    slug: "",
    created_date: ""
};