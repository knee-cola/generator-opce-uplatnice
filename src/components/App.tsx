import * as Redux from 'redux';
import * as React from 'react';
import { Provider } from 'react-redux';

// import { ConnectedLoadDialog } from 'LoadDialogContainer';
// import { ConnectedSaveDialog } from 'SaveDialogContainer';
// import { Forma } from 'Forma';
import { reducer } from '../redux/reducers';

const store = Redux.createStore(reducer);

const App:React.FC = () => {

    return(
        <>
            <Provider store={store}>
                abcd
            </Provider>
        </>);
}

export default App;