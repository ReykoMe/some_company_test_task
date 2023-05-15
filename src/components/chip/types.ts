import { MouseEventHandler } from "react"

export type ChipProps = {
  active?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
}