import React, { useContext } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {
  StateClass,
  UseStateFun,
  FormController as SignUpForm,
  DidMountClass,
  UseEffectFun,
  UseContextFun,
  UseCallBackFun,
  UseRefFunc,
  UseMemoFun,
} from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* switch render only one component at a time */}
          <Route exact path="/use-state" component={UseStateFun} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/did-mount" component={DidMountClass} />
          <Route exact path="/use-effect" component={UseEffectFun} />
          <Route exact path="/use-context" component={UseContextFun} />
          <Route exact path="/use-callback" component={UseCallBackFun} />
          <Route exact path="/use-memo" component={UseMemoFun} />
          <Route exact path="/use-ref" component={UseRefFunc} />
          <Route path="/" component={StateClass} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
