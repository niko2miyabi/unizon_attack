import React from 'react'
import {Link} from 'react-router-dom'
export const ContentList = () => {
    return (
        <div className='content_list'>
            <ul>
                <li><Link to={'/quest'}>クエスト攻略</Link></li>
                <li><Link to={'/gacha'}>ガチャシュミレーター</Link></li>
            </ul>
        </div>
    )
}