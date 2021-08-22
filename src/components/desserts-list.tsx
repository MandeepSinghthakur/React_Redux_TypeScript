
import { Fragment, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useActions } from '../hooks/use-actions';
import { Dessert } from '../state/dessert';
import ReadMore from './read-more';
import './dessert.css'


const DessertsList: React.FC = () => {
  const loading: Boolean = useTypedSelector(({ desserts: { loading } }) =>
  loading
);
  const desserts: Dessert[] = useTypedSelector(({ desserts: { data } }) =>
    data
  );
  const firstItem: Dessert | null = useTypedSelector(({ desserts: { firstItem } }) =>
    firstItem
  );
  const [dessert, setDessert] = useState<Dessert | null>()
  const [dessertList, setDessertList] = useState<Dessert[]>([])
  const [show, setShow] = useState(false);
  const [inputName, setInputName] = useState('')
  const [inputPrice, setInputPrice] = useState('')
  const [inputImage, setInputImage] = useState('')
  const [inputDescription, setInputDescription] = useState('')

  const { fetchDesserts, addDessert } = useActions();
 
  useEffect(() => {
    setDessert(firstItem)
    setDessertList(desserts)
  }, [desserts, firstItem]) 

  const getDesserts = () => {
    fetchDesserts(true);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => {
    if (inputName === '' || inputPrice === '' || inputImage === '' || inputDescription === '') {
      alert("Please Enter all the values")
    } else {
      addDessert({
        name: inputName,
        price: Number(inputPrice),
        imageUrl: inputImage,
        description: inputDescription
      })
    }
    setShow(false);
    setInputName('')
    setInputPrice('')
    setInputImage('')
    setInputDescription('')
  }

  return (
    <>
      { loading && <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      }
      <div className="container container-custom">
        {dessert &&
          <>
            <img className="top_image" src={dessert.imageUrl}></img>
            <div className="bottom-left">
              <div className="price">${dessert.price}</div>
              <div className="name">{dessert.name}</div>
              <div className="read_more"><ReadMore>{dessert.description}</ReadMore></div>
            </div>
          </>
        }
      </div>
      <div className="container grid-container container-custom">
        <div className="row">
          {dessertList.map(function (item, i) {
            return <Fragment key={i}>
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="card">
                  <img className="card-img-top" src={item.imageUrl} alt="Card image cap" />
                  <div className="card-body">
                    <div className="info_container">
                      <h5 className="card-title price">$ {item.price}</h5>
                      <h5 className="card-title name">{item.name}</h5>
                    </div>
                    <div className="card-text"> <ReadMore>{item.description}</ReadMore></div>
                  </div>
                </div>
              </div>
            </Fragment>
          })}
        </div>
      </div>
      { desserts.length ==0 && <div className="container container-custom">
      <Button variant="primary" onClick={getDesserts}>
          Fetch Desserts
        </Button>
      </div> 
      }
       { desserts.length > 0 && <div className="container container-custom">
        <Button variant="primary" onClick={handleShow}>
          Add Dessert
        </Button>
      </div> }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Desert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Desert Name</Form.Label>
              <Form.Control value={inputName} onChange={e => setInputName(e.target.value)} type="text" placeholder="Enter Dessert Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control value={inputPrice} onChange={e => setInputPrice(e.target.value)} type="text" placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image Url</Form.Label>
              <Form.Control value={inputImage} onChange={e => setInputImage(e.target.value)} type="text" placeholder="Enter ImageUrl" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control value={inputDescription} onChange={e => setInputDescription(e.target.value)} type="text" placeholder="Enter Descriptiojn" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Dessert
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DessertsList;
