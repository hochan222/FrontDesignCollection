import React, {Component} from 'react';
import './styles.scss';

class SideBox extends Component {
    state = {
        toggle: false
    }
    sideBoxToggle = () => {
        const { toggle } = this.state
        this.setState({
            toggle: !toggle
        })
    }
    render() {
        const { sideBoxToggle } = this
        const { toggle } = this.state
        return (
            <>
                <div className={toggle?"sideBox sideBox-ani":"sideBox"} onClick={sideBoxToggle}>
                  SideBox              
                </div>
                <div className={toggle?"sideBox-info sideBox-info-ani":"sideBox-info"}>
                   1. Input Box 
                   <br/>
                   <input></input>
                   <br/>
                   2. Input Box
                   <br/>
                   <input></input>
                   <br/>
                   <button>hi</button>
                </div>
            </>
        );
    }
}

export default SideBox;