import {InputGroup, FormControl} from 'react-bootstrap'

export const FormComponent = () => {
  return(
  <InputGroup size="lg">
    {/* <InputGroup.Prepend>  with it it doesn't work*/}
    <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
    {/* </InputGroup.Prepend> */}
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  )
}