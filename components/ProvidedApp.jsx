"use client"

import React from 'react'
import { store } from '@/app/store';
import { Provider } from "react-redux";

const ProvidedApp = ({ children }) => {
  return (
    <Provider store={store} >{children}</Provider>
  )
}

export default ProvidedApp