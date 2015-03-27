db.catalog.insert(
[{"skuNumber" : "MRP-0001", "description" : "Brake Pads", "unitPrice" : 26.99, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0002", "description" : "Brake Calipers", "unitPrice" : 33.99, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0003", "description" : "Brake Calipers Guide Pin", "Price" : 2.99, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0004", "description" : "Break Calipers Guide Pin Boot Kit", "unitPrice" : 8.99, "inventory" : 10, "leadTime" : 5},
{"skuNumber" : "MRP-0005", "description" : "Parking Brake Shoe", "unitPrice" : 26.82, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0006", "description" : "Brake Rotor", "unitPrice" : 19.99, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0007", "description" : "Spindle Nut", "unitPrice" : 3.99, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0008", "description" : "Spindle Nut Washer", "unitPrice" : 2.42, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0009", "description" : "Axle Nut", "unitPrice" : 6.99, "inventory" : 10, "leadTime" : 1},
{"skuNumber" : "MRP-0010", "description" : "Wheel Hub", "unitPrice" : 46.00, "inventory" : 10, "leadTime" : 1},
{"skuNumber" : "MRP-0011", "description" : "Backup Light", "unitPrice" : 4.79, "inventory" : 10, "leadTime" : 4},
{"skuNumber" : "MRP-0012", "description" : "Dome Light", "unitPrice" : 8.99, "inventory" : 10, "leadTime" : 4},
{"skuNumber" : "MRP-0013", "description" : "Hazard Warning Flasher", "unitPrice" : 11.79, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0014", "description" : "Headlights", "unitPrice" : 11.99, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0015", "description" : "Turn Signal Light Bulb", "unitPrice" : 8.99, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0016", "description" : "15\" Cable Tire Chains ", "unitPrice" : 35.99, "inventory" : 10, "leadTime" : 1},
{"skuNumber" : "MRP-0017", "description" : "16\" Cable Tire Chains ", "unitPrice" : 37.99, "inventory" : 10, "leadTime" : 1},
{"skuNumber" : "MRP-0018", "description" : "17\" Cable Tire Chains ", "unitPrice" : 39.99, "inventory" : 10, "leadTime" : 1},
{"skuNumber" : "MRP-0019", "description" : "18\" Cable Tire Chains ", "unitPrice" : 41.99, "inventory" : 10, "leadTime" : 1},
{"skuNumber" : "MRP-0020", "description" : "19\" Cable Tire Chains ", "unitPrice" : 43.99, "inventory" : 10, "leadTime" : 1},
{"skuNumber" : "MRP-0021", "description" : "2-year Battery",  "unitPrice" : 35.42, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0022", "description" : "5-year Battery",  "unitPrice" : 100.99, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0023", "description" : "Jump Start Battery",  "unitPrice" : 88.99, "inventory" : 10, "leadTime" : 5},
{"skuNumber" : "MRP-0024", "description" : "Jump Starter Charger", "unitPrice" : 8.97, "inventory" : 10, "leadTime" : 5},
{"skuNumber" : "MRP-0025", "description" : "Fuel Pump Strainer", "unitPrice" : 4.79, "inventory" : 10, "leadTime" : 2},
{"skuNumber" : "MRP-0026", "description" : "Gas Cap", "Price" : 6.79, "inventory" : 10, "leadTime" : 1},
{"skuNumber" : "MRP-0027", "description" : "Fuel Additive", "unitPrice" :11.99, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0028", "description" : "Fuel Stabilizer", "unitPrice" : 11.80, "inventory" : 10, "leadTime" : 3},
{"skuNumber" : "MRP-0029", "description" : "Fuel System Cleaner", "unitPrice" : 13.89, "inventory" : 10, "leadTime" : 3}])

db.dealers.insert({ "name" : "Terry Adams", "address" : "17760 Northeast 67th Court, Redmond, WA 98052", "email" : "terry@adams.com", "phone" : "425-885-6217" })

db.quotes.insert([{
"quoteId" : "0",
"validUntil" : "2015-05-01T00:00:00+0000",
"customerName" : "Walter Harp",
"dealerName" : "Terry Adams",
"terms" : "All work is to occur between 3pm and 5pm in the afternoon",
"unitDescription" : "Small compressor unit.",
"city" : "Seattle",
"unitCost" : "759.95",
"totalCost" : "759.95",
"discount" : "0.0",
"unit": "",
"height" : "420",
"width" : "275",
"depth" : "275",
"buildOnSite" : true,
"state" : "WA",
"postalCode" : "98023",
"ambientPeak" : "0",
"ambientAverage" : "0",
"purpose" : "Refrigerator",
"additionalItems" : []
},
{
"quoteId" : "1",
"validUntil" : "2015-01-01T00:00:00+0000",
"customerName" : "Jerry Morrison",
"dealerName" : "Terry Adams",
"terms" : "To be completed prior to final payment",
"unitDescription" : "Walk in Refrigerator",
"city" : "Seattle",
"unitCost" : "5699.95",
"totalCost" : "5599.95",
"discount" : "100.0",
"unit": "",
"height" : "240",
"width" : "3000",
"depth" : "2500",
"buildOnSite" : true,
"state" : "WA",
"postalCode" : "98089",
"ambientPeak" : "0",
"ambientAverage" : "0",
"purpose" : "Refrigerator",
"additionalItems" : []
},
{
"quoteId" : "2",
"validUntil" : "2015-02-01T00:00:00+0000",
"customerName" : "Harrison Hall",
"dealerName" : "Terry Adams",
"terms" : "Unit must fit in the 400x400x400 space built into the chiller",
"unitDescription" : "Freezer Unit.",
"city" : "Seattle",
"unitCost" : "489.95",
"totalCost" : "489.95",
"discount" : "0.0",
"unit": "",
"height" : "400",
"width" : "400",
"depth" : "400",
"buildOnSite" : true,
"state" : "WA",
"postalCode" : "98027",
"ambientPeak" : "0",
"ambientAverage" : "0",
"purpose" : "Freezer",
"additionalItems" : []
}
])

db.orders.insert([{
"orderId" : "0",
"quoteId" : "0",
"orderDate" : "2015-03-02T20:43:37+0000",
"status" : "Created",
"events" : []
},
{"orderId" : "1",
"quoteId" : "2",
"orderDate" : "2015-03-02T20:43:37+0000",
"status" : "DeliveryConfirmed",
"events" : []
}])

db.shipments.insert([{
"orderId" : "0",
"contactName" : "Walter Harp",
"primaryContactPhone" : {
  "phoneNumber" : "435-783-2378",
  "kind" : "Mobile"
},
"deliveryAddress" : {
  "street" : "34 Sheridan Street",
  "city" : "Seattle",
  "state" : "WA",
  "postalCode" : "98023",
  "specialInstructions" : ""
},
"events" : []
},
{
"orderId" : "2",
"contactName" : "Harrison Hall",
"primaryContactPhone" : {
  "phoneNumber" : "435-712-7234",
  "kind" : "Mobile"
},
"deliveryAddress" : {
  "street" : "84 Queen Street",
  "city" : "Seattle",
  "state" : "WA",
  "postalCode" : "98027",
  "specialInstructions" : "To be installed on meat freezer 3."
},
"events" : []
}])
