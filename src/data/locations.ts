export type LocationStatus = "live" | "soon";
export type AuraboxLocation = {
  id: string;
  city: string;
  venue: string;
  status: LocationStatus;
  x: number;
  y: number;
};
export const LOCATIONS: AuraboxLocation[] = [
  {
    id: "blockfest-2026",
    city: "Tampere",
    venue: "Blockfest 2026 — Fresh Up & Skybox",
    status: "live",
    x: 55,
    y: 42,
  },
];