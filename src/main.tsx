import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import store from './store'
import router from './router'

import './global.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider
      router={router}
      fallbackElement={<div>loading</div>}
    ></RouterProvider>
  </Provider>,
)
