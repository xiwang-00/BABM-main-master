import React, { useLayoutEffect } from 'react'
import { Courses } from "../../components/Courses"
import Header from "../../components/Header"
import { Hero } from "../../components/Hero"
import { News } from "../../components/News"
import { Partners } from "../../components/Partners"
import Statistics from "../../components/Statistics";
import { StyledMain, StyledPageTop } from "../../styles/global"

export default function Home() {
    return (
        <>
            <StyledPageTop>
                <Hero />
                <Statistics />
            </StyledPageTop>
            <StyledMain>
                <Courses />
                <News />
                <Partners />
            </StyledMain>
        </>
    )
}
