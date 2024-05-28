export interface ICardsResponse {
    successed: boolean;
    msg: string;
    link: string;
};

export interface ICard {
    confirmed: boolean;
    content: string;
    date: string;
    modified_date: string;
    name: string;
    public_token: string;
    status: boolean;
    userId: string;
};

export interface IConfirmCardsRequest {
    userId: string;
    token: string;
};

export interface IConfirmCardsResponse {
    card_register_link:string;
    msg:string;
    status:boolean;
};

export interface IActivateCardsResponse {
    success:boolean;
    statusCode:number;
    msg:string;
}