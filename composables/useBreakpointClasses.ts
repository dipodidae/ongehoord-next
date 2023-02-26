export default function useBreakpointClasses(): string[] {
  return Object.entries(useTailwindBreakpoints()).reduce((classList: string[], [breakpoint, isActive]) => {
    if (isActive)
      classList.push(`is-${breakpoint}`)

    return classList
  }, [])
}
