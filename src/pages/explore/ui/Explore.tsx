import { Listing } from '../../../entities/listing'
import { listings } from '../../../listings'

export const Explore = () => {
    return (
        <div>
            <h1>Explore</h1>
            {listings.map((listing) => {
                return <Listing listing={listing} />
            })}
        </div>
    )
}
