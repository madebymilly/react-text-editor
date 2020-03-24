import React from 'react';
import { Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput, Button, Document } from './styled.js';

class App extends React.Component {

  state = {
    editor: ""
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    // Destructing assignments:
    let { value } = this.state;
    let { handleChange } = this;
    return (
      <>
        <Container>
          <Column>
            <Button>
              New Rule
                </Button>
          </Column>
          <Column>
            <Button>
              Random Text
                </Button>
            <Document>
              <Editor name={"editor"}
                value={value}
                onChange={handleChange}
              />
              <Markup />
            </Document>
          </Column>
        </Container>
      </>
    );
  }
}

export default App;
