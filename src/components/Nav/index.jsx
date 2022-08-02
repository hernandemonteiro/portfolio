import Link from 'next/link';
import React from 'react';
import Nav from '../NavTemplate';
import ButtonNav from '../Buttons';

export default function NavHome({ data }) {
    let category = data.allPosts.map(element => element.category);
    let newCategory = [...new Set(category)];
    return (
        <Nav>
            <Link href={`/`}>
                <ButtonNav>
                    Inicio
                </ButtonNav>
            </Link>
            {newCategory.map(element => {
                return (
                    <Link href={`/category/${element}?categoria=${element}`}>
                        <ButtonNav>
                            {element}
                        </ButtonNav>
                    </Link>)
            })}
            <Link href={`/portfolio`}>
                <ButtonNav>
                    Portfolio
                </ButtonNav>
            </Link>
        </Nav>
    )
}