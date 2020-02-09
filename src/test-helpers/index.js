import React from 'react'
import { Provider } from 'react-redux'
import createStore from 'store';
import { render, fireEvent } from '@testing-library/react'

// Test state
const initialState = {};

// Helper method to render connected components for tests with redux.
export const renderWithRedux = (
  ui,
  { initialState, store = createStore() } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}