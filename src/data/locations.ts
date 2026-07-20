export type LocationStatus = "live" | "soon";
export type AuraboxLocation = {
  id: string;
  city: string;
  venue: string;
  status: LocationStatus;
  x: number;
  y: number;
};
export const LOCATIONS: AuraboxLocation[] = [];