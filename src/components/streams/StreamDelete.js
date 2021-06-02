import React from 'react';
import { connect } from 'react-redux';
import { fetchStream , deleteStream } from '../../actions'
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';

  class StreamDelete extends React.Component {
      componentDidMount(){
            this.props.fetchStream(this.props.match.params.id);
      }

    renderActions(){

      const { id } = this.props.match.params;
      
      return  (
          <React.Fragment>
            <button 
            onClick={()=> this.props.deleteStream(id)}
            className="ui button negative">
              Delete
              </button>
            <Link
              to="/" 
              className="ui button">
                Cancel 
            </Link>
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

export default connect( mapStateToProps ,{ fetchStream , deleteStream })(StreamDelete);
