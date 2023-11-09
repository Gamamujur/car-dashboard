# car-dashboard

API Endpoints :

1. GET LIST (/car/)
   Returns all list of cars in the table.
   Response Body Example :
   [
   {
   "id": 1,
   "name": "Car 1",
   "id_car_type": 1,
   "id_car_brand": 1,
   "daily_price": 1000,
   "size": "medium",
   "image": "http://res.cloudinary.com/djafce1li/image/upload/v1699250370/lnrb1o2hvjybffchgwea.png",
   "created_at": "2023-11-09T10:12:52.768Z",
   "updated_at": "2023-11-09T10:12:52.768Z"
   },
   {
   "id": 2,
   "name": "Car 2",
   "id_car_type": 2,
   "id_car_brand": 2,
   "daily_price": 150,
   "size": "large",
   "image": "http://res.cloudinary.com/djafce1li/image/upload/v1699345633/xltvkoskltveigeqlnxr.jpg",
   "created_at": "2023-11-09T10:12:52.768Z",
   "updated_at": "2023-11-09T10:12:52.768Z"
   },
   {
   "id": 3,
   "name": "Car 3",
   "id_car_type": 3,
   "id_car_brand": 3,
   "daily_price": 150,
   "size": "small",
   "image": "http://res.cloudinary.com/djafce1li/image/upload/v1699350643/wdpugjs9uftnnmraxudh.jpg",
   "created_at": "2023-11-09T10:12:52.768Z",
   "updated_at": "2023-11-09T10:12:52.768Z"
   },
   {
   "id": 4,
   "name": "Car 4",
   "id_car_type": 4,
   "id_car_brand": 4,
   "daily_price": 15000,
   "size": "medium",
   "image": "http://res.cloudinary.com/djafce1li/image/upload/v1699457741/lh6n2aoi1pgroqyfa40h.jpg",
   "created_at": "2023-11-09T10:12:52.768Z",
   "updated_at": "2023-11-09T10:14:00.438Z"
   },
   {
   "id": 5,
   "name": "CarORM",
   "id_car_type": 1,
   "id_car_brand": 1,
   "daily_price": 800000,
   "size": "large",
   "image": "http://res.cloudinary.com/djafce1li/image/upload/v1699525669/gwhqyottppn1mq4mqsaj.jpg",
   "created_at": "2023-11-09T10:27:52.648Z",
   "updated_at": "2023-11-09T10:27:52.648Z"
   }
   ]

2. GET By Id (/car/get/:id)
   Returns car data by id.
   Response Body Example :
   URL Parameter (/car/get/5)
   {
   "id": 5,
   "name": "CarORM",
   "id_car_type": 1,
   "id_car_brand": 1,
   "daily_price": 800000,
   "size": "large",
   "image": "http://res.cloudinary.com/djafce1li/image/upload/v1699525669/gwhqyottppn1mq4mqsaj.jpg",
   "created_at": "2023-11-09T10:27:52.648Z",
   "updated_at": "2023-11-09T10:27:52.648Z"
   }

3. POST Car (/car/post-car)
   Create a new car data.
   Request Body Example :
   JSON object with car details
   {
   "name": "CarNew",
   "id_car_type": 1,
   "id_car_brand": 1,
   "daily_price": 800000,
   "size": "large",
   "image": "http://res.cloudinary.com/djafce1li/image/upload/v1699525669/gwhqyottppn1mq4mqsaj.jpg",
   }

Response Body Example :
Returns the created car data,
{
"id": 6,
"name": "CarNew",
"id_car_type": 1,
"id_car_brand": 1,
"daily_price": 800000,
"size": "large",
"image": "http://res.cloudinary.com/djafce1li/image/upload/v1699525669/gwhqyottppn1mq4mqsaj.jpg",
"created_at": "2023-11-09T10:27:52.648Z",
"updated_at": "2023-11-09T10:27:52.648Z"
}

4.  UPDATE Car (/car/car-edit/:id)
    Updates existing car data.
    Request Body example :
    URL Parameter (/car/car-edit/5)
    {
    "name": "CarORM", -> changed to CarEDIT
    "id_car_type": 1, -> changed to 2
    "id_car_brand": 1, -> changed to 2
    "daily_price": 800000, -> changed to 900000
    "size": "large", -> changed to medium
    "image": "http://res.cloudinary.com/djafce1li/image/upload/v1699525669/gwhqyottppn1mq4mqsaj.jpg", -> changed image file
    }

        Response Body Example :
        Return the updated car data,
        [
        {
            "id": 5,
            "name": "CarEDIT",
            "id_car_type": 2,
            "id_car_brand": 2,
            "daily_price": 900000,
            "size": "medium",
            "image": "http://res.cloudinary.com/djafce1li/image/upload/v1699526080/e7lus1azdb6bsyjwuikb.jpg",
            "created_at": "2023-11-09T10:27:52.648Z",
            "updated_at": "2023-11-09T10:34:43.242Z"
        }

    ]

5.  DELETE Car (/car/car-delete/:id)
    Delete car data by id.
    Response Body Example :
    Returns a message and the deleted car data

        {
        "message": "Delete Success",
        "deletedData": [
            {
               "id": 5,
               "name": "CarORM",
               "id_car_type": 1,
               "id_car_brand": 1,
               "daily_price": 800000,
               "size": "large",
               "image": "http://res.cloudinary.com/djafce1li/image/upload/v1699525669/gwhqyottppn1mq4mqsaj.jpg",
               "created_at": "2023-11-09T10:27:52.648Z",
               "updated_at": "2023-11-09T10:27:52.648Z"

            }
         ]
    }

ERD :

The diagram consists of 3 tables (car, car_type, and car_brand). The relationship works such as :
car_type and car_brand has many car, while car has at least one car_type and car_brand.

Table car {
   id integer [primary key]
   name varchar
   id_car_type integer
   id_car_brand integer
   daily_price integer
   size varchar
   image varchar
   updated_at timestamp
}

Table car_type{
   id integer [primary key]
   type_name varchar
}

Table car_brand{
   id integer [primary key]
   brand_name varchar
}

Ref : car_brand.id < car.id_car_brand
Ref : car_type.id < car.id_car_type
