export type FaqType = FaqContent[]

export interface FaqContent {
    key: string
    label: string
    children: string
}