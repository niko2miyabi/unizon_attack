import React, {useState} from "react"
import { Header } from "../components/block/Header.jsx"
import { Footer } from "../components/block/Footer.jsx"
import { Bnr } from "../components/atoms/Bnr.jsx"
import { Calculation } from "../components/block/Calculation.jsx"
import { CalculationResult } from "../components/block/CalculationResult.jsx"
import styled from "styled-components"

export const QuestPage = () => {
    const [goalPoint, setGoalPoint] = useState(200000)
    const [currentPoint, setCurrentPoint] = useState(0)
    const [currentSelected, setCurrentSelected] = useState('修羅')
    const [magnification, setMagnification] = useState(1.0.toFixed(1)) 
    
    return (
        <div>
            <Header />
            <SWrapper>
                <div>
                {/* ▽ イベントバナー ▽ */}
                <Bnr />
                {/* △ イベントバナー △ */}

                <h2>イベント周回用計算機</h2>

                {/* ▽ 計算入力 ▽ */}
                <Calculation goalPoint={goalPoint} setGoalPoint={setGoalPoint} setCurrentPoint={setCurrentPoint} setCurrentSelected={setCurrentSelected} setMagnification={setMagnification} currentPoint={currentPoint} currentSelected={currentSelected} magnification={magnification} / >
                {/* △ 計算入力 △ */}

                {/* ▽ 計算結果 ▽ */}
                <CalculationResult goalPoint={goalPoint} currentPoint={currentPoint} magnification={magnification} currentSelected={currentSelected}  />
                {/* △ 計算結果 △ */}
                </div>
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