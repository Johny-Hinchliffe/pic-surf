import React from 'react'

// class SearchBar extends React.Component {
// 	onInputChange(event) {
// 		console.log(event.target.value)
// 	}
// 	// onInputClick(event) {
// 	// 	console.log('You clicked me')
// 	// }
// 	render() {
// 		return (
// 			<div className="ui segment">
// 				<form className="ui form">
// 					<div className="field">
// 						<label>Image Search</label>
// 						<input
// 							type="text"
// 							onChange={this.onInputChange}
// 							/*onClick={this.onInputClick}*/
// 						></input>
// 					</div>
// 				</form>
// 			</div>
// 		)
// 	}
// }

class SearchBar extends React.Component {
	state = { term: '' }

	onFormSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state.term)
	}
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							placeholder="Whatcha Looking for?"
							type="text"
							value={this.state.term}
							onChange={(e) =>
								this.setState({ term: e.target.value})
							}
						></input>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar
