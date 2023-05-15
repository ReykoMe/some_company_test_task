import { ChipContainer } from "./styles"
import { ChipProps } from "./types"

export const Chip: React.FC<React.PropsWithChildren<ChipProps>> = (props) => {
  const { children, ...restProps } = props
  return <ChipContainer {...restProps}>{ children }</ChipContainer>
}