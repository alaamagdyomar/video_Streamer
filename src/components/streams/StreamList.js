import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

  componentDidMount(){
    this.props.fetchStreams();
  }

  renderList (){
    return this.props.streams.map(stream=>{
      return (
        <div className="item" key={stream.id}>
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
   return { streams : Object.values(state.streams)}
};

export default connect(mapStateToProps , { fetchStreams })(StreamList);
