import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando trajeto de bike")
    }
    getCargo(): void {
        console.log("Bike a caminho...")
    }

}