import React from 'react'
class ImageCard extends React.Component{
    constructor(props){
        super(props)
        this.state={spans:0}
        this.imageref = React.createRef()
        this.setSpan = this.setSpan.bind(this)
    }
    componentDidMount(){
        this.imageref.current.addEventListener('load', this.setSpan)
    }
    setSpan(){
        const height = this.imageref.current.clientHeight
        const span = Math.ceil(height/10)
        this.setState({spans:span})
    }
    render(){
        const{description, urls} = this.props.data
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageref} src={urls.regular} alt={description}/>
            </div>
        )
    }
}
export default ImageCard