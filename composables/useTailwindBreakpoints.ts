import { breakpointsTailwind } from '@vueuse/core'

export default function useTailwindBreakpoints() {
  return useBreakpoints(breakpointsTailwind)
}
