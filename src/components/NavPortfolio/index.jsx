import Link from 'next/link';
import React from 'react';
import Nav from '../NavTemplate';
import ButtonNav from '../Buttons';

export default function NavHome({ data }) {
    let category = data.allPortfolios.map(element => element.category);
    let newCategory = [...new Set(category)];
    return (
        <Nav>
            {newCategory.map(element => {
                return (
                    <Link href={`/categoryPortfolio/${element}`}>
                        <ButtonNav>
                            {element}
                        </ButtonNav>
                    </Link>)
            })}
        </Nav>
    )
}