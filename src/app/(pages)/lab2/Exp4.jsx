import Title from "@/app/components/Title/Title";
import { calcExp4, processInputToArray } from "@/app/helpers/helpers";

export default function Exp4({ avgRes }){
  const handleClick = () => {
    const { t, table } = processInputToArray('.exp4-table', 3, 2);
    const mNH4Cl = parseFloat(document.querySelector('#mNH4Cl').value);
    const times = t[0].length;
    let totalRes = 0;
    let avgResExp4 = 0;
    const Q = document.querySelector('.Q4');
    const deltaH = document.querySelector('.H4');
    for (let j = 1; j < times + 1; j++){
      const inputQ = Q.children[j].children.result;
      const inputH = deltaH.children[j].children.result;
      const res = calcExp4(t, j, avgRes, mNH4Cl);
      console.log(inputQ.value);
      inputQ.value = res.resQ.toFixed(2);
      inputH.value = res.deltaH.toFixed(2);
      totalRes += parseFloat(res.deltaH.toFixed(2));
    }
    const deltaHtb = document.querySelector('.Htb4')
    avgResExp4 = totalRes / times;
    const deltaHtbInput = deltaHtb.children[1].children.result;
    deltaHtbInput.value = avgResExp4.toFixed(3);
  }
  const handleChange = (e) => {
    const selectValue = e.target.value;
    const deltaH = document.querySelector('.H4');
    const deltaHtb = document.querySelector('.Htb4')
    if (selectValue === '1'){
      for (let i = 1; i < deltaH.children.length; i++){
        if (deltaH.children[i].children.result.value !== ''){
          const temp = parseFloat(deltaH.children[i].children.result.value);
          deltaH.children[i].children.result.value = temp * -1;
        }
      }
      const temp = parseFloat(deltaHtb.children[1].children.result.value);
      deltaHtb.children[1].children.result.value = temp * -1;
    }
    else{
      for (let i = 1; i < deltaH.children.length; i++){
        if (deltaH.children[i].children.result.value !== ''){
          const temp = parseFloat(deltaH.children[i].children.result.value);
          deltaH.children[i].children.result.value = temp * -1;
        }
      }
      const temp = parseFloat(deltaHtb.children[1].children.result.value);
      deltaHtb.children[1].children.result.value = temp * -1;
    }
  }
  return(
    <>
      <div className="py-[40px] border-b">
        <Title
          title={'Thí Nghiệm 4'}
        />
        <select onChange={handleChange} className="mb-[20px]" name="check-2" id="check-2">
          <option value="0">Thu Nhiệt</option>
          <option value="1">Toả Nhiệt</option>
        </select>
        <div className="mb-[20px]">
          <label htmlFor="mNH4Cl">m<sub>NH<sub>4</sub>Cl</sub>=</label>
          <input type="number" name="weight" id="mNH4Cl" />
          g
        </div>
        <table className="exp4-table table-auto border bg-white border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 p-[20px]">Nhiệt độ</th>
              <th className="border border-gray-300 p-[20px]">Lần 1</th>
              <th className="border border-gray-300 p-[20px]">Lần 2</th>
              <th className="border border-gray-300 p-[20px]">Lần 3</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td className="border boder-gray-300 p-[20px] text-center font-bold">t<sub>1</sub></td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
            </tr>
            <tr>
              <td className="border boder-gray-300 p-[20px] text-center font-bold">t<sub>2</sub></td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
            </tr>
            <tr className="Q4">
              <td className="border boder-gray-300 p-[20px] text-center font-bold">Q (cal)</td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
            </tr>
            <tr className="H4">
              <td className="border boder-gray-300 p-[20px] text-center font-bold">delta H (cal/mol)</td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
            </tr>
            <tr className="Htb4">
              <td className="border boder-gray-300 p-[20px] text-center font-bold">delta H<sub>tb</sub> (cal/mol)</td>
              <td colSpan={3} className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
            </tr>
          </tbody>
        </table>

        <button onClick={handleClick} className="p-[20px] text-[18px] bg-orange-500 font-bold w-full">Tính</button>
      </div>
    </>
  )
}