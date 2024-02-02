export const formatData = item => {
  const {
    make,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
  } = item;

  const premium =
    Number(rentalPrice.slice(1, rentalPrice.length)) > 30
      ? 'Premium'
      : 'Lowcost';

  const formattedAddress = address.split(',').slice(1, 3);

  const formatted = [
    ...formattedAddress,
    rentalCompany,
    premium,
    type.split(',')[0],
    make,
    mileage.toString(),
    accessories[2],
  ].join(' | ');

  return formatted;
};
