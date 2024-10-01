import { ListingType } from '../model'
import {
    getListingCity,
    getListingCountry,
    getListingDescription,
    getListingImages,
    getListingStreet,
    getListingTitle,
} from '../lib'

interface Props {
    listing: ListingType
}

export const Listing = (props: Props) => {
    const { listing } = props
    return (
        <div>
            <h1>{getListingTitle(listing)}</h1>
            <p>{getListingDescription(listing)}</p>
            <p>
                {getListingStreet(listing)}, {getListingCity(listing)},{' '}
                {getListingCountry(listing)}
            </p>
            <ul>
                {getListingImages(listing).map((image) => (
                    <li key={image.id}>
                        <img src={image.url} alt="Listing" />
                    </li>
                ))}
            </ul>
        </div>
    )
}
