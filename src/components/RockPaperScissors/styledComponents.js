import styled from 'styled-components'

export const AppContainer = styled.div`
    background-color: #223a5f;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ResultContainer = styled.div`
    border: 2px solid #ffffff;
    min-width: 80vw;
    padding: 20px;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Option = styled.h1`
    font-size: 16px;
    font-family: "Roboto";
    font-weight: 700;
    color: #ffffff;
`
export const CloseButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
`
export const TriggerButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    font-weight: 400;
    color: #223a5f;
    padding: 8px 15px 8px 15px;
    margin: 8px;
    border-radius: 6px
`
export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    border-color: #ffffff;
    background-color: transparent;
`
export const GameViewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
`
export const GameResultViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const GameOptionsList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

`
export const ScorePhrase = styled.p`
    font-size: 16px;
    font-family: "Roboto";
    font-weight: 700;
    color: #ffffff;
`
export const ScoreNumber = styled.p`
    font-size: 28px;
    font-family: "Roboto";
    font-weight: 700;
    color: #ffffff;
`
export const GameParticipantChoiceImage = styled.img`
    height: 170px;
    width: 170px;
`
export const GameParticipantText = styled.p`
    font-size: 24px;
    font-family: "Roboto";
    font-weight: 700;
    color: #ffffff;
    text-align: center;

`
export const PopupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `
export const PopupImage = styled.img`
    width: 90%;
    align-self: center;
`
export const PopupBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
`
export const SelectedOptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    max-width: 600px;
`
export const GameUserOptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ResultText = styled.p`
    font-size: 24px;
    font-family: "Roboto";
    font-weight: 700;
    color: #ffffff;
    text-align: center;
`
export const PlayAgainButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #ffffff;
    font-size: 16px
    font-family: "Roboto";
    font-weight: 400;
    color: #223a5f;
    padding: 8px 15px 8px 15px;
    margin: 8px;
    border-radius: 6px

`
