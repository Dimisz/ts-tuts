const add = (a: number, b: number): number => {
  return a + b;
};

//specific return types
const logger = (message: string): void => {
  console.log(message);
};

// corner case
const throwError = (message: string): never => {
  throw new Error(message);
};

// destructuring
const forecast = {
  date: new Date(),
  weather: 'sunny'
};

//const logWeather = (forecast: {date: Date, weather: string}): void => {
  const logWeather = ({ date, weather }: {date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);