import { Input } from '../../../shared/ui/Input'

export const CreateListing = () => {
    return (
        <div>
            <h1>Create Listing</h1>
            <form>
                <label>
                    Title
                    <Input type="text" />
                </label>
                <label>
                    Description
                    <textarea />
                </label>
                <Input type="submit">Create</Input>
            </form>
        </div>
    )
}
