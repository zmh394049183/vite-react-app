import { lazy, createElement, Suspense, FC } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Layout from '@/Layout'
const PageA = lazy(() => import('@/pages/PageA'))
const PageB = lazy(() => import('@/pages/PageB'))
const getComponent = (Ele: FC) => {
  return <Suspense fallback={<div>loading</div>}>{<Ele />}</Suspense>
}
const routes = [
  {
    path: '/',
    element: createElement(Layout),
    children: [
      {
        path: 'pagea',
        element: getComponent(PageA),
      },
      {
        path: 'pageb/:id',
        element: getComponent(PageB),
      },
    ],
  },
]

const router = createBrowserRouter(routes)
export default router
