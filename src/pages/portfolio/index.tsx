import Link from 'next/link';
import React from 'react';
import Nav from '../../components/NavTemplate';
import Template from '../../components/Template';
import ButtonNav from '../../components/UI/buttonNav';
import Title from '../../components/UI/TitleName';

export default function Portfolio() {
    return (
        <Template>
      <Title />
      <hr/>
      <h5>portfolio</h5>
      <hr/>
      <div>
        <Nav>
            <ButtonNav>Web</ButtonNav>
            <ButtonNav>Mobile</ButtonNav>
            <ButtonNav>Design</ButtonNav>
            <Link href='/curriculum'>
            <ButtonNav>Sobre eu</ButtonNav>
            </Link>
            <Link href='/'>
            <ButtonNav>Blog</ButtonNav>
            </Link>
        </Nav>
      </div>
    </Template>
    )
}