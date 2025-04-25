
export default function TableHeader() {
  return (
        <thead className="text-md font-secoundary text-gray-500">
            <tr className="flex justify-between p-3">
              <th className="flex-1 text-right">نام</th>
              <th className="flex-1 text-right">آخرین قیمت</th>
              <th className="flex-1 text-right">تغییر ۲۴h</th>
              <th className="flex-1 text-right">نمودار هفتگی</th>
              <th className="w-[120px]"></th>
            </tr>
          </thead>
  )
}
