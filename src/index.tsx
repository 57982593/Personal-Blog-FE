import 'antd/dist/antd.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import Iframe from './iframe';
import { BrowserRouter } from 'react-router-dom';

const isIframe = window.top !== window.self;
const ReactNode = (<React.StrictMode>
    <BrowserRouter>
        <App></App>
    </BrowserRouter>    
</React.StrictMode>);
const RenderElement = !isIframe ? ReactNode:(<Iframe></Iframe>);
ReactDOM.render(
    RenderElement,
document.getElementById( 'root' )
);
