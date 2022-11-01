import { getAll } from "../api/personnel";

const News = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
                    <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Danh sách nhân viên</h2>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

<!-- ====== Table Section Start -->
<section class="bg-white py-10 lg:py-[120px]">
   <div class="">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="max-w-full overflow-x-auto">
               <table class="table-auto w-full">
                  <thead>
                     <tr class="bg-primary text-center">
                        <th class="w-1/6  min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent">
                           Name
                        </th>                       
                        <th class="w-1/6  min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent">
                           Image
                        </th>                       
                        <th class="w-1/6  min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent">
                            Position
                        </th>             
                        <th class="w-1/6  min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent">
                           Action
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                    ${data.map((auths) => `
                        <tr>
                        <td class=" text-center text-dark font-medium text-base  py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]" >
                        ${auths.name}
                        </td>
                        <td class="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8]">
                        <img src="${auths.img}" alt="" class="mx-auto w-20">
                        </td>
                        <td class="text-center text-dark font-medium text-base  py-5  px-2  bg-[#F3F6FF] border-b border-[#E8E8E8]">
                            ${auths.position}
                        </td>
                        <td class="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8]">
                        <a href="javascript:void(0)" class="border border-primary py-2 px-6 text-primary inline-block rounded hover:bg-primary hover:text-white">Chấm công</a>
                        </td>
                    </tr>
                    `).join("")}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</section>
                    
                    `;
    },
};
export default News;