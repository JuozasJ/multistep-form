import styled from 'styled-components'

export const InputStyled = styled.div`
    position: relative;
    margin-bottom: 1rem;

    input {
        width: 100%;
        height: 60px;
        border: 1px solid #CCCCCC;
        border-radius: 8px;
        padding: 16px 0 0 16px;
        font-size: 16px;

        &:hover {
            background: #F7F7F7;
        }

        &:not([value='']), &:focus {
            background: #F7F7F7;
            outline: none;
        }

        &:not([value='']) ~ label, &:focus ~ label {
            top: 10px;
            font-size: 12px;
            color: #B2B2B2;
        }
    }

    textarea {
        width: 100%;
        border: 1px solid #CCCCCC;
        border-radius: 8px;
        padding: 28px 0 0 16px;
        font-size: 16px;
        min-height: 120px;
        resize: none;
        font-family: 'Inter', sans-serif;

        &::placeholder {
            opacity: 0;
        }

        &:hover {
            background: #F7F7F7;
        }

        &:not(:placeholder-shown), &:focus {
            background: #F7F7F7;
            outline: none;
        }

        &:not(:placeholder-shown) ~ label, &:focus ~ label {
            top: 10px;
            font-size: 12px;
            color: #B2B2B2;
        }
    }

    label {
        position: absolute;
        left: 16px;
        top: 20px;
        font-size: 16px;
        pointer-events: none;
        transition: 0.2s;
        color: #333333;
    }
`