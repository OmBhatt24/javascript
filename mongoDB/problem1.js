// Consider a collection of documents representing students with the following structure:
// {
//   _id: ObjectId("..."),
//   name: "John",
//   subjects: [
//     { name: "Math", score: 90 },
//     { name: "English", score: 85 },
//     { name: "Physics", score: 65 },
//     { name: "Chemistry", score: 92 },
//     { name: "Sanskrit", score: 78 },
//     { name: "Biology", score: 90 },
//   ]
// }, …n other similar documents in the collection

// Write an aggregation query to find the average score for each subject across all students.

db.students.aggregate([
  { $unwind: "$subjects" },
  {
    $group: {
      _id: { subject: "$subjects.name" },
      averageMarks: { $avg: "$subjects.score" },
    },
  },
]);
