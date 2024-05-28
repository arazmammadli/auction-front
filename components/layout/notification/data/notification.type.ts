import { IUser } from "@/components/page-modules/auth/data/auth.type"

export interface INotification {
    id: string;
    content: string;
    userId: string;
    typeId: number;
    type: INotificationType;
    user: IUser;
    read: boolean;
    deleted: boolean;
    createdDate: string;
    url: string;
}

export interface INotificationType {
    id: number;
    name: string;
}


export interface INotificationsQuery {
    limit: number;
    pageParam: number;
    read?: boolean;
}

export interface INotificationResponse {
    list: INotification[];
    count: number;
}