import { AxiosProvider } from './app/providers/AxiosProvider.ts'
import { Routing } from './app/Router.tsx'

function App() {
    return (
        <AxiosProvider>
            <Routing />
        </AxiosProvider>
    )
}

export default App
