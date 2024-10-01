export interface ListingType {
    id: string
    title: string
    description: string
    images: Image[]
    address: Address
}

export interface Image {
    id: string
    url: string
}

export interface Address {
    id: string
    city: string
    country: string
    street: string
    zip: string
}
