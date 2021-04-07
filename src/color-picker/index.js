import React from 'react'
/* eslint-disable no-unused-vars */
import * as S from './style'
import { TwitterPicker } from 'react-color'
/* eslint-enable no-unused-vars */

/**
 * Represents the ColorPicker component.
 *
 * @param {object} props - The object of arguments passed from the parent component.
 * @param {Function} props.onChange - Called when a color is selected.
 * @param {string} [props.color=#000000] - The current selected color that is shown on the color picker button.
 * @returns {HTMLElement} - The HTML representing the ColorPicker component.
 */
const ColorPicker = ({ onChange, color = '#000000' }) => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false)

  /**
   * Toggles the color picker and calls the event handler passed from the parent
   * component.
   *
   * @param {string} color - The selected color.
   */
  const handleChange = (color) => {
    toggleColorPicker()
    onChange(color)
  }

  /** Toggles the state that determines whether the color picker should be displayed. */
  const toggleColorPicker = () => {
    setDisplayColorPicker(prev => !prev)
  }

  /**
   * Renders the color picker.
   *
   * @returns {HTMLElement} The HTML rerpresenting the color picker.
   */
  const renderColorPicker = () => {
    return (
      <S.ColorPicker>
        <TwitterPicker
          color={color}
          colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF', '#333333', '#000000']}
          onChange={handleChange}
          width="180px"
          triangle="hide"
        />
      </S.ColorPicker>
    )
  }

  return (
    <S.Container>
      <S.ColorPickerButton color={color} onClick={toggleColorPicker}>A</S.ColorPickerButton>
      { displayColorPicker && renderColorPicker() }
    </S.Container>
  )
}

export default ColorPicker
