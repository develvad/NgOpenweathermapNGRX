// Principal Model for City
export interface WcityModel  {
    coord: CoordModel;
    weather: Array<WeatherModel>;
    base: String;
    main: MainCityModel;
    visibility: Number;
    wind: WindModel;
    clouds: { all: Number};
    dt: Number;
    sys: SysCityModel;
    id: Number;
    name: String;
    cod: Number;
}

// Secondaries models for City Model
export interface CoordModel { lon: Number; lat: Number; }
export interface WeatherModel { id: Number; main: String; description: String; icon: String; }
export interface MainCityModel { temp: Number; pressure: Number; humidity: Number; temp_min: Number; temp_max: Number; }
export interface WindModel { speed: Number; deg: Number; }
export interface SysCityModel {type: Number; id: Number; message: Number; country: String; sunrise: Number; sunset: Number;   }
