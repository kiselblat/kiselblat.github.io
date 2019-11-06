import React, { Component } from 'react';
import { Title, ContactMe } from '../components';

import * as contactMe from '../assets/data/contactme.json';

class Contact extends Component {
  render() {
    return(
      <>
        <Title subtitle="How to Get in Touch">Contact</Title>
        <ContactMe
          email={contactMe.email}
          linkedin={contactMe.linkedin}
          github={contactMe.github} 
        />
      </>
    )
  }
}

export default Contact;