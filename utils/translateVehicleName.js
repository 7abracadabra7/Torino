const vehicles = [
  { engName: "Bus", perName: "اتوبوس" },
  { engName: "Van", perName: "ون" },
  { engName: "Airplane", perName: "هواپیما" },
  { engName: "SUV", perName: "سواری" },
];

export const translateVehicleName = (vehicle) => {
  const foundVehicle = vehicles.find((item) => item.engName === vehicle);
  return foundVehicle ? foundVehicle.perName : "نامشخص";
};
