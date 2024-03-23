import { useState, useContext, createContext } from 'react'

function connect(mapStateToProps, mapDispatchToProps){
  return function withConnect(WrapperComponent) {
    return props => {
      const store = React.useContext(ReduxContext)
      const [state, setState] = React.useState({
        ...mapStateToProps(store.getState()),
        ...mapDispatchToProps(store.dispatch, props)
      })

      useEffect(() => {
        store.subscribe(() => {
          setState((state) => ({
            ...state,
            ...store.getState()
          }))
        })
      },[WrapperComponent])

      return <WrapperComponent {...props} {...state} />
    }
  }
}

function createSore(reducer, initState={}){
  state = initState;
  listeners = []

  function subscribe(listener){
    listeners.push(listener)
  }

  function dispatch(value, actions){
    const newState = reducer(value, actions, state);
    state = newState;
    listeners.forEach(listener => listener());
  }

  function getState(){
    return state
  }

  return {
    subscribe,
    dispatch,
    getState
  }

}

function reducer(value, actions, state){
  switch(actions.type){
    case 'add':
      return {...state, count: value}
    default:
      return state
  }
}

export const ReduxContext = createContext()

export default function ReduxProvider(props){
  return <ReduxContext.Provider store={props.store}>
    {props.children}
  </ReduxContext.Provider>
}


