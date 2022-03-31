import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';

class DishDetail extends Component {
 

  renderDish(dish) {
   return (
    <div className="col-12 col-md-6">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </Card>
    </div>
   );
  }

  renderComment(comments) {
    return (
      <div className="col-12 col-md-5">
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

  render() {

      if (this.props.dish !== null) {
        return (
          <div className="container">
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComment(this.props.dish.comments)}
            </div>
          </div>
        );
  
      } else {
        return (
          <div></div>
        );
      }
    }
}

export default DishDetail;