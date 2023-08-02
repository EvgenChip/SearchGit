import styled from 'styled-components'

export const SPost = styled.div`
margin-top: 5px;
  background-color: #fff;
  border: 1px solid #dedede;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 15px;
  position: relative;
  box-sizing: border-box;

  :hover{
    cursor: pointer;
    border: 1px solid #c4ee81;
  }
`
export const SPostWrapper = styled.div`
  padding: 10px 20px 20px;
  border: none;
  :hover{
    border: none;
  }

`
export const SPostTitle = styled.h2`
  font-size: 22px;
  font-weight: 900;
`
export const SPostContent = styled.div`
  margin: 30px 0 50px;
  font-size: 22px;
  line-height: 36px;
  width: 100%;
  overflow-y: auto;
  word-wrap: break-word;
  max-height: 180px;
`

export const SDateWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 15px;
`