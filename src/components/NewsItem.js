import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export class NewsItem extends Component {

  // let {title} = props;
  // constructor(){       //it runs after the render function
  //   super();

  // }

  render() {

    let {title, description, imageUrl, newsUrl, key} = this.props;

    return (
      <>
      <div className="container col-md-4 my-3">
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Button className='btn-sm' variant="primary" href={newsUrl} target='_blank'>Read more</Button>
      </Card.Body>
    </Card>
    </div>
      </>
    )
  }
}

export default NewsItem

