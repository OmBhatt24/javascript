// Assume you have a collection of documents representing orders:
// {
//   _id: ObjectId("..."),
//   orderDate: ISODate("2023-01-15T12:30:00Z"),
//   items: [
//     { product: "Laptop", quantity: 2, price: 1000 },
//     { product: "Mouse", quantity: 1, price: 20 },
//     { product: "Keyboard", quantity: 1, price: 100 },
//     { product: "MousePad", quantity: 1, price: 10 },
//     { product: "Ipad", quantity: 2, price: 700 },
//     { product: "Dot", quantity: 1, price: 200 },
//     { product: "Monitor", quantity: 1, price: 850 },
//     { product: "Speakers", quantity: 2, price: 90 },
//   ]
// }, …n other similar documents in the collection

// Write a query to find the total revenue generated on a specific date, considering the quantity and price of each item.

db.products.aggregate([
  { $unwind: "$items" },
  {
    $group: {
      _id: {
        year: { $year: "$orderDate" },
        month: { $month: "$orderDate" },
        day: { $dayOfMonth: "$orderDate" },
      },
      totalRevenue: {
        $sum: {
          $multiply: ["$items.quantity", "$items.price"],
        },
      },
    },
  },
]);
