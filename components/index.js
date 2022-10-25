import React from 'react';
import './components/Stackoverflow/css/index.css';
import Main from './components/Stackoverflow/Main';
import Sidebar from './Sidebar.js';

function index() {
    return (
        <div className="stack-index">
            <div className="stack-index-content">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}

export default index;