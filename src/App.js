import { createContext, useReducer } from 'react';
import './App.css';

// class
//import Counter1 from './components/class/Counter1';
//import CounterDocument from './components/class/CounterDocument';
import ClassMouse from './components/class/ClassMouse';

//import Timer from './components/class/Timer';

// hooks
// import Counter1 from './components/hooks/Counter1';
// import Counter2 from './components/hooks/Counter2';
// import Counter3 from './components/hooks/Counter3';
// import Counter4 from './components/hooks/Counter4';
//import CounterDocument from './components/hooks/CounterDocument';
import HookMouse from './components/hooks/HookMouse';
import MouseContainer from './components/hooks/MouseContainer';
import IntervalHookCounter from './components/hooks/IntervalHookCounter';
import DataFetching from './components/hooks/DataFetching';

// import ComponentC from './components/hooks/context/ComponentC';
// import CounterOne from './components/hooks/reducer/CounterOne';
// import CounterTwo from './components/hooks/reducer/CounterTwo';
// import CounterThree from './components/hooks/reducer/CounterThree';

import ComponentA from './components/hooks/contextReducer/ComponentA';
import ComponentB from './components/hooks/contextReducer/ComponentB';
import ComponentC from './components/hooks/contextReducer/ComponentC';

import DataFetchingOne from './components/hooks/DataFetching/DataFetchingOne';
import DataFetchingTwo from './components/hooks/DataFetching/DataFetchingTwo';

import ParentComponent from './components/hooks/callBack/ParentComponent';

import Counter from './components/hooks/memo/Counter';

import FocusInput from './components/hooks/refs/FocusInput';
import Timer from './components/hooks/refs/Timer';

// Custom Hooks
import DocTitleOne from './components/hooks/customHooks/docTitle/DocTitleOne';
import DocTitleTwo from './components/hooks/customHooks/docTitle/DocTitleTwo';
import CounterOne from './components/hooks/customHooks/counter/CounterOne';
import CounterTwo from './components/hooks/customHooks/counter/CounterTwo';
import UserForm from './components/hooks/customHooks/userForm/UserForm';

export const UserContext = createContext();
export const ChannelContext = createContext();

export const CountContext = createContext(); 

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
     {/* <ClassMouse /> */}
     <HookMouse />
     {/* <MouseContainer /> */}
     {/* <IntervalHookCounter /> */}
     {/* <DataFetching /> */}

     {/* <UserContext.Provider value={'Shiva'}>
      <ChannelContext.Provider value={'CodeCollege'}>
        <ComponentC />
      </ChannelContext.Provider>
     </UserContext.Provider> */}

     {/* <CounterOne /> */}
     {/* <CounterTwo /> */}
     {/* <CounterThree /> */}

     {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        Count - { count }
        <ComponentA />
        <ComponentB />
        <ComponentC />
     </CountContext.Provider> */}

     {/* <DataFetchingOne /> */}
     {/* <DataFetchingTwo /> */}

     {/* <ParentComponent /> */}

     <Counter />

     <FocusInput />

     <TimerOne />

     {/* <DocTitleOne />
     <DocTitleTwo /> */}

     <CounterOne />
     <CounterTwo />

     <UserForm />
    </div>
  );
}

export default App;
