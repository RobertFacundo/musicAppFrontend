import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./shared/config/queryClient"
import './index.css'
import './App.css'
import './shared/components/Loader/loader.css'
import App from './App.tsx'
import { persistor, store } from './shared/redux/store.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeInitializer } from './shared/theme/ThemeInitializer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <ThemeInitializer>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </ThemeInitializer>
       </PersistGate>
     </Provider>
  </StrictMode>,
)
