import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

  componentDidMount(){
    this.props.fetchStreams();
  }

  renderButtons (stream){
    if ( stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
            <button className="ui button primary">Edit</button>
            <button className="ui button negative">Delete</button>
        </div>
      );
    }
}


  renderList (){
    return this.props.streams.map(stream=>{
      return (
        <div className="item" key={stream.id}>
          {this.renderButtons(stream)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {stream.title}
            <div className="description"> {stream.description}</div>
          </div>
        </div>
      );
    })
  }

  

  render () {
    return (
      <div className="ui celled list">
        <h2>streams List</h2>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   return { 
     streams : Object.values(state.streams),
     currentUserId: state.auth.userId
    }
};

export default connect(mapStateToProps , { fetchStreams })(StreamList);
