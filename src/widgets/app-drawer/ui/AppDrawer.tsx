import { useAppDrawer } from '../hooks'

export const AppDrawer = () => {
    const { isOpen, open, close } = useAppDrawer()

    if (isOpen) {
        return (
            <div>
                <h1>App Drawer</h1>
                <button onClick={close}>Close</button>
            </div>
        )
    }

    return (
        <div>
            <h1>App Drawer</h1>
            <button onClick={open}>Open</button>
        </div>
    )
}
