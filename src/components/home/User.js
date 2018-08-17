import React , { Component } from 'react';
import Draggable from 'react-draggable';
import Resizable from 're-resizable';

class User extends Component{

    render(){
        return(
            <Draggable
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <Resizable
                    defaultSize={{
                        width:320,
                        height:200,
                    }}
                >
                    <div className="handle">Drag from here</div>
                    <div className="userData">
                        <img src={this.props.imageUrl} />
                        <p>{this.props.userName}</p>
                    </div>
                </Resizable>
            </Draggable>
        )
    }
}

export default User;