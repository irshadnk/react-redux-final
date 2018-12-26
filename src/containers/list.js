import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ItemComponent from '../components/item';
import {fetchItem, fetchMore} from '../actions/search';
import nav_bar from '../Slices/nav_bar.png'
export default class ListDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {movieList:[], page:0 }
	}
    
    componentDidMount() {
		this.props.store.dispatch(fetchItem());
        this.props.store.subscribe( ()=> {
			this.setState({
				movieList: this.props.store.getState(),
				page:this.state.page+1
			});
		});
		document.addEventListener('scroll', this.trackScrolling);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.trackScrolling);
	}
	
	isBottom(el) {
		//console.log(el.getBoundingClientRect().bottom )
		return el.getBoundingClientRect().bottom <= window.innerHeight;
	}

	isTop(el) {
		return el.getBoundingClientRect().bottom < 100 && el.getBoundingClientRect().bottom > 0;
	}

	trackScrolling = () => {
		const wrappedElement = document.getElementById('searchDiv');
		if (this.isBottom(wrappedElement)) {
			this.props.store.dispatch(fetchMore(this.state.page));
			ReactDOM.render(<img  src={nav_bar} /> , document.getElementById('scrollimage'));
			//document.removeEventListener('scroll', this.trackScrolling);
		}
		if (this.isTop(wrappedElement)) {
			ReactDOM.render("", document.getElementById('scrollimage'));
		}
	};

	render() {
		var list  = this.props.store.getState().list, rows =[],
		search = this.props.store.getState().search, content;
		if(search.searchedname){
			content = search.page['content-items'].content;
		} else {
			content = list.page['content-items'].content;
		}
		
		for(let i=0; i< content.length;i=i+3) {
			rows.push(<div class="flex mb-4 pl-set">
				<ItemComponent content={content[i]} key={i}  />			
				{content[(i+1)] && <ItemComponent content={content[(i+1)]}  key={(i+1)}  />} 
				{content[(i+2)] && <ItemComponent content={content[(i+2)]}  key={(i+2)}  />} 
			</div>	)
		}
		
		return (
			<React.Fragment>
				{rows}
			</React.Fragment>
		) 
	}
} 