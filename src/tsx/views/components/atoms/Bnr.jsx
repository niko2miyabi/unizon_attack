import React from 'react'
import styled from 'styled-components'
import { bnrImgPath } from "../../../../utils/questData.jsx"

export const Bnr = () => {
    return ( 
        <SBner>
            <img src={bnrImgPath} alt="" />
        </SBner>
    )
}

const SBner = styled.div`
    width: 100%;
    img{
        width: 100%;
        height: auto;
    }
`
