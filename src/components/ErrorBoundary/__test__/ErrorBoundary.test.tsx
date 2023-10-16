import { render, screen } from '@testing-library/react'
import ErrorBoundary from '..'
import React from 'react'

describe('ErrorBoundary', () => {
  it('should render children when no error occurs', () => {
    render(
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <div>Child Component</div>
      </ErrorBoundary>,
    )

    const childComponent = screen.getByText('Child Component')
    expect(childComponent).toBeInTheDocument()
  })

  it('should render fallback when there is an error', () => {
    class ErrorThrowingComponent extends React.Component {
      componentDidMount() {
        throw new Error('Test error')
      }

      render() {
        return <div>Child Component</div>
      }
    }

    const { getByText } = render(
      <ErrorBoundary fallback={<div>Error occurred!</div>}>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    )

    expect(getByText('Error occurred!')).toBeInTheDocument()
  })
})
