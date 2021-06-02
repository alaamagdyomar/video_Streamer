import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions'
import Modal from '../Modal';
import history from '../../history';

  class StreamDelete extends React.Component {
      componentDidMount(){
            this.props.fetchStream(this.props.match.params.id);
      }

    renderActions(){
        return  (
          <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
          </React.Fragment>
        );
      }
    renderContent(){
      if(!this.props.stream){
        return  'loading...!'
      } return  `r u sure u want to delete ${this.props.stream.title}`
    }

    render(){
        return (
          <div>
            StreamDelete
            <Modal
              title="Delete Stream"
              content={this.renderContent()}
              actions={this.renderActions()}
              onDismiss={() => history.push('/')}
            />
          </div>
        )
      }
    };

    const mapStateToProps = (state , ownProps) => {
      return { stream : state.streams[ownProps.match.params.id]}
    }

export default connect( mapStateToProps ,{ fetchStream })(StreamDelete);
