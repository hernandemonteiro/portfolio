import Link from 'next/link';
import React from 'react';
import Nav from '../NavTemplate';
import ButtonNav from '../Buttons';

export default function NavHome({data}) {
    return (
        <Nav>
            {data.allPosts.map(element => {

                return (
                    <ButtonNav>
                        {element.category}
                    </ButtonNav>)
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