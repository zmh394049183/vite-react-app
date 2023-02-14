import React, { memo } from 'react'
import styles from './index.module.less'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
interface IProps {}
const PageB: React.FC<IProps> = ({}) => {
  console.log(
    '%c [ PageB ]-12',
    'font-size:13px; background:pink; color:#bf2c9f;',
  )
  // 动态路由
  const params = useParams()
  const searchParams = useSearchParams()
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/pagea', {
      replace: false,
      state: {
        name: '123',
      },
    })
  }
  return (
    <div>
      Page-------B
      <div
        onClick={onClick}
        style={{
          cursor: 'pointer',
        }}
      >
        go pageA
      </div>
    </div>
  )
}
export default memo(PageB)
