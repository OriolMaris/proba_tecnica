import React, { createContext, useContext } from 'react'

import type DataStore from './DataStore'

const DataContext = createContext<{ _dataStore: DataStore } | null>(null)

export const useDataContext = () => {
  return useContext(DataContext)
}

/* HOC to inject store to any functional or class component */
export const withDataContext =
  <P extends object>(Component: React.ComponentType<P>) =>
  (props: P) => {
    return <Component {...props} _dataContext={useDataContext()} />
  }

export default DataContext
