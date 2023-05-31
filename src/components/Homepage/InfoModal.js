import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ModalButton(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{color: '"#00008B', textDecoration: 'none', fontWeight: 'bold', fontSize: '24px'}} onClick={toggle}>
        About My Website
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>How It Was Made</ModalHeader>
        <ModalBody>
          This website is a SpringBoot application that serves a React App frontend and utilizes a MySQL database, 
          the site is containerized with Docker compose and deployed on an AWS EC2 instance. This homepage 
          is comprised entirely of Reactstrap components and the frontend is a single page app that uses the react-router-dom 
          library for navigation. You can use the Navbar to navigate to my Github, resume, and some of my personal projects. 
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
