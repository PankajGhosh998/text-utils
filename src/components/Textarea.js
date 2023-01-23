import React from 'react'
import PropTypes from 'prop-types'


export default function Textarea(prop) {
  return (
    <div>
        <div className="mb-3">
            <h2>{prop.heading}</h2>
            <div className="container">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <div className="my-3">
            <button type="button" class="btn btn-primary">UPPERCASE</button>
            <button type="button" class="btn btn-primary">lowercase</button>
            <button type="button" class="btn btn-primary">Sentence case</button>
            <button type="button" class="btn btn-primary">Title Case</button>
            </div>
            </div>
        </div>
    </div>
  )
}
