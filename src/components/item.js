import React, {Component} from 'react';
import errimg from '../Slices/placeholder_for_missing_posters.png';
export default class ItemComponent extends Component {
    render() {
        var graphImage;
        try{
            graphImage = require('../Slices/' + this.props.content['poster-image'])
        }catch(e) {}
        return(
            <div class="w-1/3 ">
                <img class="i-set i-btm" src={graphImage} onerror = {errimg}/>
                <div class="t-btm">{this.props.content.name}</div>
            </div>
        )
    }
}