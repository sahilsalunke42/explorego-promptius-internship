
// hooks/fetchTripDetails.js
import { mockTrips } from "../utils/trips.js";

export async function fetchTripDetails(tripId) {
    const trip = mockTrips.find((trip) => trip.id === parseInt(tripId, 10));
    if (!trip) throw new Error("Trip not found");
    return trip;
}
