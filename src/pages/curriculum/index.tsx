import Link from 'next/link';
import React from 'react';
import Nav from '../../components/NavTemplate';
import Template from '../../components/Template';
import ButtonNav from '../../components/UI/buttonNav';
import Title from '../../components/UI/TitleName';

export default function Curriculum(){
    return(
        <Template>
        <Title />
        <hr/>
        <h5>Curriculum</h5>
        <hr/>
        <div>
          <Nav>
              <ButtonNav>Resumo</ButtonNav>
              <ButtonNav>Hard-Skills</ButtonNav>
              <ButtonNav>Soft-Skills</ButtonNav>
              <ButtonNav>Academy</ButtonNav>
              <ButtonNav>Experience</ButtonNav>
              <Link href='/portfolio'>
              <ButtonNav>Portfolio</ButtonNav>
              </Link>
              <Link href='/'>
              <ButtonNav>Blog</ButtonNav>
              </Link>
          </Nav>
        </div>
      </Template>
    )
}