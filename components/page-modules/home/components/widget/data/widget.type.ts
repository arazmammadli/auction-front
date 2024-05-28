export type WidgetResponseType = IWidget[]

export interface IWidget {
    id: number
    title: string
    link: string
    image: string
    content:string
    btnName: string
    isDisabled: boolean
    created_date: string
};
