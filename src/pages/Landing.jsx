import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/muisc.gif'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/video-Player.jpg'
import feature2 from '../assets/category.jpg'
import feature3 from '../assets/feature3.png'

const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      {/* landing head*/}
      <div className='row align-items-center'>
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }} className='mt-3'>Mediad Player App will allow user to add or remove their uploaded videos form  youtube, consectetur adipisicing elit. Magnam quaerat officiis eveniet iusto et dolor cupiditate veritatis vero, modi culpa? Pariatur possimus eveniet in dolore illo voluptatum aperiam. Illo, consectetur?</p>
          <Link to={'/home'} className='btn btn-info'>
            Get Started!!
          </Link>
        </div>

        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ' src={LandingImg} alt="" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
        <div className=" col-lg-4">
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Manging Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className=" col-lg-4">
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categories videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className=" col-lg-4">
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{textAlign: 'justify'}}><span className='fs-5'>Play Everything:</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut nobis ipsum officia quod perferendis nemo. Debitis accusantium cupiditate repellendus aliquam veritatis labore alias laboriosam mollitia? Voluptate ducimus illo voluptatum.</p>

          <p style={{textAlign: 'justify'}}><span className='fs-5'>Categories Videos :</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut nobis ipsum officia quod perferendis nemo. Debitis accusantium cupiditate repellendus aliquam veritatis labore alias laboriosam mollitia? Voluptate ducimus illo voluptatum.</p>

          <p style={{textAlign: 'justify'}}><span className='fs-5'>Managing Video History :</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut nobis ipsum officia quod perferendis nemo. Debitis accusantium cupiditate repellendus aliquam veritatis labore alias laboriosam mollitia? Voluptate ducimus illo voluptatum.</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Po3jStA673E?si=tFZFATRvRbqCyiZo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing
