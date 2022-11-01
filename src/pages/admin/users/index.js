import toastr from "toastr";
import { getAll, remove } from "../../../api/personnel";
import AdminNav from "../../../components/AdminNav";
import "toastr/build/toastr.min.css";
import { reRender } from "../../../utils";

const AdminNewsPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="min-h-full">
            ${AdminNav.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                Back End Developer
                            </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                            <a href="/admin/users/add" class="sm:ml-3">
                                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <!-- Heroicon name: solid/check -->
                                <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                Add new
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                                                    <th scope="col" class="relative px-6 py-3"></th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                ${data.map((user, index) => `
                                                        <tr>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                ${index + 1}
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                ${user.name}
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                            <img src="${user.img}" alt="" id="img" class="w-20">
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                ${user.position}
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                <a href="/admin/users/${user.id}/edit">Edit</a>
                                                                <button data-id=${user.id} class="btn btn-remove inline-block px-4 py-3 text-white rounded bg-indigo-500 hover:bg-indigo-800">Delete</button>
                                                            </td>
                                                        </tr>
                                                
                                                `).join("")}
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    </div>
                                    </div>

                    </div>
                    <!-- /End replace -->
                </div>
            </main>
        </div>
        
        `;
    },
    afterRender() {
        // lấy toàn bộ button thông qua class .bnt
        const btns = document.querySelectorAll(".btn");
        // tạo vòng lặp để lấy từng button element
        btns.forEach((btn) => {
            // Lấy giá trị ID thông qua thuộc tính data-id của button
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("Bạn đã xóa thành công");
                    }).then(() => {
                        reRender(AdminNewsPage, "#app");
                    });
                }
                // remove
            });
        });
    },
};
export default AdminNewsPage;