import React, {Component} from 'react'
import './loaderHOC.css'
const LoaderHOC = (propsName) => (WarppedComponent) =>{
    return class LoaderHOC extends Component{
        constructor(props){
            super(props)
            this.state={
                displayLoader:true
            }
        }
        componentDidMount = () =>
            setTimeout(() => {
                this.setState({
                    displayLoader:false
                })
            }, 2000); 
        
        render(){
            return this.state.displayLoader ? <div className="loader"></div> : <WarppedComponent {...this.props}/>
        }
    }
}
export default LoaderHOC