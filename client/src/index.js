import ReactDOM from 'react-dom'
import React from 'react'
import App from './app'
import {Provider} from 'react-redux'
import reducerRoot from './reducers'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import registerServiceWorker from './registerServiceWorker'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducerRoot,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
registerServiceWorker()