import { requestInstanceClient } from "@/config/request"
import { INotificationResponse, INotificationsQuery } from "./notification.type";

export const notificationRequest = {
    getNotifications: async (
        { limit = 4, pageParam = 0, read = false }: Partial<INotificationsQuery>
    ) => {
        const data = await requestInstanceClient.get<INotificationResponse>(`/Notification?Limit=${limit}&Offset=${pageParam}&Read=${read}`);
        return {
            ...data,
            prevOffset: pageParam
        }
    },

    readNotification: (data: {
        id: string;
        read: boolean;
    }) => {
        return requestInstanceClient.patch<any, { id: string, read: boolean }>("/Notification", data);
    }
}