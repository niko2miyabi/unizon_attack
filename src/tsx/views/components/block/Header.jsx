import React from 'react'
import styled from 'styled-components';
import 'reset-css'

export const Header = () => {
    return (
        <SHeader>
            <div className='header_inner'>
                <h1>ユニゾンリーグ攻略サイト</h1>
            </div>
        </SHeader>
    )
}

const SHeader = styled.header`
background: #000;
text-align:center;
color: #fff;
.header_inner{
    padding: 20px 0;
}
`