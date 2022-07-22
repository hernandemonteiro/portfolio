import Link from 'next/link';
import React from 'react';
import Nav from '../NavTemplate';
import ButtonNav from '../Buttons';

export default function NavArticle({ data }) {
    return (
        <Nav>
            <Link href='/'>
                <ButtonNav>Inicio</ButtonNav>
            </Link>
            {data.allPosts.map(elementButton => {
                return (
                        <ButtonNav>
                            {elementButton.category}
                        </ButtonNav>
                )
            })}
            <Link href='/portfolio'>
                <ButtonNav>Portfolio</ButtonNav>
            </Link>
            <Link href='/curriculum'>
                <ButtonNav>Sobre eu</ButtonNav>
            </Link>
        </Nav>
    )
}