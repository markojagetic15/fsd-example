import { ListingType } from '../model'

export const getListingTitle = (listing: ListingType) => {
    return listing.title
}

export const getListingDescription = (listing: ListingType) => {
    return listing.description
}

export const getListingAddress = (listing: ListingType) => {
    return `${listing.address.street}, ${listing.address.city}, ${listing.address.country}`
}

export const getListingZip = (listing: ListingType) => {
    return listing.address.zip
}

export const getListingCity = (listing: ListingType) => {
    return listing.address.city
}

export const getListingCountry = (listing: ListingType) => {
    return listing.address.country
}

export const getListingStreet = (listing: ListingType) => {
    return listing.address.street
}

export const getListingImages = (listing: ListingType) => {
    return listing.images
}
