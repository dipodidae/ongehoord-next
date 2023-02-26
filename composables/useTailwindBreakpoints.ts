import { breakpointsTailwind } from '@vueuse/core'

export default function useTailwindBreakpoints<any>() {
  return useBreakpoints(breakpointsTailwind)
}
