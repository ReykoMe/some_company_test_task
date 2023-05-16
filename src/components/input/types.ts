import { ChangeEventHandler } from "react"

export type BaseInputProps = {
  name?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  label?: string
}

export type InputProps = BaseInputProps & {
  beforeText?: string
  placeholder?: HTMLInputElement['placeholder']
  readOnly?: boolean
  centerText?: boolean
}