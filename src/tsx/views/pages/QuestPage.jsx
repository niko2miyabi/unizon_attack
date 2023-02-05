import React, {useState} from "react"
import { Header } from "../components/block/Header.jsx"
import { Bnr } from "../components/atoms/Bnr.jsx"
import { parse } from "date-fns"
export const QuestPage = () => {
    const [goalPoint, setGoalPoint] = useState(20000)
    const [currentPoint, setCurrentPoint] = useState(0)
    const [currentSelected, setCurrentSelected] = useState('修羅')
    const [magnification, setMagnification] = useState(1)

    
    //クエスト周回ベースAP（倍率:1.0）
    const stageData = {
        '駆け出し': {
            ap: 20 , point: 40,
        },
        '熟練': {
            ap: 30 , point: 80,
        },
        '精鋭':{
            ap: 40 , point: 170,
        },
        '天上':{
            ap: 55 , point: 350,
        },
        '修羅':{
            ap: 65 , point: 600,
        }
    } 
    //ベースポイント
    // const basePoint = stageData[currentSelected].point
    //ベースAP
    const baseAp = stageData[currentSelected].ap

    //難易度別AP X 倍率
    const getStageMyData = (key) => {
        const ap = stageData[key].ap
        const point = Math.ceil(stageData[key].point * magnification)
        return `AP:${ap}, 名声数:${point}`
    }
    
    //目標値
    const setGoalPointVal = (e) => {
        setGoalPoint(e.target.value)
    }
    //現在値
    const setCurrentPointVal = (e) => {
        setCurrentPoint(e.target.value)
    } 
    //難易度
    const setStageSelectVal = (e) => {
        setCurrentSelected(e.target.value)
    }
    //倍率値
    const setMagnificationVal = (e) => {
        setMagnification(e.target.value)
    }

    //目標値までの計算
    const getGoalPoint = () => {
        return goalPoint - currentPoint
    }
    //残りの周回数
    const getGoalPointTimes = () => {
        let times = Math.ceil(getGoalPoint() / (baseAp * magnification))
        if(!isFinite(times)) times = '?'
        return times
    }
    //必要AP
    const getGoalAp = () => {
        const times = getGoalPointTimes()
        return (times === '?') ? times : (times * baseAp)
    }

   //イベント終了までの平均回数
   const getAverageTimes = () => {
    const nowDate = new Date().getTime() //現在の時間
    const endDate = parse('2023/02/15', 'yyyy/MM/dd', new Date()).getTime()
    const timeLimitDate = Math.ceil((endDate - nowDate) / ( 1000 * 60 * 60 * 24 ))
    return timeLimitDate
}
    return (
        <div>
            <Header />
            <div className="container_wrap">
                <h2>イベント周回用計算機</h2>
                <Bnr />

                <div>
                    <label htmlFor="">目標:</label>
                    <input type="text" value={goalPoint} onChange={setGoalPointVal} />
                </div>

                <div>
                    <label htmlFor="">現在値:</label>
                    <input type="text" value={currentPoint} onChange={setCurrentPointVal} />
                </div>

                <div>
                    <label htmlFor="">難易度</label>
                    <select name="" value={currentSelected} onChange={setStageSelectVal}>
                        <option value="駆け出し">駆け出し（{getStageMyData('駆け出し')}AP）</option>
                        <option value="熟練">熟練（{getStageMyData('熟練')}AP）</option>
                        <option value="精鋭">精鋭（{getStageMyData('精鋭')}AP）</option>
                        <option value="天上">天上（{getStageMyData('天上')}AP）</option>
                        <option value="修羅">修羅（{getStageMyData('修羅')}AP）</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="">倍率:</label>
                    <input type="text" value={magnification} onChange={setMagnificationVal} />
                </div>

                <div>
                    <h3>計算結果</h3>
                    <ul>
                        <li></li>
                        <li>
                            目標まで:{getGoalPoint().toLocaleString()}ポイント
                        </li>
                        <li>残りの周回数:{getGoalPointTimes().toLocaleString()}回</li>
                        <li>必要AP:{getGoalAp().toLocaleString()}AP</li>
                        <li>イベント終了まで:あと{getAverageTimes()}日</li>
                        <li>1日の平均目標回数：{Math.ceil(getGoalPointTimes() / getAverageTimes()).toLocaleString()}回</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}