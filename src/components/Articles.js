import React from "react";

class Articles extends React.Component {
	constructor() {
		super();
		this.state = {
			totalPages: 0,
			isLoaded: false,
			pageData: [],
			buttons: [],
			articles: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonmock.hackerrank.com/api/articles?page=1")
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					totalPages: json.total_pages,
					pageData: json.data,
				});
			})
			.then(this.createButtons)
			.then(this.createArticles)
	}

	handleClick = async id => {
		this.setState({
			isLoaded: false,
		});

		try {
			const res = await fetch(`https://jsonmock.hackerrank.com/api/articles?page=${id + 1}`)
			const json = await res.json()
	
			this.setState({
				pageData: json.data,
				isLoaded: true
			})
	
			this.createArticles()
		} catch (err) {
			console.log(err);
		}
	};

	createButtons = () => {
		const newButtons = [];
		for (let i = 0; i < this.state.totalPages; i++) {
			newButtons.push(
				<button
					key={i + 1}
					onClick={() => this.handleClick(i)}
				>{i + 1}</button>
			);
		}
		this.setState({
			buttons: newButtons,
		});
	};

	createArticles = () => {
		const newArticles = [];
		for (let i = 0; i < this.state.pageData.length; i++) {
			if (this.state.pageData[i].title != null && this.state.pageData[i].title != '') {
				newArticles.push(
					<li 
						key={i}
					>{this.state.pageData[i].title}</li>
				);
			}
		}
		this.setState({
			articles: newArticles
		})
	}

	render() {
		const { isLoaded } = this.state;

		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<React.Fragment>
					<h1>News Articles</h1>
					<div className="pagination">
						{this.state.buttons}
					</div>
					<ul className="results">
						{this.state.articles}
					</ul>
				</React.Fragment>
			);
		}
	}
}

export default Articles;