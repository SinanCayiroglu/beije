"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '../redux/storage'
import { PersistGate } from 'redux-persist/integration/react'

const ReduxProvider = ({children}:any) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      {children}
      </PersistGate>
        
    </Provider>
  )
}

export default ReduxProvider