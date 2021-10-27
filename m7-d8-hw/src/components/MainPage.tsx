import { Component } from 'react'
import {Container, InputGroup, Row, Col, FormControl } from 'react-bootstrap'
import { FormComponent } from './FormComponent'

export class MainPage extends Component  {
render() {
  return(
    <>
      <Container>
        <Row>
          <Col>
          <h1>The Main Page</h1>
          <FormComponent />
          </Col>
        </Row>
      </Container>
    </>
    )
  }
}