import React from 'react'
import ImageCard from './ImageCard'
import '../style/ResultList.css'
class ResultList extends React.Component{
    getImages(data){
        return data.map(img=>{
            return <ImageCard key={img.id} data={img}/>
        })
    }
    render(){
        return(
            <div className='result-list'>{this.getImages(this.props.data)}</div>
        )
    }
}
export default ResultList