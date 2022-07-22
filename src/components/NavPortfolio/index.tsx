import Link from "next/link";
import React from "react";
import Nav from "../NavTemplate";
import ButtonNav from "../Buttons";

export default function NavPortfolio() {
    return (
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
    )
}