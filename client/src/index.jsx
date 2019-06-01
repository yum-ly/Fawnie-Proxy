import React from 'react';
import ReactDOM from'react-dom';

class Proxy extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Info/>
            </div>
        )
    }

}

ReactDOM.render(<Proxy/>, document.getElementById('root'));
