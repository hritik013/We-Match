const getServices = () => {
  const savedItem = localStorage.getItem("services");
  if (savedItem) {
    const data = JSON.parse(savedItem);
    return data;
  }
  return [];
};
const saveTheService = (input) => {
  const savedService = getServices();
  const isExist = savedService.find(
    (service) => service.package_id === input.package_id
  );
  if (!isExist) {
    savedService.push(input);
    localStorage.setItem("services", JSON.stringify(savedService));
  }
};
export { saveTheService, getServices };
