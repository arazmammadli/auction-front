import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { INotification } from "./notification.type";

export type NotificationStoreTypes = {
    notifications: INotification[];
};

type NotificationStoreActions = {
    setNotifications: (notifications: NotificationStoreTypes["notifications"]) => void;
};

export const useNotificationStore = create(
    persist<NotificationStoreTypes & NotificationStoreActions>(
        (set, get) => ({
            notifications: [],
            setNotifications: (notifications) => {
                set({ notifications })
            }
        }),
        {
            name: "notifications-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
);

