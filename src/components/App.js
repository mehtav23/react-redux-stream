import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

import Header from './Header';
import LoaderComponent from './Loader';
import createBrowserHistory from '../history';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router history={createBrowserHistory}>
                    <div>
                    <Header />
                    <LoaderComponent isLoading={this.props.isLoading}/>
                    <Switch>
                    <Route path="/" exact component= {StreamList} />
                    <Route path="/streams/new/" exact component= {StreamCreate} /> 
                    <Route path="/streams/edit/:id" exact component= {StreamEdit} /> 
                    <Route path="/streams/delete/:id" exact component= {StreamDelete} /> 
                    <Route path="/streams/:id" exact component= {StreamShow} /> 
                    </Switch>
                    </div>
                </Router>
            </div>
        )
    }    
}

const mapStateToProps = (state) =>{
    return { isLoading: state.appState.isLoading};
}

export default connect(mapStateToProps)(App);