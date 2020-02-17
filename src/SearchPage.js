import React, { Component } from "react";
import { MDBCol, MDBSelectInput, MDBSelect, MDBSelectOptions, MDBSelectOption } from "mdbreact";

class SearchPage extends Component {

getValueOfSelectOne = value => {
  console.log(value);
}

render() {
  return (
      <MDBCol md="6">
        <MDBSelect multiple getValue={value=> this.getValueOfSelectOne(value)}>
          <MDBSelectInput selected="Choose your option" />
          <MDBSelectOptions search>
            <MDBSelectOption disabled>Choose your option</MDBSelectOption>
            <MDBSelectOption>Option nr 1</MDBSelectOption>
            <MDBSelectOption>Option nr 2</MDBSelectOption>
            <MDBSelectOption>Option nr 3</MDBSelectOption>
            <MDBSelectOption>Option nr 4</MDBSelectOption>
            <MDBSelectOption>Option nr 5</MDBSelectOption>
          </MDBSelectOptions>
        </MDBSelect>
      </MDBCol>
    );
  }
}

export default SearchPage;