export const getImg = (icoName: string) => {
  return require(`../assets/${icoName}`).default;
};
