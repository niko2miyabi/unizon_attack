import React from 'react'
import { stageData } from "../../../../utils/questData.jsx"
import { parse } from "date-fns"
import styled from "styled-components"
export const CalculationResult = (props) => {
    const {goalPoint, currentPoint, magnification, currentSelected} = props;

    //ベースAP
    const baseAp = stageData[currentSelected].ap
    //ベースポイント
    const basePoint = stageData[currentSelected].point

    //必要APの計算
    const getGoalAp = () => {
        const times = getGoalPointTimes()
        return (times === '?') ? times : (times * baseAp)
    }

    //残りの周回数
    const getGoalPointTimes = () => {
        let times = Math.ceil(getGoalPoint() / (basePoint * magnification))
        if(!isFinite(times)) times = '?'
        return times
    } 

     //目標値までの計算
     const getGoalPoint = () => {
        return goalPoint - currentPoint
    }

   //イベント終了までの平均回数
   const getAverageTimes = () => {
    const nowDate = new Date().getTime() //現在の時間
    const endDate = parse('2023/02/15', 'yyyy/MM/dd', new Date()).getTime()
    const timeLimitDate = Math.ceil((endDate - nowDate) / ( 1000 * 60 * 60 * 24 ))
    return timeLimitDate
}

    return (
       <>
        <SWrapper>
                    <h3>計算結果</h3>
                    <ul>
                        <li></li>
                        <li>
                            目標まで &#x3E;&#x3E;&#x3E;　{getGoalPoint().toLocaleString()}ポイント
                        </li>
                        <li>残りの周回数 &#x3E;&#x3E;&#x3E;　{getGoalPointTimes().toLocaleString()}回</li>
                        <li>必要AP &#x3E;&#x3E;&#x3E;　{getGoalAp().toLocaleString()}AP</li>
                        <li>イベント終了まで &#x3E;&#x3E;&#x3E;　あと{getAverageTimes()}日</li>
                        <li>1日の平均目標回数 &#x3E;&#x3E;&#x3E;　{Math.ceil(getGoalPointTimes() / getAverageTimes()).toLocaleString()}回</li>
                        <li>1日の必要AP &#x3E;&#x3E;&#x3E;　{(baseAp * (Math.ceil(getGoalPointTimes() / getAverageTimes()))).toLocaleString()}ap</li>
                    </ul>
        </SWrapper>
       </>
    )
}
const SWrapper = styled.div`
background-color: #f9f9f9;
margin: 20px 0;
padding: 20px 0;
    
`