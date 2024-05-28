import { INotificationResponse, INotificationsQuery } from "@/components/layout/notification/data/notification.type";
import { requestInstanceClient } from "@/config/request";

export const userNotificationsRequest = {
    getAllNotifications: async (
        { limit = 10, pageParam = 0, read }: Partial<INotificationsQuery>
    ) => {
        const data = await requestInstanceClient.get<INotificationResponse>(`/Notification?Limit=${limit}&Offset=${pageParam}`);
        return {
            ...data,
            prevOffset: pageParam
        }
    },
}