import Link from 'next/link';
import React from 'react';
import Nav from '../NavTemplate';
import ButtonNav from '../Buttons';

export default function NavHome({ data }) {
    let category = data.allPosts.map(element => element.category);
    let newCategory: any = [...new Set(category)];
    return (
        <Nav>
            {newCategory.map(element => {
                return (
                    <Link href={`/category/${element}`}>
                        <ButtonNav>
                            {element}
                        </ButtonNav>
                    </Link>)
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