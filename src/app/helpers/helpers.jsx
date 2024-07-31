export const convertStringToNum = (array) => {
  const row = array.length;
  const col = array[0].length;

  for (let i = 0; i < row; i++){
    for (let j = 0; j < col; j++){
      array[i][j] = parseFloat(array[i][j]);
    }
  }
  
  return array;
}

export const processInputToArray = (className, numOfRemoveRow = 1, numOfRow = 3) => {
  let t;
  if (numOfRow === 3){
    t = [[], [], []];
  }
  else {
    t = [[], []];
  }
  
  const table = document.querySelector(className);
  const tableRow = table.rows.length;
  for (let i = 1; i < tableRow - numOfRemoveRow; i++){
    var cells = table.rows.item(i).cells;
    var cellLength = cells.length;

    for (let j = 1; j < cellLength; j++){
      let cellVal = cells.item(j);
      let cellValInput = cellVal.children.value;
      if (cellValInput.value !== ''){
        t[i - 1].push(cellValInput.value);
      }
    }
  }
  t = convertStringToNum(t);
  return {t, table};
}

export const calcExp1 = (array, j) => {
  const t1 = array[0][j - 1];
  const t2 = array[1][j - 1];
  const t3 = array[2][j - 1];
  const res = 50 * 1 * (((t3 - t1) - (t2 - t3)) / (t2 - t3))
  return res.toFixed(2);
}

export const calcExp2 = (array, j, avgRes) => {
  const t1 = array[0][j - 1];
  const t2 = array[1][j - 1];
  const t3 = array[2][j - 1];

  const mcNaCl = 51;
  const resQ = (avgRes + mcNaCl) * (t3 - ((t1 + t2) / 2));
  return resQ.toFixed(2);
}

export const calcExp3 = (array, j, avgRes, mCuSO4) => {
  const t1 = array[0][j - 1];
  const t2 = array[1][j - 1];
  
  const nCuSO4 = mCuSO4 / 160;
  const resQ = (avgRes + 50 * 1 + mCuSO4 * 1) * (t2 - t1);
  const deltaH = resQ / nCuSO4;
  return {
    resQ,
    deltaH
  }
}

export const calcExp4 = (array, j, avgRes, mNH4Cl) => {
  const t1 = array[0][j - 1];
  const t2 = array[1][j - 1];
  
  const nNH4Cl = mNH4Cl / 53.5;
  const resQ = (avgRes + 50 * 1 + mNH4Cl * 1) * (t2 - t1);
  console.log(t2);
  const deltaH = resQ / nNH4Cl;
  return {
    resQ,
    deltaH
  }
}