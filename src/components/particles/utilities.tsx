export const getIco = (icoName: string) => {
  return require(`../assets/${icoName}`).default;
};
