import { Component } from 'react'
import {Container, InputGroup, Row, Col, FormControl,Button } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router-dom'
import { FormComponent } from './FormComponent'
import Results from './Results'

import { useState, ChangeEvent, FormEvent } from 'react'

interface MainPageProps{
  title: string
}

export class MainPage extends Component <MainPageProps & RouteComponentProps>  {

  const[tracks, setTracks] = useState([])
  const[query, setQuery] = useState("")

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("well done")
    console.log(location.pathname)
  }

render() {
  return(
    <>
      <Container>
        <Row>
          <Col>
            <h1>The Main Page</h1>

            <InputGroup size="lg" onSubmit={handleSubmit}>
             <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
             <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" value={query} onChange={handleInput}/>

             <Button variant="primary" type="submit">
               Submit
             </Button>
            </InputGroup>


          </Col>
        </Row>
        <h5 className="mt-5 flex-start">Your results:</h5>
        <Row>
          <Col md={3}>
            <Results />
          </Col>
        </Row>
      </Container>
    </>
    )
  }
}