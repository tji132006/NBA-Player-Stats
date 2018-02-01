import React from 'react';
import { ShotChart } from './ShotChart';
import { Slider, InputNumber, Row, Col } from 'antd';
import {CountSlider} from "./CountSlider"

export class DataViewContainer extends React.Component {

    state = {
        minCount: 2,
    }

    onCountSliderChagne = (count) => {
        this.setState({minCount: count});

    }
    render(){
        return(
            <div className= "data-view">
                <ShotChart playerId={this.props.playerId} minCount = {this.state.minCount}/>
                <div className ="filter">
                    <CountSlider onCountSliderChange = {this.onCountSliderChagne}/>
                </div>
            </div>
        );
    }
}