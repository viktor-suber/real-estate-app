export const getFilteredHomeIds = (homes: any, filterInfo: any) => {
  const filteredHomeIds: any = [];

  const minPrice = filterInfo.minPrice ? filterInfo.minPrice : 0;
  // TODO - change to dynamic value based on true max price
  const maxPrice = filterInfo.maxPrice ? filterInfo.maxPrice : 5000000;
  const minBedrooms = filterInfo.minBedrooms ? filterInfo.minBedrooms : 0;
  // TODO - change to dynamic value based on true max bedrooms
  const maxBedrooms = filterInfo.maxBedrooms ? filterInfo.maxBedrooms : 20;

    homes.forEach((home: any) => {

      if ((minPrice <= home.price && home.price <= maxPrice) && (minBedrooms <= home.property.numberBedrooms && home.property.numberBedrooms <= maxBedrooms)) {
        filteredHomeIds.push(home.id);
      }

    });

  return filteredHomeIds;
};