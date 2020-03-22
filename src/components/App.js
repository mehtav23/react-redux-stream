import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

import Header from './Header';
import LoaderComponent from './Loader';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                    <Header />
                    <LoaderComponent isLoading={this.props.isLoading}/>
                    <Route path="/" exact component= {StreamList} />
                    <Route path="/stream/new" component= {StreamCreate} /> 
                    <Route path="/stream/edit" component= {StreamEdit} /> 
                    <Route path="/stream/delete" component= {StreamDelete} /> 
                    <Route path="/stream/show" component= {StreamShow} /> 
                    </div>
                </BrowserRouter>
            </div>
        )
    }    
}

const mapStateToProps = (state) =>{
    return { isLoading: state.appState.isLoading};
}

export default connect(mapStateToProps)(App);