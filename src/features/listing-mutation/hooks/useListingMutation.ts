export const useListingMutation = () => {
    const createListing = () => {
        console.log('createListing')
    }

    const updateListing = () => {
        console.log('updateListing')
    }

    const deleteListing = () => {
        console.log('deleteListing')
    }

    return {
        createListing,
        updateListing,
        deleteListing,
    }
}
