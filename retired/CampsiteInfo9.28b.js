import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

    
        this.state = {
            author: '',

            isModalOpen: false
        };
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.campsiteId, values.rating, values.author, values.text);
    }

    render() {
        return (
            <div>
                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Label htmlFor="rating" md={2}>Rating</Label>
                                <Row className="form-group">
                                    <Col md={10}>
                                        <Control.select model=".rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                            <Label htmlFor="author" md={4}>Your Name</Label>
                                <Row className="form-group">
                                    <Col md={10}>
                                        <Control.textarea model=".author" id="author" name="author" rows="1"
                                                className="form-control" 
                                                validators={{
                                                    required, 
                                                    minLength: minLength(2),
                                                    maxLength: maxLength(15)
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".author"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                    </Col>
                                </Row>
                                <Label htmlFor="text" md={2}>Comment</Label>
                                    <Row className="form-group">
                                    <Col md={10}>
                                        <Control.textarea model=".text" id="text" name="text"
                                            rows="6"
                                            className="form-control"
                                        />
                                </Col>
                                </Row>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                 </Modal>
                <Button onClick={this.toggleModal}><i className="fa fa-pencil fa-lg" />Submit Comment</Button>
            </div>
        )
    }
}




function RenderCampsite({campsite}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card> 
        </div>
    );
}

function RenderComments({comments, addComment, campsiteId}) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comments => {
                    return (
                        <div key={comments.id}>
                            <p>{comments.text}<br />
                            - {comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                        </div>
                    );
                })}
                <CommentForm campsiteId={campsiteId} addComment={addComment} />
            </div>
        );
    }
    return <div />;
}


    function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.campsite.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments 
                        comments={props.comments}
                        addComment={props.addComment}
                        campsiteId={props.campsite.id}
                    />
                    </div>
                </div>
            );
    }
    return <div />;
    }


export default CampsiteInfo;
