const convertToModule = (classString, styles) => {
  const classArray = classString.trim().split(' ');
  const styleArray = classArray.map(classItem => {
    return styles[classItem];
  });
  return styleArray;
};
export default convertToModule;
