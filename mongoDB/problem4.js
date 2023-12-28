// Assume you have a collection of documents representing locations:
// {
//   _id: ObjectId("..."),
//   name: "CityA",
//   location: {
//     type: "Point",
//     coordinates: [longitude, latitude]
//   }
// }, …n other similar documents in the collection

// Write a query to find the closest cities to a given location (specified by longitude and latitude).
db.locations.createIndex({ location: "2dsphere" });
db.locations.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [-70, 40] },
      $minDistance: 2_000,
      $maxDistance: 10_000,
    },
  },
});

db.locations.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [-70, 40] },
      minDistance: 2_000,
      maxDistance: 10_000,
    },
    $project: { _id: 0, name: 1 },
  },
]);
