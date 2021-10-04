export const resultData = (data) => {
  return data.ants.map((obj) => ({
    ...obj,
    status: "not yet run",
    calculation: 0,
  }));
};

export const list = (antList) => {
  return antList.map((e) => {
    return { ...e, status: "inProgress" };
  });
};
