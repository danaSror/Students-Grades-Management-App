import { useState, useEffect } from "react";

function Table() {
  const [dataForm, setDataForm] = useState({
    name: "",
    algoScore: "",
    frontScore: "",
    total: "",
  });

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setDataTable(data);
    };
    fetchData();
  }, []);

 
  const writeToJSONFile = async () => {
    try {
      const response = await fetch("/api/writeData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: dataTable }),
      });

      const result = await response.json();
      console.log("Data written to JSON file:", result);
    } catch (error) {
      console.error("Error writing data to JSON file:", error);
    }
  };



  const sortTableByTotal = () => {
    const sortedTable = [...dataTable].sort(
      (a, b) => (b.algoScore + b.frontScore) - (a.algoScore + a.frontScore)
    );
    setDataTable(sortedTable);
  };

  return (
    <div className="h-screen mt-10">
      <form class="max-w-md mx-auto">
        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={dataForm.name}
              onChange={(e) =>
                setDataForm({ ...dataForm, name: e.target.value })
              }
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Student Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={dataForm.algoScore}
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  algoScore: parseInt(e.target.value),
                })
              }
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Algo Score
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={dataForm.frontScore}
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  frontScore: parseInt(e.target.value),
                })
              }
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Fronted Score
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-1 py-0.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              setDataForm({
                ...dataForm,
                total: dataForm.algoScore + dataForm.frontScore,
              });
              dataTable.push(dataForm);
              console.log(dataTable);
              writeToJSONFile();
              setDataForm({
                name: "",
                algoScore: "",
                frontScore: "",
                total: "",
              });
            }}
          >
            Submit
          </button>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-1 py-0.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              setDataTable([]);
              writeToJSONFile();
            }}
          >
            clear all
          </button>
        </div>
      </form>
      <div class="flex flex-col items-center">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block py-2 sm:px-4 lg:px-5">
            <div class="overflow-hidden">
              <table class=" text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-4 py-4">
                      Student Name
                    </th>
                    <th scope="col" class="px-4 py-4">
                      Algo Score
                    </th>
                    <th scope="col" class="px-4 py-4">
                      Front Score
                    </th>
                    <th scope="col" class="px-6 py-4 flex items-center">
                      Total
                      <a href="#" onClick={() => {sortTableByTotal()}}>
                        <svg
                          class="w-3 h-3 ms-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataTable.map((item) => (
                    <tr
                      class="border-b transition duration-300 ease-in-out hover:bg-blue-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
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
                        {item.algoScore + item.frontScore}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
