import React from 'react';
import { ShotChart } from './ShotChart';
import { Slider, InputNumber, Row, Col } from 'antd';
import {CountSlider} from "./CountSlider"

export class DataViewContainer extends React.Component {

    state = {
        inputValue: 1,
    }
    onChange = (value) => {
        this.setState({
            inputValue: value,
        });
    }
    render(){
        return(
            <div className= "data-view">
                <ShotChart playerId={this.props.playerId}/>
                <div className ="filter">
                    <CountSlider/>
                </div>
            </div>
        );
    }
}