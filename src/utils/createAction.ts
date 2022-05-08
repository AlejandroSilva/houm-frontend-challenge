// helper utility to create an action, it's only a object builder, but with toString replaced
// it's the same used by redux-toolkit: https://redux-toolkit.js.org/api/createAction

export type Action<Type, Payload> = {
  type: Type
  payload?: Payload
}

export const createAction = <Type extends string>(type: Type) => {
  const _createAction = <Payload>(payload?: Payload) : Action<Type, Payload> => ({
    type,
    payload
  })
  _createAction.toString = () => `${type}`
  _createAction.type = type
  return _createAction
}
