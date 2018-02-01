import React from 'react';
import { ShotChart } from './ShotChart';
import _ from 'lodash';
import {CountSlider} from "./CountSlider"
import { Radio, Row, Col, Switch } from 'antd';
const RadioGroup = Radio.Group;



export class DataViewContainer extends React.Component {

    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true,
    }

    onCountSliderChagne = (count) => {
        this.setState({ minCount: Number(count) || 2 });

    }

    onChartTypeChange = (e)=>{
        this.setState({chartType:e.target.value})
    }

    onTooltipChange = (displayTooltip) =>{
        this.setState({displayTooltip: displayTooltip});
    }

    render(){
        return(
            <div className= "data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                    displayTooltip = {this.state.displayTooltip}
                />

                <div className ="filter">
                    {this.state.chartType === "hexbin"?
                            <CountSlider onCountSliderChange = {_.debounce(this.onCountSliderChagne, 500)}/> : null}
                            <br/>
                    <Row>
                        <Col span={12} offset={2}>
                            <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={6}>
                            Tooltip:{' '}
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                defaultChecked
                                onChange={this.onTooltipChange}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}