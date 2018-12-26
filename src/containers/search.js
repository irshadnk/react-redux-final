import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import backArrow from '../Slices/Back.png';
import searchimg from '../Slices/search.png';
import {searchItem, clearSearch} from '../actions/search';

export default class searchComponent extends React.Component {
	constructor(props) {
		super(props);
		this.showSearchbox = this.showSearchbox.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onBack = this.onBack.bind(this);
		
		this.state = {
			searchOn: false
		}
	}
	showSearchbox() {
		if(this.state.searchOn) {
			ReactDOM.render("", document.getElementById('searchDiv'));
			this.setState({
				searchOn: false
			});
		} else {
			const elem  = <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" 
			type="text" placeholder="Search here" aria-label="Search here" onChange={this.handleChange}></input>
			ReactDOM.render(elem, document.getElementById('searchDiv'));
			this.setState({
				searchOn: true
			});
		}
	}
	handleChange(event) {
		var searchkey = event.target.value;
		this.props.store.dispatch(searchItem(searchkey));
	}

	onBack() {
		this.props.store.dispatch(clearSearch());
		ReactDOM.render("", document.getElementById('searchDiv'));
	}
	
	render() {
		return (
		<React.Fragment>
		<div class="flex" id ="scrollimage" style={{position:'fixed', marginTop: '-20px'}}></div>
		<div class="flex my-4 pl-set h-ht">
			<div class="w-1/2">
				<div class="flex">
					<div class="w-1/4" onClick = {this.onBack}>
						<img  src={backArrow} alt="back" style={{width:'20px'}} />
					</div>
					<div class="w-3/4">
						<p>Romantic Comedy</p>
					</div>
				</div>
			</div>
			<div class="w-1/2">
				<div class="flex">
					<div class="w-3/4" id ="searchDiv">
					</div>
					<div class="w-1/4" onClick={this.showSearchbox}>
						<img  src={searchimg} alt="back" style={{width:'20px'}} />
					</div>
				</div>
			</div>
		</div>
		</React.Fragment>
		) 
	}
} 

/*1. Debug info is getting printed on to the console
2. 'Search here' input box is not visible & is not getting hidden when the user clicks on the search icon again.
3. Margins are wrong for the thumbnail listing (Left & right are more obvious)
4. Lazy loading is not working - seems like only one set of JSON is getting loaded on to the UI

Will it be possible for you to correct these by today EOD? Also, please share the link to the hosted source code on GitHub.
*/