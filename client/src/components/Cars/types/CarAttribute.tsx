type CarAttribute = {
    id: string;
    plate: string;
    name: string;
    image: string;
    daily_price: number;
    capacity: number;
    description: string;
    availableAt: string;
    available_at: string;
    transmission: string;
    available: boolean;
    type: string;
    year: number;
    options: string[];
    specs: string[];
    driverType?: string;
};

type CarList = {
    id: number;
    id_car_type: number;
    id_car_brand: number;
    name: string;
    daily_price: number;
    size: string;
    image: string;
    start_rent: Date;
    finish_rent: Date;
    updated_at: Date;
  }

export type { CarAttribute, CarList };
