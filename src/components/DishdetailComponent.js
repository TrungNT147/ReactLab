import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  function RenderDish({dish}) {
   return (
    <div className="col-12">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </Card>
    </div>
   );
  }

  function RenderComments({comments}) {
    return (
      <div className="col-12">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
              <div key={comment.id} className="mt-2">   
                  <p>{comment.comment}</p>
                  -- {comment.author},{comment.date}
              </div>
          );
        })}

      </div>
    ); 
  }

  const  DishDetail = (props) => {
      return (
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
    );
 }
  


export default DishDetail;