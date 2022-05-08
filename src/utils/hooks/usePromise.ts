import { useReducer } from 'react'

import { createAction } from '../createAction'

type AsyncMethod<T> = (...args: any[]) => Promise<T>

const initialState = {
  status: 'IDLE',
  data: undefined,
  error: undefined,
}

const pendingAction = createAction('PENDING')
const doneAction = createAction('DONE')
const errorAction = createAction('ERROR')

// @ts-ignore
const promiseReducer = (state, action) => {
  switch (action.type) {
    case pendingAction.type:
      return { status: 'PENDING', data: initialState.data, error: initialState.error}
    case doneAction.type:
      return { status: 'DONE', data: action.payload, error: initialState.error}
    case errorAction.type:
      return { status: 'ERROR', data: initialState.data, error: action.payload}
    default:
      return state
  }
}

type UsePromise<Result> = {
  status: string
  data: Result
  error: any
  fetch: any
}

export const usePromise = <Result>(asyncMethod: AsyncMethod<Result>) : UsePromise<Result> => {
  const [state, dispatch] = useReducer(promiseReducer, initialState)

  const fetch = (...args: any[]) => {
    dispatch(pendingAction())
    return asyncMethod([...args])
      .then(res => {
        dispatch(doneAction(res))
        return res
      })
      .catch(error => dispatch(errorAction(error)))
  }
  return {
    status: state.status,
    data: state.data,
    error: '',
    fetch
  }
}