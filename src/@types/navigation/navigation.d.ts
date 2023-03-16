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
      Confirmation: {
        title: string;
        message: string;
        nextScreenRoute: string;
      };
      MyCars: {
        car: CarDTO;
      };
      SignIn: {
        car: CarDTO;
      };
      SignUpFirstStep: {
        user: {
          name: string;
          email: string;
          driverLicense: string;
        };
      };
      SignUpSecondStep: {
        user: {
          name: string;
          email: string;
          driverLicense: string;
        };
      };
    }
  }
}
