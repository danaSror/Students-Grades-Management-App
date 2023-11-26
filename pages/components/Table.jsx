import { useState } from "react";

function Table() {
  const [dataForm, setDataForm] = useState([
    { id: 1, name: "John", algoScore: 20, frontScore: 85 },
    { id: 2, name: "Jane", algoScore: 80, frontScore: 75 },
  ]);

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 sm:px-4 lg:px-5">
          <div class="overflow-hidden">
            <table class=" text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-4 py-4">
                    Name
                  </th>
                  <th scope="col" class="px-4 py-4">
                    Algo Score
                  </th>
                  <th scope="col" class="px-4 py-4">
                    Front Score
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataForm.map((item) => (
                  <tr
                    class="border-b transition duration-300 ease-in-out hover:bg-red-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    key={item.id}
                  >
                    <td class="whitespace-nowrap px-6 py-4">{item.name}</td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {item.algoScore}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {item.frontScore}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                      {item.algoScore+item.frontScore}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
