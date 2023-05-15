import { ChangeEventHandler } from "react"

export type BaseInputProps = {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type InputProps = BaseInputProps & {
  label?: string
  beforeText?: string
  placeholder?: HTMLInputElement['placeholder']
}