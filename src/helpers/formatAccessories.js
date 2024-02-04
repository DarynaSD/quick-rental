export const formatAccessories = item => {
  const {
      accessories,
      functionalities
    } = item;

  const formatted = [
      ...accessories, 
      ...functionalities,
  ].join(' | ');

  return formatted;
};