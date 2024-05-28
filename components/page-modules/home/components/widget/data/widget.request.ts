import { requestInstanceClient } from "@/config/request"
import { WidgetResponseType } from "./widget.type"

export const widgetRequest = {

    getWidgets: () => {
        return requestInstanceClient.get<WidgetResponseType>("/Posters");
    }

};