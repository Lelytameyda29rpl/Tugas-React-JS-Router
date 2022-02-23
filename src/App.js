import React from 'react';
import Utama from'./Component/utama';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'

class App extends React.Component {
  render(){
    return(
      <div> 
       <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">SPP Payment</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Beranda</Nav.Link>
          <Nav.Link href="/datasiswa">Data Siswa</Nav.Link> 
          <Nav.Link href="/datakelas">Data Kelas</Nav.Link> 
          <Nav.Link href="/datapetugas">Data Petugas</Nav.Link> 
          <Nav.Link href="/dataspp">Data SPP</Nav.Link> 
          <Nav.Link href="/datapembayaran">Data Pembayaran</Nav.Link> 
          <Nav.Link href="/datalaporan">Data Laporan</Nav.Link> 
        </Nav>
        </Container>
        </Navbar>
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;