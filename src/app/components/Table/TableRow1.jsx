export default function TableRow1({title, sub}){
  return(
    <>
      <tr>
        <td className="border boder-gray-300 p-[20px] text-center font-bold">{title}<sub>{sub}</sub></td>
        <td className="border boder-gray-300 p-[20px]">
          <input type="text" />
        </td>
        <td className="border boder-gray-300 p-[20px]">
          <input type="text" />
        </td>
        <td className="border boder-gray-300 p-[20px]">
          <input type="text" />
        </td>
      </tr>
    </>
  )
}