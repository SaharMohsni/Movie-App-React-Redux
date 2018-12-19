import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import{connect} from "react-redux"
import {addMovie} from '../Action/MOVIE_ACTION'
import uuidv1 from "uuid";

class AddMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            isModalVisible:false,
        
        }
    }
    handleClose = () => {
        this.setState({ isModalVisible: false });
        return console.log("testclose")
      }
    
      handleShow = () => {
        this.setState({ isModalVisible: true });
        return console.log("test")
      }

      handelInputs = (e) => {
          this.setState({
              [e.target.name] : e.target.value
          })
      }
      handelSubmit = (event) => {
        event.preventDefault();
        const id =uuidv1();
        const  newMovie  = this.state;
        newMovie.id = id
        this.props.addMovie(newMovie)
        this.setState({newMovie: "" });
      }
    render() {
        return (
            <div className="newMovie">
                <button className=" btnadd " onClick={this.handleShow} >&#10012;</button>
                    <Modal show={this.state.isModalVisible} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add a New Movie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="addnewmovie">
                            <label>Link:</label> <input name="picture" onChange={this.handelInputs}></input>
                            <label>Title:</label> <input name="title" onChange={this.handelInputs}></input>
                            <label>Descrption:</label> <input name="label" onChange={this.handelInputs}></input>
                            <label>Rate:</label> <input name="rate" onChange={this.handelInputs}></input>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button onClick={this.handelSubmit} >Save</Button>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

            </div>
        )
    }
}  
    
const mapDispatchToProps = dispatch =>({
    addMovie: (newMovie) => dispatch(addMovie(newMovie))
})
const ConnectedAddMovieForm=connect(null,mapDispatchToProps)(AddMovie);
export default  ConnectedAddMovieForm