import React, { memo } from 'react'
import styles from './index.module.less'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
interface IProps {}
export async function loader() {
  // const result = await fetch('http://127.0.0.1:3000/test')
  return { result: true }
}
const Layout: React.FC<IProps> = ({}) => {
  const data = useLoaderData()
  console.log(
    '%c [ data ]-11',
    'font-size:13px; background:pink; color:#bf2c9f;',
    data,
  )
  return (
    <div>
      <div className={styles.header}>
        <NavLink to="pagea?id=1">pageA</NavLink>
        --------
        <NavLink to={'pageb/1'}>pageB</NavLink>
      </div>
      <Outlet />
    </div>
  )
}
export default memo(Layout)
