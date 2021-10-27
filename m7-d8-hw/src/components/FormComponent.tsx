import {InputGroup, FormControl, Button} from 'react-bootstrap'
import { useState, ChangeEvent, FormEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

export const FormComponent = ({location, history, match}: RouteComponentProps) => {

  const [tracks, setTracks] = useState([])
  const [query, setQuery] = useState("")

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("well done")
    console.log(location.pathname)
  }

  return(
  <InputGroup size="lg" onSubmit={handleSubmit}>
    <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" value={query} onChange={handleInput}/>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </InputGroup>
  )
}