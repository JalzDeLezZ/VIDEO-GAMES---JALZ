import styled,{css} from "styled-components";

const oColors = {
    borde: "#0075ff",
    error: "#bb2929",
    exito: "#1ed12d"
}

const MyForm = styled.form`
    width: 80%;
    height: 80vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 30px 30px;  
    background-color: rgb(0 0 0 / 30%); 
    backdrop-filter: blur(4px);
    /* @media (max-width: 700px) {grid-template-columns: 2fr;} */
`

const MyLabel = styled.label`
    display: block;
    font-weight: 700;
    margin: 3px 2px;
    color: white;
    font-weight: bold;
    cursor: pointer;

    ${props => props.pStyle === 'false' && css`
        color: ${oColors.error};
    `}
`   
const MyInputGroup = styled.div`
    width: 270px;
    margin-right: 0 auto;
    position: relative;
    span{
        position: absolute;
        left: -21px;
        top: -22px;
    }
`
const MyInput = styled.input` 
    width: 63vw;
    background: #ffffff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 10px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;
    outline: none;
    &:focus {
        box-shadow: 3px 0px 40px rgba(163,163,163, 0-4);
        border : 3px solid ${oColors.borde};
    }
    ${props => props.pValidation === 'true' && css`
        border: 3px solid transparent;
    `}
    
    ${props => props.pValidation === 'false' && css`
        border: 3px solid ${oColors.error} !important;
    `}
`

const ErrorLegend = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${oColors.error};
    display: none;
    
    ${props => props.pValidation === 'false' && css`
        display: none;
    `}
    ${props => props.pValidation === 'false' && css`
        display: block;
    `}
`

const MyTextArea = styled.textarea`
    outline: none;
    border: none;
    border-radius: 3px;
    padding: 10px;
    min-width: 63vw;
    max-width: 63vw;
    max-height: 90px;
    &&::-webkit-scrollbar-track
    {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
    border-radius: 10px;
    }
    &&::-webkit-scrollbar
    { 
    background-color: #64a1a167;
    width: 9px;
    }
    &&::-webkit-scrollbar-thumb
    {
    border-radius: 10px;
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
    background-color: #00000049;
    }
`

export {
    MyForm,
    MyLabel,
    MyInputGroup,
    MyInput,
    ErrorLegend,
    MyTextArea
}
