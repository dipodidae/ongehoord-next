export { }

declare global {
  interface GeoLocation {
    lat: number
    lon: number
  }

  interface InvestigationTarget {
    location: GeoLocation
    title: string
    content: string
  }

  interface InvestigationTargetCategory {
    title: string
    investigationTargets: InvestigationTarget[]
  }
}
