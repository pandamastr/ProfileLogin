import React, { PureComponent } from 'react'
class TextField extends PureComponent {
  render() {
    const {
      input,
      title,
      description,
      meta: {
        active,
        valid,
        error,
        touched
      },
      ...props,
    } = this.props
    return (
      <div>
        <label>
          {title} <input {...input}{...props} />
        </label>
        {touched && !valid ? <p>{error}</p> : ''}
        {touched && valid ? '✓' : ''}
        {active ? <p>{description}</p> : ''}
      </div>
    )
  }
}
export default TextField