export type PrivacyPolicyType = {
    head: string
    location: string
    desc: string
    data: PrivacyPolicyDataType[]
}

export type PrivacyPolicyDataType = {
    id: number
    head: string
    contents: ContentType[]
}

type ContentType = {
    id: number
    info: string
}
