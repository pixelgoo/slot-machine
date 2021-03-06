import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from '../store/reducers'

import ReelsContainer from './ReelsContainer'
import SpinButton from './SpinButton'
import Balance from './Balance';
import PayTable from './PayTable';
import DebugArea from './DebugArea';
import { modesConfig, reelsPositionConfig, slotPlacementConfig } from '../store/configs'

function configureStore() {
  const store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
  return store;
}

export default function App() {
  return (
    <Provider store={ configureStore() }>

      <div className='app-container'>

        <div className='play-area'>
          <h1 className='play-area__title'>Slot Machine</h1>
          <ReelsContainer />
          <SpinButton />
        </div>

        <div className='info-area'>
          <Balance />
          <PayTable />
        </div>
        
        <DebugArea 
          modesConfig={modesConfig}
          reelsPositionConfig={reelsPositionConfig}
          slotPlacementConfig={slotPlacementConfig}
        />

      </div>
      
    </Provider>
  )
}
