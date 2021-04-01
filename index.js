/* SCROLL PAST THE DATA TO START THE TAKS - NOTE do not use any advanced array methods - .forEach(), .map(), .filter() and .reduce() are forbidden today  */
const airports = [
  {
    "code": "AAA",
    "lat": "-17.3595",
    "lon": "-145.494",
    "name": "Anaa Airport",
    "city": "Anaa",
    "state": "Tuamotu-Gambier",
    "country": "French Polynesia",
    "woeid": "12512819",
    "tz": "Pacific\/Midway",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "4921",
    "elev": "7",
    "icao": "NTGA",
    "direct_flights": "2",
    "carriers": "1"
  },
  {
    "code": "AAE",
    "lat": "36.8236",
    "lon": "7.8103",
    "name": "El Mellah Airport",
    "city": "El Tarf",
    "state": "Annaba",
    "country": "Algeria",
    "woeid": "12510325",
    "tz": "Africa\/Algiers",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "9843",
    "elev": "16",
    "icao": "DABB",
    "direct_flights": "6",
    "carriers": "2"
  },
  {
    "code": "AAL",
    "lat": "57.0952",
    "lon": "9.85606",
    "name": "Aalborg Airport",
    "city": "Norresundby",
    "state": "Nordjylland",
    "country": "Denmark",
    "woeid": "12512587",
    "tz": "Europe\/Copenhagen",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "http:\/\/www.aal.dk\/",
    "runway_length": "8700",
    "elev": "10",
    "icao": "EKYT",
    "direct_flights": "7",
    "carriers": "10"
  },
  {
    "code": "AAM",
    "lat": "-24.8",
    "lon": "31.5333",
    "name": "Mala Mala",
    "city": "Mala Mala",
    "state": "",
    "country": "South Africa",
    "woeid": "55921381",
    "tz": "Africa\/Johannesburg",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "4420",
    "elev": "1200",
    "icao": "FAMD",
    "direct_flights": "1",
    "carriers": "1"
  },
  {
    "code": "AAN",
    "lat": "24.25",
    "lon": "55.75",
    "name": "Al Ain Airport",
    "city": "Ayn al Faydah",
    "state": "Abu Dhabi",
    "country": "United Arab Emirates",
    "woeid": "12523371",
    "tz": "Asia\/Dubai",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": null,
    "elev": null,
    "icao": "OMAL",
    "direct_flights": "12",
    "carriers": "9"
  },
  {
    "code": "AAQ",
    "lat": "44.9",
    "lon": "37.3167",
    "name": "Olkhovka Airport",
    "city": "Novorossiysk",
    "state": "Krasnodarskiy Kray",
    "country": "Russia",
    "woeid": "12516605",
    "tz": "Europe\/Moscow",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": null,
    "elev": null,
    "icao": "URKA",
    "direct_flights": "24",
    "carriers": "15"
  },
  {
    "code": "AAR",
    "lat": "56.3088",
    "lon": "10.6154",
    "name": "Tirstrup Airport",
    "city": "Kolind",
    "state": "Midtjylland",
    "country": "Denmark",
    "woeid": "12512604",
    "tz": "Europe\/Copenhagen",
    "phone": "+45 8775 7000",
    "type": "Airports",
    "email": "",
    "url": "http:\/\/www.aar.dk",
    "runway_length": "9127",
    "elev": "81",
    "icao": "EKAH",
    "direct_flights": "9",
    "carriers": "8"
  },
  {
    "code": "AAT",
    "lat": "47.7406",
    "lon": "88.0845",
    "name": "Altay Airport",
    "city": "Altay",
    "state": "Xinjiang",
    "country": "China",
    "woeid": "12511977",
    "tz": "Asia\/Urumqi",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": null,
    "elev": null,
    "icao": "ZWAT",
    "direct_flights": "1",
    "carriers": "1"
  },
  {
    "code": "AAX",
    "lat": "-19.5603",
    "lon": "-46.9653",
    "name": "Romeu Zuma Airport",
    "city": "Arax\u00e1",
    "state": "Minas Gerais",
    "country": "Brazil",
    "woeid": "12511034",
    "tz": "America\/Sao_Paulo",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "6230",
    "elev": "3274",
    "icao": "SBAX",
    "direct_flights": "2",
    "carriers": "1"
  },
  {
    "code": "AAY",
    "lat": "16.1947",
    "lon": "52.1694",
    "name": "Al Gaidah Airport",
    "city": "Al Ghaydah",
    "state": "Hadramawt",
    "country": "Yemen",
    "woeid": "12523000",
    "tz": "Asia\/Aden",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "8858",
    "elev": "98",
    "icao": "OYGD",
    "direct_flights": "3",
    "carriers": "2"
  },
  {
    "code": "ABA",
    "lat": "53.7167",
    "lon": "91.4333",
    "name": "Abakan",
    "city": "Abakan",
    "state": "Khakasiya",
    "country": "Russian Federation",
    "woeid": "2119917",
    "tz": "Asia\/Krasnoyarsk",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": null,
    "elev": null,
    "icao": "UNAA",
    "direct_flights": "4",
    "carriers": "3"
  },
  {
    "code": "ABC",
    "lat": "38.9833",
    "lon": "-1.85",
    "name": "Los Llanos",
    "city": "Albacete",
    "state": "Castilla-la Mancha",
    "country": "Spain",
    "woeid": "20081243",
    "tz": "Europe\/Madrid",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": null,
    "elev": null,
    "icao": "LEAB",
    "direct_flights": "3",
    "carriers": "2"
  },
  {
    "code": "ABD",
    "lat": "30.3374",
    "lon": "48.3032",
    "name": "",
    "city": "Abadan",
    "state": "Khuzestan",
    "country": "Iran",
    "woeid": "2254271",
    "tz": "Asia\/Tehran",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "10170",
    "elev": "10",
    "icao": "OIAA",
    "direct_flights": "5",
    "carriers": "3"
  },
  {
    "code": "ABE",
    "lat": "40.6514",
    "lon": "-75.4342",
    "name": "Lehigh Valley International Airport",
    "city": "Allentown",
    "state": "Pennsylvania",
    "country": "United States",
    "woeid": "12518581",
    "tz": "America\/New_York",
    "phone": "610-266-6000",
    "type": "Airports",
    "email": "",
    "url": "http:\/\/www.lvia.org\/",
    "runway_length": null,
    "elev": null,
    "icao": "KABE",
    "direct_flights": "14",
    "carriers": "11"
  },
  {
    "code": "ABI",
    "lat": "32.4164",
    "lon": "-99.6803",
    "name": "Abilene Regional Airport",
    "city": "Abilene",
    "state": "Texas",
    "country": "United States",
    "woeid": "12518518",
    "tz": "America\/Chicago",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "7199",
    "elev": "1790",
    "icao": "KABI",
    "direct_flights": "2",
    "carriers": "4"
  },
  {
    "code": "ABJ",
    "lat": "5.2556",
    "lon": "-3.9292",
    "name": "Abidjan Port Bouet Airport",
    "city": "Abidjan",
    "state": "Abidjan",
    "country": "Ivory Coast",
    "woeid": "12513870",
    "tz": "Africa\/Abidjan",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "8858",
    "elev": "20",
    "icao": "DIAP",
    "direct_flights": "22",
    "carriers": "29"
  },
  {
    "code": "ABK",
    "lat": "6.73719",
    "lon": "44.2797",
    "name": "Kabri Dar",
    "city": "Kabri Dar",
    "state": "Ogaden",
    "country": "Ethiopia",
    "woeid": "1317686",
    "tz": "Africa\/Addis_Ababa",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "10935",
    "elev": "1800",
    "icao": "HAKD",
    "direct_flights": "1",
    "carriers": "1"
  },
  {
    "code": "ABL",
    "lat": "67.1058",
    "lon": "-157.854",
    "name": "Ambler Airport",
    "city": "Kiana",
    "state": "Alaska",
    "country": "United States",
    "woeid": "12518600",
    "tz": "America\/Anchorage",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "2600",
    "elev": "289",
    "icao": "",
    "direct_flights": "2",
    "carriers": "3"
  },
  {
    "code": "ABM",
    "lat": "-10.9438",
    "lon": "142.453",
    "name": "Bamaga Airport",
    "city": "Seisia",
    "state": "Queensland",
    "country": "Australia",
    "woeid": "12510598",
    "tz": "Australia\/Brisbane",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "6700",
    "elev": "49",
    "icao": "YBAM",
    "direct_flights": "1",
    "carriers": "1"
  },
  {
    "code": "ABQ",
    "lat": "35.0494",
    "lon": "-106.625",
    "name": "Albuquerque International Airport",
    "city": "Albuquerque",
    "state": "New Mexico",
    "country": "United States",
    "woeid": "12518564",
    "tz": "America\/Denver",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "13375",
    "elev": "5352",
    "icao": "KABQ",
    "direct_flights": "41",
    "carriers": "25"
  },
  {
    "code": "ABR",
    "lat": "45.4536",
    "lon": "-98.4189",
    "name": "Aberdeen Regional Airport",
    "city": "Aberdeen",
    "state": "South Dakota",
    "country": "United States",
    "woeid": "12518514",
    "tz": "America\/Chicago",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "6904",
    "elev": "1301",
    "icao": "KABR",
    "direct_flights": "3",
    "carriers": "5"
  },
  {
    "code": "ABS",
    "lat": "22.3722",
    "lon": "31.6125",
    "name": "Abu Simbel Airport",
    "city": "Abu Simbel",
    "state": "Aswan",
    "country": "Egypt",
    "woeid": "12512656",
    "tz": "Africa\/Cairo",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "8202",
    "elev": "615",
    "icao": "HEBL",
    "direct_flights": "1",
    "carriers": "1"
  },
  {
    "code": "ABT",
    "lat": "20.2961",
    "lon": "41.6342",
    "name": "Al Baha Airport",
    "city": "Al Aqiq",
    "state": "Al Baha",
    "country": "Saudi Arabia",
    "woeid": "12517321",
    "tz": "Asia\/Riyadh",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "10991",
    "elev": "5486",
    "icao": "OEBA",
    "direct_flights": "3",
    "carriers": "1"
  },
  {
    "code": "ABV",
    "lat": "9.0056",
    "lon": "7.2661",
    "name": "Abuja International Airport",
    "city": "Gwagwa",
    "state": "Abuja Capital Territory",
    "country": "Nigeria",
    "woeid": "12515056",
    "tz": "Africa\/Lagos",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "11808",
    "elev": "1122",
    "icao": "DNAA",
    "direct_flights": "9",
    "carriers": "12"
  },
  {
    "code": "ABX",
    "lat": "-36.0678",
    "lon": "146.956",
    "name": "Albury Airport",
    "city": "Albury",
    "state": "New South Wales",
    "country": "Australia",
    "woeid": "12510583",
    "tz": "Australia\/Sydney",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "6234",
    "elev": "539",
    "icao": "YMAY",
    "direct_flights": "3",
    "carriers": "5"
  },
  {
    "code": "ABY",
    "lat": "31.5328",
    "lon": "-84.1867",
    "name": "Southwest Georgia Regional Airport",
    "city": "Albany",
    "state": "Georgia",
    "country": "United States",
    "woeid": "12521922",
    "tz": "America\/New_York",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": "6601",
    "elev": "197",
    "icao": "KABY",
    "direct_flights": "1",
    "carriers": "2"
  },
  {
    "code": "ABZ",
    "lat": "57.2004",
    "lon": "-2.20373",
    "name": "Aberdeen Dyce International Airport",
    "city": "Aberdeen",
    "state": "Scotland",
    "country": "United Kingdom",
    "woeid": "22450858",
    "tz": "Europe\/London",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "http:\/\/www.aberdeenairport.com\/",
    "runway_length": "6002",
    "elev": "215",
    "icao": "EGPD",
    "direct_flights": "37",
    "carriers": "35"
  },
  {
    "code": "ACA",
    "lat": "16.7561",
    "lon": "-99.7536",
    "name": "General Juan N Alvarez International Airport",
    "city": "Acapulco",
    "state": "Guerrero",
    "country": "Mexico",
    "woeid": "12514882",
    "tz": "America\/Mexico_City",
    "phone": "52-748-66-93-23",
    "type": "Airports",
    "email": "",
    "url": "",
    "runway_length": null,
    "elev": null,
    "icao": "MMAA",
    "direct_flights": "12",
    "carriers": "17"
  },];

/*WARM UP 🏋️‍♂️ convert each of the commented out functions below to arrow functions*/

//let myFunction = function () {
//console.log("Function was invoked!");
// };
//myFunction();
myFunction = () => {
  return "Function was invoked!";
}


// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
anotherFunction = (param) =>


  // let add = function (param1, param2) {
  //   return param1 + param2;
  // };
  // add(1,2);


  // let subtract = function (param1, param2) {
  //   return param1 - param2;
  // };
  // subtract(1,2);


  /* Work out 💪 */
  /* TASK 1 🚀 
  // Dollars to Euros - write a function that will take an amount of dollars (USD) and change it  into euros (EUR) - with the current exchange rate 1 USD === .85 EUR */
  function convert(usd) {
    return usd * .85
  }
console.log(convert(5));
/* TASK 2 🚀 
// Take the function above a step further - you have dollars and you are visiting the following 5 countries: Britan, Germany, Turkey, Bulgaria and Ukraine - you need to write a function that will take a dollar amount, and a country and return the exchange rate for that country - the function should return a string that says `your exchange rate for dollarAmount dollars in country will be exchangeRate currencyInitals ` If the country is not on your list your string should return 'that country is not on your list'
// 1 usd === 0.85 euro
// 1 usd === 0.77 British Pounds
// 1 usd === 6.96 Turkish Lira 
// 1 usd === 1.66 Bulgarian Lev 
// 1 usd === 27.7 Ukrainian hryvnia */
function convert(usd, country) {
  if (country === "Britain") {
    return `Your exchange rate ${usd} dollars in ${country} will be ${usd * .77} pounds.`
  }
  else if (country === "Turkey") {
    return `Your exchange rate ${usd} dollars in ${country} will be ${usd * 6.96} Lira.`

  } else if (country === "Bulgaria") {
    return `Your exchange rate ${usd} dollars in ${country} will be ${usd * 1.66} Lev.`

  } else if (country === "Ukrain") {
    return `Your exchange rate ${usd} dollars in ${country} will be ${usd * 27.7} Hryvnia.`

  } else if (country === "Germany") {
    return `Your exchange rate ${usd} dollars in ${country} will be ${usd * .85} Euros`

  } else {
    return `${country} is not on your list`
  }

}

/*TASK 3 🚀
/// Write a function that takes an airport code and returns the city, country of that airport 
// find the following codes AAA, ABZ, ABX, ABT, ACA */
function findData(code) {
  for (let i = 0; i < airports.length; i++) {
    if (airports[i].code === code) {
      return `${airports[i].city}, ${airports[i].country}`
    }
  }
}
console.log(findData("AAA"))

/*TASK 4 🚀 
// Write a function to that will find the phone number for an airport in a given city  */
function findNumber(city) {
  for (let i = 0; i < airports.length; i++) {
    if (airports[i].city === city) {
      return airports[i].phone
    }
  }
}


/*TASK 5 🚀
// Write a function that will return all the airports in a given country  */
function findAll(country){
  for (let i =0; i< airports.length; i++) {
    if (airports[i].country === country) {
      return findAll[i].country

    }
  }
}


/*TASK 6 🚀
// Write a function that takes and airport name and returns the airport code
// find the code for the following airports: Al Baha Airport, Ambler Airport, Abuja International Airport*/
function airportNames(code) {
  for (let i=0; i<airports.length; i++){
    if( airports[i].airportNames === code) {
      return airportNames[i].code
    }

  }
}
console.log("Al Baha Airport");
console.log("Ambler Airport");
console.log("Abuja International Airport")


/*TASK 7 🚀
// Write a function that takes an airport code and returns the number of direct flights available */
function airportCode(direct_flights){
  for(let i=0; i <airports.length; i++){
    if( airports[i].airportCode ===direct_flights){
      return airportCode[i].direct_flights
    }
  }
}

/*TASK 8 🚀
// Find out what your flight options are - write a function that returns a new array of all the country names in a set of data*/
