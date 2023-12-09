# car-dashboard

ERD :

Table car {
  id integer [primary key]
  name varchar
  id_car_type integer
  id_car_brand integer
  daily_price integer
  size varchar
  image  varchar
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

Table user{
  id integer [primary key]
  email varchar
  password varchar
  role varchar
  created_at timestamp
  updated_at timestamp
}

Table log_activities{
  id integer [primary key]
  id_car integer
  id_user integer
  action varchar
  created_at timestamp
  updated_at timestamp
}

Ref : car_brand.id < car.id_car_brand
Ref : car_type.id < car.id_car_type
Ref : log_activities.id_car < car.id
Ref : log_activities.id_user < user.id
