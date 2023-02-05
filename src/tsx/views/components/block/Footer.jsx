import React from 'react'
import styled from 'styled-components';

export const Footer = () => {
    return (
        <SFooter>
            <div className='footer_inner'>
                <p>copyright @niko2miyabi</p>
            </div>
        </SFooter>
    )
}

const SFooter = styled.footer`
text-align:center;
color: gray;
.footer_inner{
    padding: 20px 0;
    font-size: 12px; 
}
`