export default function useRouteIsHome(): ComputedRef {
  const route = useRoute()
  return computed((): boolean => route.path === '/')
}
