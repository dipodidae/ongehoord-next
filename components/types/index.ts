export { }

declare global {
  interface Window {
    initMap: () => void
  }

  interface GeoLocation {
    lat: number
    lng: number
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
