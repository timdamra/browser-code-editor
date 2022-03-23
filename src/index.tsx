import 'bulmaswatch/superhero/bulmaswatch.min.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './state';
// import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                {/* <CodeCell /> */}
                <TextEditor />
            </div>
        </Provider>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// from iframe to window use "parent" api
// from window into iframe use "iframe.contentWindow" api
// adding sandbox property on "iframe" disallows communication 
    //between window (parent) and the child iframe
