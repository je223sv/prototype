# ColorPicker

`ColorPicker` is a React component used to render a button that when clicked exposes a palette of colors to select from.

## Requirements

* npm install react-color

## Usage

```jsx
import ColorPicker from 'components/color-picker'

const MyComponent = () => {
  const [color, setColor] = React.useState('#000')
  
  const handleColorChange = (color) => {
    setColor(color.hex)
  }

  return (
    <ColorPicker 
      onChange={handleColorChange}
      color={color}
    />
  )
}
```

## Props

| Name         | Type         | Required   | Default     | Description                                                            |
| ------------ | ------------ | ---------- | ----------- | ---------------------------------------------------------------------- |
| `onChange`   | `function`   | No.        | `null`      | Called when a color is selected.                                       |
| `color`      | `string`     | No.        | `#000000`   | The current selected color that is shown on the color picker button.   |

