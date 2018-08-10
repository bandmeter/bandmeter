import React, { Component } from 'react';
import { ReactMic } from 'react-mic';

class Record extends Coponent{
    state = {
        record: false,
        save: false
    }
backgroundColor
    startRecording = () =>{
        this.setState({record:true})
    }

    stopRecording = () =>{
        this.setState({record:false});
    }

    saveRecording = () =>{
        this.setState({save:true});
    }

    onSave = () =>{
        this.setState({
            save:false,
            recordedBlob: recordedBlob
        });
    }

    onStop = () =>{
        console.log('recordedBlob is: ', recordedBlob)
    }
    render(){
        const {record, save} = this.state;
        return(
            <div>
                <ReactMic
                    record={record}
                    save={save}
                    className='sound-wave'
                    onSave={this.onSave}
                    onStop={this.onStop}
                    strokeColor='#000000'
                    backgroundColor='#ff4081'/>
                <button onTouchTap={this.startRecording} type='button'>Start</button>
                <button onTouchTap={this.stopRecording} type='button'>Stop</button>
                <button onTouchTap={this.saveRecording} type='button'>Save</button>
            </div>
        )
    }
}

export default Record;