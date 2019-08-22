import React from 'react'
import Search from './Search'
import unsplash from '../api/unsplash'
import ResultList from './ResultList'
class App extends React.Component{
    constructor(){
        super()
        this.state = {images:[]}
        this.getSubmit = this.getSubmit.bind(this)
    }
    async getSubmit(data){
        const response= await unsplash.get('/search/photos',{
            params:{
                query:data,
                per_page:30
            }
        })
        this.setState({images:response.data.results})
    }
    render(){
        return(
            <div className="ui container">
                <Search onSubmit={this.getSubmit}/>
                <ResultList data={this.state.images}/>
            </div>
        )
    }
}
export default App