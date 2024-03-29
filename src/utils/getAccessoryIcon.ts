import SpeedSvg from "../assets/speed.svg";
import AccelerationSvg from "../assets/acceleration.svg";
import GasolineSvg from "../assets/gasoline.svg";
import ForceSvg from "../assets/force.svg";
import PeopleSvg from "../assets/people.svg";
import EnergySvg from "../assets/energy.svg";
import HybridSvg from "../assets/hybrid.svg";
import ExchangeSvg from "../assets/exchange.svg";
import CarSvg from "../assets/car.svg";

export function getAccessoryIcon(type: string) {
  switch (type) {
    case "speed":
      return SpeedSvg;
    case "acceleration":
      return AccelerationSvg;
    case "gasoline_motor":
      return GasolineSvg;
    case "turning_diameter":
      return ForceSvg;
    case "seats":
      return PeopleSvg;
    case "electric_motor":
      return EnergySvg;
    case "hybrid_motor":
      return HybridSvg;
    case "exchange":
      return ExchangeSvg;
    default:
      return CarSvg;
  }
}
