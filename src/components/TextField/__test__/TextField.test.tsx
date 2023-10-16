// PostList.test.js (or PostList.test.tsx for TypeScript)

import { fireEvent, render } from '@testing-library/react'
import { Search } from '@assets'
import TextField from '..'
import { TextFieldTypes, TextFieldVariants } from '@types'

describe('PostList component', () => {
  const mockChange = jest.fn()
  const props = {
    icon: <Search />,
    name: 'test',
    placeholder: 'test',
    id: 'test',
    value: 'test',
    onChange: mockChange,
  }

  it('render with variant is outlined and type is text', () => {
    const { container } = render(<TextField {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('render with variant is filled and type is text', () => {
    const { container } = render(
      <TextField {...props} variant={TextFieldVariants.Filled} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with variant is outlined and type is password', () => {
    const { container } = render(
      <TextField {...props} type={TextFieldTypes.Password} />,
    )
    expect(container).toMatchSnapshot()
  })
  it('render with variant is filled and type is password', () => {
    const { container } = render(
      <TextField
        {...props}
        variant={TextFieldVariants.Filled}
        type={TextFieldTypes.Password}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('should call onChange handler when value changes', () => {
    const { getByPlaceholderText } = render(<TextField {...props} />)
    const textfield = getByPlaceholderText('test')

    fireEvent.change(textfield, { target: { value: 'abc' } })
    expect(mockChange).toHaveBeenCalled()
  })
})
