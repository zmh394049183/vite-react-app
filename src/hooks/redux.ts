import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  shallowEqual,
} from 'react-redux'
import type { RootState, AppDispatch } from '../store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useShallowEqualSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector, shallowEqual)
