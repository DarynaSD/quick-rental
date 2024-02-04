export const formatModalFuel = item => {
  const {
    fuelConsumption, engineSize
  } = item;

  const formatted = [
      ` Fuel Consumption: ${fuelConsumption}`,
      `Engine Size: ${engineSize}`,
  ].join(' | ');

  return formatted;
};