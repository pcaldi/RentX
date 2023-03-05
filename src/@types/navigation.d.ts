export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: {
        name: string;
      };
      CarDetails: {
        car: CarDTO;
      };
      Scheduling: {
        car: CarDTO;
      };
      SchedulingDetails: {
        car: CarDTO;
        dates: string[];
      };
      SchedulingComplete: {
        car: CarDTO;
      };
      MyCars: {
        car: CarDTO;
      };
    }
  }
}
