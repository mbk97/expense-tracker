export const addNairaSign = (amount) => {
  if (typeof amount === "undefined") {
    return "₦0";
  }
  const newAmount = amount.toString().replace(/[,₦]/, "");

  return `₦${Number(newAmount).toLocaleString()}`;
};
