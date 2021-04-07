import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`
export const ColorPicker = styled.div`
  position: absolute;
  left: 2px;
  top: 45px;
  z-index: 10000;
`
export const ColorPickerButton = styled.button`
  background: #fff;
  border: 0;
  padding: 10px;
  border-bottom: 2px solid ${props => props.color};
  border-top: 2px solid #f4f4f4;
  border-left: 2px solid #f4f4f4;
  border-right: 2px solid #f4f4f4;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
