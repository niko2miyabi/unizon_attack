import React from 'react'
import styled from 'styled-components'

export const Bnr = () => {
    return (
        <SBner>
            <img src={`${window.location.origin}/images/bnr.png`} alt="" />
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
