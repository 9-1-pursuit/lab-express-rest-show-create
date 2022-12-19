const orderArr = (arr, mode, key1, key2) => {
    // val1 and val2 vary based on asc or desc
    arr.sort((a, b) => {
      let val1 = (mode === "asc" ? a[key1] : b[key1]).toLowerCase();
      let val2 = (mode === "asc" ? b[key1] : a[key1]).toLowerCase();
      if (val1 < val2) {
        return -1;
      }
      if (val1 > val2) {
        return 1;
      }
      // when key1 val is the same, checks key2
      val1 = (mode === "asc" ? a[key2] : b[key2]).toLowerCase();
      val2 = (mode === "asc" ? b[key2] : a[key2]).toLowerCase();
      if (val1 < val2) {
        return -1;
      }
      if (val1 > val2) {
        return 1;
      }
      return 0;
    });
  };

  const filterByCrisis = (arr, entry) => {
    let num;
    let filteredArr;
    if (entry.includes("gte")) {
      num = +entry.replace("gte", "");
      filteredArr = arr.filter((el) => el.daysSinceLastCrisis >= num);
    } else if (entry.includes("gt")) {
      num = +entry.replace("gt", "");
      filteredArr = arr.filter((el) => el.daysSinceLastCrisis > num);
    } else if (entry.includes("lte")) {
      num = +entry.replace("lte", "");
      filteredArr = arr.filter((el) => el.daysSinceLastCrisis <= num);
    } else if (entry.includes("lt")) {
      num = +entry.replace("lt", "");
      filteredArr = arr.filter((el) => el.daysSinceLastCrisis < num);
    }
    return filteredArr;
  };

  module.exports = {orderArr, filterByCrisis}