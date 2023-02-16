import { useAppSelector, useAppDispatch } from '@/hooks'
import React, { memo, Suspense, useState } from 'react'
import {
  useMatch,
  useSearchParams,
  useNavigate,
  useLocation,
  useNavigation,
} from 'react-router-dom'
import styles from './index.module.less'
import {
  decrement,
  increment,
  incrementByAmount,
  asyncAddCounter,
} from '@/store/counterSlice'
import { RenderProps } from '@/components'
const PageA: React.FC = () => {
  const [urlSearchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const navigation = useNavigation()
  const counterValue = useAppSelector(({ counter: { value } }) => value)
  const dispatch = useAppDispatch()
  const [name, setName] = useState<CPN.RenderP['name']>('')
  const onClick = () => {
    navigate('/pageb/2')
  }
  return (
    <div>
      <RenderProps name={name}>
        {(setAge) => <div onClick={() => setAge(10)}>ttt</div>}
      </RenderProps>
      Page-------A
      <div
        onClick={onClick}
        style={{
          cursor: 'pointer',
        }}
      >
        go pageB
      </div>
      <div>------redux-toolkit------</div>
      <div>counterValue -----{counterValue}</div>
      <div>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
        <button onClick={() => dispatch(asyncAddCounter(10))}>async +10</button>
      </div>
    </div>
  )
}
export default memo(PageA)
