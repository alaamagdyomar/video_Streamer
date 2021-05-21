import React from 'react';

class GoogleAuth extends React.Component { 
    state = {
        isSignedIn: null
    }

 // initialize the client portion in that component to and load it from google library 
        componentDidMount(){
            window.gapi.load('client:auth2',()=>{
                window.gapi.client.init({
                    clientId:'852779477527-uiquoj1igepnpnkl5kbiic9f54r8ccip.apps.googleusercontent.com',
                    scope:'email'
                }).then(()=>{
                    // get ref fot the auth obj.
                    this.auth = window.gapi.auth2.getAuthInstance();
                    // trigger the state value of {isSign in or not }
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    // add a listen to the callback func to notify my by the state of signed in 
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
            });
       }

       renderAuthbutton () {
           if ( this.state.isSignedIn === null ){
               return <div> i dont know if u r signed in or not </div>;
           } else if ( this.state.isSignedIn ){
                return <div> u r signed in </div>;
           } else {
               return <div> u r not signed in </div>
           }
       }

       // identify check function for the signed in case 

       onAuthChange = () => {
            this.setState({isSignedIn:this.auth.isSignedIn.get()})
       }

    render (){
        return <div>{this.renderAuthbutton()}</div>
    }
};

export default GoogleAuth;