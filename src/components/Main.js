import React, { Component } from 'react';

import nba from 'nba';
import {Profile} from "./Profile"
import {DataViewContainer} from "./DataViewContainer"

export class Main extends React.Component{
    state = {
        playerId: nba.findPlayer('Lebron James').playerId,
        playerInfo: {},

    }

    componentDidMount(){
        nba.stats.playerInfo({PlayerID:this.state.playerId}).then((info)=>{
            const playerInfo = Object.assign(info.commonPlayerInfo[0],
                info.playerHeadlineStats[0]);

            this.setState({playerInfo: playerInfo});
        });
    }
    render(){
        return (
            <div className="main">
                <Profile playerInfo = {this.state.playerInfo}/>
                <DataViewContainer playerId = {this.state.playerInfo.playerId}/>

            </div>
        );
    }
}