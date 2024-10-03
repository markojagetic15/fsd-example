import React, { createContext } from 'react'
import Axios from 'axios'
import AxiosInstance = Axios.AxiosInstance

export type AxiosContextType = {
    axios: AxiosInstance
}

export const AxiosContext = createContext<AxiosContextType>({
    axios: Axios,
})

export const AxiosProvider = ({
    children,
}: React.PropsWithChildren<unknown>) => {
    return React.createElement(
        AxiosContext.Provider,
        {
            value: {
                axios: Axios,
            },
        },
        children
    )
}
