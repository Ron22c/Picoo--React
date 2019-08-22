import React from 'react'
class Search extends React.Component{
    constructor(){
        super()
        this.state={term:''}
        this.getSubmit = this.getSubmit.bind(this)
    }
    getSubmit(event){
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    getChange =(event)=>{
        this.setState({term:event.target.value})
    }
    render(){
        return(
        <div className="ui segment" style={{top:'10px'}}>
            <form className="ui form" onSubmit={this.getSubmit}>
                <div className="prompt">
                    <label className="ui red ribbon label">SEARCH</label>
                    <input type="text" value={this.state.term} onChange={this.getChange}/>
                </div>
            </form>
        </div>
        )
    }
}
export default Search