import { useState } from 'react'

export const useAppDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    return {
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    }
}
