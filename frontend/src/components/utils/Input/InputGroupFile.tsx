import React, { useRef } from 'react'
import { InputFile } from './styled/Input.styled'
import { SetErrorType } from './model/InputTypes'

interface Props {
  placeholder: string
  setInputData: React.Dispatch<
    React.SetStateAction<{ variables: { file: Blob } } | null>
  >
  setError: SetErrorType
}

export const InputGroupFile: React.FC<Props> = ({
  placeholder,
  setInputData,
  setError
}) => {
  const spanRef = useRef<HTMLInputElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const dropZoneRef = useRef<HTMLInputElement>(null)

  const changeSpan = (content: string) =>
    (spanRef.current!.textContent = content)

  const updateThumbnail = (file: Blob) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      dropZoneRef.current!.style.backgroundImage = `url('${reader.result}')`
      dropZoneRef.current!.style.border = 'none'
    }
    changeSpan('')
  }

  const changeHandler = ({
    target: {
      validity: { valid },
      files: [file]
    }
  }: any) => {
    if (valid) {
      setInputData({ variables: { file } })
      updateThumbnail(file)
      /* mutate({ variables: { file } }) */
    } else {
      setError('La el tipo de imagen no es valido.')
    }
  }

  const dropHandler = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault()
    const {
      dataTransfer: { files }
    } = event
    const file = files[0]

    if (file.type.startsWith('image/')) {
      setInputData({ variables: { file } })
      updateThumbnail(file)
    } else {
      setError('El timpo de imagen no es valido.')
    }
  }

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    changeSpan('Deja caer aquí la imagen.')
  }

  const dragLeveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    changeSpan(placeholder)
  }

  return (
    <InputFile
      ref={dropZoneRef}
      onClick={() => fileRef.current?.click()}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeveHandler}
    >
      <span ref={spanRef}>{placeholder}</span>
      <input
        type="file"
        ref={fileRef}
        onChange={changeHandler}
        accept="image/*"
      />
    </InputFile>
  )
}
