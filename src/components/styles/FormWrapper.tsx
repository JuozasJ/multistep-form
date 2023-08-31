import styled from 'styled-components'

export const FormWrapper = styled.div`
    
    h2 {
        margin-left: -45px;
        margin-bottom: 70px;
        font-size: 20px;
        font-weight: 400;
    }

    @media only screen and (max-width: 800px) {
        h2 {
            margin-left: -10px;
        }
    }

    @media only screen and (max-width: 550px) {
        h2 {
            margin-left: 0;
            margin-bottom: 45px;
        }
    }
`