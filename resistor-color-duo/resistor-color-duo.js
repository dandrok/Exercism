//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorsValue = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

export const decodedValue = (color, colorTwo) => {
  const testMe = colorsValue.indexOf(color)
  const testMeToo = colorsValue.indexOf(colorTwo)
  return Number(`${testMe}${testMeToo}`)
}
