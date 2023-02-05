import React from 'react'
import styled from 'styled-components';
import 'reset-css'

export const Header = () => {
    return (
        <SHeader>
            <div className='header_inner'>
                <h1><img src={`${window.location.origin}/images/logo.png`} alt="" /></h1>
                <p>ユニゾンリーグ攻略サイト</p>
            </div>
        </SHeader>
    )
}

const SHeader = styled.header`
background: #fff;
text-align:center;
color: #fff;
border-bottom: solid #ddd 1px;
box-shadow: 0 0px 5px 0 #ddd;
.header_inner{
    padding: 5px 0;
    margin: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 40px;

    h1{
        width: 50px;
        height: auto;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        img{
            width: 100%;
            height: auto;
            vertical-align: bottom;
        }
    }
    p{
        font-size: 14px;
        color: #555;
    }
}
`