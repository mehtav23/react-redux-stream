import React from 'react';
import  { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamCreate extends React.Component {
  onSubmit= (formvalues) => {
    this.props.createStream(formvalues);
    
  }
  
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <br/>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}


export default connect(
  null,
  { createStream }
)(StreamCreate);