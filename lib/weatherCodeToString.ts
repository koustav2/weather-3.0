const weatherCodeToString: {
    [key: number]: {
        icon: string;
        lable: string;
    }
} = {
    0: {
        icon: "c01d",
        lable: "clear sky",
    },
    1: {
        icon: "c02d",
        lable: "Scattered clouds"
    },
    2: {
        icon: "c03d",
        lable: "partly cloudy"
    },
    3: {
        icon: "c03d",
        lable: "Broken clouds"
    },
    4: {
        icon: "c04d",
        lable: "Overcast clouds"
    },
    45: {
        icon: "s05d",
        lable: "Fog",
    },
    48: {
        icon: "s05d",
        lable: "rime for",
    },
    51: {
        icon: "d01d",
        lable: "Drizzle"
    },
     53: {
        icon: "d01d",
        lable: "Drizzle"
    }, 
    55: {
        icon: "d01d",
        lable: "Drizzle"
    }, 
    56: {
        icon: "d01d",
        lable: "Freezing Drizzle Light"
    },
    57: {
        icon: "d01d",
        lable: "Freezing Drizzle dense",
    },
    61: {
        icon: "r01d",
        lable: "rain slight",
    },
    63:{
        icon: "r01d",
        lable: "moderate rain ",
    },
    65:{
        icon: "r01d",
        lable: "heavy rain",
    },
    66:{
        icon: "f01d",
        lable: "Freezing rain(light)",
    },
    67:{
        icon: "f01d",
        lable: "Freezing rain",
    },
    71:{
        icon: "s02d",
        lable: "snow",
    },
    73:{
        icon: "s02d",
        lable: "moderate snowfall ",
    },
    75:{
        icon: "s02d",
        lable: "heavy snowfall",
    },
    77:{
        icon: "s02d",
        lable: "snow grains",
    },
    80:{
        icon: "r02d",
        lable: "Rain Showers",
    },
    81:{
        icon: "r02d",
        lable: "moderate rain Showers",
    },
    82:{
        icon: "r02d",
        lable: "Heavy Rain Showers",
    },
    85:{
        icon: "s01d",
        lable: "Sain Showers(light)",
    },
    86:{
        icon: "s01d",
        lable: "Snow Showers",
    },
    95:{
        icon: "t01d",
        lable: "Thunderstrom",
    },
    96:{
        icon: "t01d",
        lable: "Thunderstrom",
    },
    99:{
        icon: "t01d",
        lable: "Thunderstrom",
    },
}

export default weatherCodeToString;