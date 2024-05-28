import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IWidget } from "./widget.type";
import { initialWidgetState } from "./widget.repository";

export type WidgetStoreTypes = {
    widgets: IWidget[]
};

type WidgetStoreActions = {
    setWidgets: (widgets: WidgetStoreTypes["widgets"]) => void;
};

export const useWidgetStore = create(
    persist<WidgetStoreTypes & WidgetStoreActions>(
        (set, get) => ({
            widgets: [initialWidgetState],
            setWidgets: (widgets) => {
                set({ widgets })
            },
        }),
        {
            name: "widget-store",
            storage: createJSONStorage(() => localStorage)
        }
    )
);