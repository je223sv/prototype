import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  overflow: auto;

  h2 {
    margin: 0;
    padding: 0;
  }
`

export const EditorContainer = styled.div`
  background:;
  flex: 1;
  border-right: 1px solid #333;
  height: 100vh;
  overflow-y: auto;
`

export const PreviewContainer = styled.div`
  background:;
  flex: 4;
`

export const ThemeContainer = styled.div`
  display: flexbox;
  flex-wrap: wrap;
`

export const Theme = styled.div`
  background: #f4f4f4;
  height: 60px;
  flex: 45%;
  margin: 1%;
  border: ${props => props.active ? '1px solid red' : '0px'};
  cursor: pointer;
`