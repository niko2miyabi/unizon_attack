import React from "react"
import { Header } from "../components/block/Header.jsx"
import { Footer } from "../components/block/Footer.jsx"
import styled from "styled-components"
export const GachaSimulatorPage = () => {
    return (
        <div>
            <Header />
            <SWrapper>
                <p>＜ComigSoon＞<br />ガチャシミュレーターページ</p>
            </SWrapper>
            <Footer />
        </div>
    )
}
const SWrapper = styled.div`
    min-height: 300px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2.0;
    font-size: 14px;
    color: #666;
`