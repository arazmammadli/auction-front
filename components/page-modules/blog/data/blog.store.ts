import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";
import { IBlogs, ICategory } from "./blog.type";
import { initialBlogState, initialCategoryState } from "./blog.repository";

export type BlogStoreTypes = {
    blogs: IBlogs[];
    categories: ICategory[];
};

type BlogStoreActions = {
    setBlogs: (blogs: BlogStoreTypes["blogs"]) => void;
    setCategories: (categories: BlogStoreTypes["categories"]) => void;

}

export const useBlogStore = create(
    persist<BlogStoreTypes & BlogStoreActions>(
        (set, get) => ({
            blogs: [initialBlogState],
            categories: [initialCategoryState],
            setBlogs: (blogs) => {
                set({ blogs })
            },
            setCategories: (categories) => {
                set({categories})
            }
        }),
        {
            name: "blogs-state",
            storage: createJSONStorage(() => localStorage)
        }
    )
)