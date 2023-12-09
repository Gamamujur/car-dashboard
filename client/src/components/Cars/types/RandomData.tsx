const randomData = {
    capacity: [2, 4, 6],
    year: [2015, 2016, 2017, 2020],
    transmission: ["Automatic", "Automanual"],
    description: [
        "Cloth covered headliner. Sentry Key theft deterrent system. Air conditioning w/in-cabin microfilter.",
        "Rear reading & courtesy lamps. Zone body construction -inc: front/rear crumple zones, hood deformation point.",
        "Energy absorbing steering column. 3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter.",
        "Leather-wrapped shift knob. Dual front illuminated visor vanity mirrors. Battery saver. Driver & front passenger map pockets.",
    ],
    available_at: [
        "2023-03-23T15:49:05.563Z",
        "2023-04-23T15:49:05.563Z",
        "2023-05-23T15:49:05.563Z",
    ],
};

const randomFunction = function <T>(data: T[]) {
    const value = data[Math.floor(Math.random() * data.length)];
    return value;
};

export { randomFunction, randomData };
