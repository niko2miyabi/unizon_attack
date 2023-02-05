import React from 'react'
import { stageData, rewardList, rewardType} from "../../../../utils/questData.jsx"
export const Calculation = (props) => {
    const {goalPoint, currentPoint, currentSelected, magnification, setGoalPoint, setCurrentPoint, setCurrentSelected, setMagnification} = props

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

    //難易度別AP X 倍率
    const getStageMyData = (key) => {
        const ap = stageData[key].ap
        const point = Math.ceil(stageData[key].point * magnification)
        return `AP:${ap}, 名声数:${point}`
    }

    //目標報酬
    const getReward = () => {
        const currentGoalPoint = goalPoint
        const lastGoal = Number(Object.keys(rewardList).pop())
        const result = Object.keys(rewardList).find((key) => {
            return Number(key) >= currentGoalPoint
        }) 
        const keys = (!result)? lastGoal : result
        const selectRewardType = rewardType[rewardList[keys].type]
        const selectRewardAmount = rewardList[keys].amount
        return `NEXT(${Number(keys).toLocaleString()}pt) >>> ${selectRewardType}×${selectRewardAmount}`
    }

    return (
        <>
        <div>
                    <label htmlFor="">目標</label><br />
                    <input type="text" value={goalPoint} onChange={setGoalPointVal} />
                    <p>{getReward()}</p> 
                </div>

                <div>
                    <label htmlFor="">現在値</label><br />
                    <input type="text" value={currentPoint} onChange={setCurrentPointVal} />
                </div>

                <div>
                    <label htmlFor="">難易度</label><br />
                    <select name="" value={currentSelected} onChange={setStageSelectVal}>
                        <option value="駆け出し">駆け出し（{getStageMyData('駆け出し')}）</option>
                        <option value="熟練">熟練（{getStageMyData('熟練')}）</option>
                        <option value="精鋭">精鋭（{getStageMyData('精鋭')}）</option>
                        <option value="天上">天上（{getStageMyData('天上')}）</option>
                        <option value="修羅">修羅（{getStageMyData('修羅')}）</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="">倍率</label><br />
                    <input type="text" value={magnification} onChange={setMagnificationVal} />
                </div>
        </>
    )
}