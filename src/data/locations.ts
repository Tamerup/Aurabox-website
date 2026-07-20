export type LocationStatus = "live" | "soon";

export type AuraboxLocation = {
  id: string;
  city: string;
  venue: string;
  status: LocationStatus;
  x: number; // percentage across the map frame
  y: number; // percentage down the map frame (north → south)
};

export const LOCATIONS: AuraboxLocation[] = [
  { id: "hel-airport", city: "Helsinki", venue: "Helsinki-Vantaa Airport, T2", status: "live", x: 63, y: 88 },
  { id: "hel-kamppi", city: "Helsinki", venue: "Kamppi", status: "live", x: 60, y: 92 },
  { id: "hel-tripla", city: "Helsinki", venue: "Mall of Tripla", status: "live", x: 58, y: 85 },
  { id: "espoo", city: "Espoo", venue: "Iso Omena", status: "soon", x: 52, y: 90 },
  { id: "tampere", city: "Tampere", venue: "Ratina", status: "soon", x: 46, y: 68 },
  { id: "turku", city: "Turku", venue: "Hansakortteli", status: "soon", x: 30, y: 82 },
  { id: "oulu", city: "Oulu", venue: "Valkea", status: "soon", x: 48, y: 32 },
];
