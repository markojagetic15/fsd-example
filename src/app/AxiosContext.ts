import React, { createContext } from 'react'
import Axios from 'axios'
import AxiosInstance = Axios.AxiosInstance

export type AxiosContextType = {
    someAxios: AxiosInstance
}

export const AxiosProvider = createContext<AxiosContextType>({
    someAxios: Axios,
})

export const AxiosContext = ({
    children,
}: React.PropsWithChildren<unknown>) => {
    return React.createElement(
        AxiosProvider.Provider,
        {
            value: {
                someAxios: Axios,
            },
        },
        children
    )
}
