import { Controller, useFormContext } from 'react-hook-form'

import { useState } from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function WYSIWYG(props) {
  const methods = useFormContext()
  const { control } = methods

  const [value, setValue] = useState('')

  return (
    <div>
      {/* <Controller
        className="mt-8 mb-16"
        render={({ field }) => <WYSIWYGEditor {...field} />}
        name="message"
        control={control}
      /> */}

      <Controller
        className="mt-8 mb-16"
        render={({ field }) => <ReactQuill theme="snow" value={value} onChange={setValue} />}
        name="message"
        control={control}
      />
    </div>
  )
}

export default WYSIWYG
