import Link from "next/link";
import React from "react";
import Nav from "../NavTemplate";
import ButtonNav from "../Buttons";

export default function NavCurriculum() {
    return (
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
    )
}