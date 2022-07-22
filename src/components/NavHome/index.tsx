import Link from 'next/link';
import React from 'react';
import Nav from '../NavTemplate';
import ButtonNav from '../Buttons';
import { request } from "../../lib/datocms";


const NavHome_QUERY = `query NavHome($limit: IntType) {
    allPosts(first: $limit) {
      title,
      shortdescription,
      date,
      category,
      post
      }
  }`;
export async function getStaticProps() {
    const data = await request({
        query: NavHome_QUERY,
        variables: { limit: 10 }
    });
    return {
        props: { data }
    };
}

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