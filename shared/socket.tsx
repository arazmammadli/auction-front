import * as signalR from "@microsoft/signalr";
import { SOCKET_URL } from "@/config/base";
import { useAuthStore } from "@/components/page-modules/auth/data/auth.store";

type ConnectSocketType = {
    notify: (summary: string, message: string) => string;
    cb: Function;
}

export function connectSocket(args: Partial<ConnectSocketType>) {
    const authState = useAuthStore.getState();
    const { cb, notify } = args;

    const connect = new signalR.HubConnectionBuilder()
        .withUrl(SOCKET_URL as string, {
            accessTokenFactory: () =>
                authState.auth.accessToken!,
        })
        .configureLogging(signalR.LogLevel.None)
        .build();

    // Try to start the connection
    connect
        .start()
        .catch(err => console.error('connectErrr', err));

    connect.on('Send', function (msg) {
        // console.log('msg result  =>', msg);
    });

    connect.on('RefreshAuction', function (data) {
        if (data) {
            if (typeof cb !== "undefined") cb();
            if (typeof notify !== "undefined") notify("Diqqət", data.trim());
        }
    });
    connect.on('RefreshNotification', function (data) {
        // console.log(data, 'Refresh Notification action');
    });

    return connect;
}