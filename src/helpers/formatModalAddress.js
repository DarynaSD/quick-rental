export const formatModalAddress = item => {
  const {
    address,
    id, year, type
    } = item;
    
    const formattedAddress = address.split(',').slice(1, 3);

  const formatted = [
    ...formattedAddress,
      `Id: ${id}`,
      `Year: ${year}`,
    `Type: ${type}`,
  ].join(' | ');

  return formatted;
};