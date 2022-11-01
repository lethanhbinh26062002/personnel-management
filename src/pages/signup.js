import { signup } from "../api/user";

const signUp = {
    render() {
        return /* html */`
        <div class="container max-w-full mx-auto py-24 px-6">
        <div class="font-sans">
        <div class="max-w-sm mx-auto px-6">
          <div class="relative flex flex-wrap">
            <div class="w-full relative">
              <div class="mt-6">
                <div class="text-center font-semibold text-black">
                  Create my account 
                </div>
               
                <form class="mt-8" id="formSignup">
                  <div class="mx-auto max-w-lg">
                    <div class="py-2">
                      <span class="px-1 text-sm text-gray-600">Username</span>
                      <input placeholder="" type="text" id="username"
                        class="text-md block px-3 py-2  rounded-lg w-full 
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                    </div>
                    <div class="py-2">
                    <span class="px-1 text-sm text-gray-600">Email</span>
                    <input placeholder="" type="text" id="email"
                      class="text-md block px-3 py-2  rounded-lg w-full 
                    bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                  </div>
                    <div class="py-2" x-data="{ show: true }">
                      <span class="px-1 text-sm text-gray-600">Password</span>
                      <div class="relative">
                        <input placeholder="" type="password" id="password" class="text-md block px-3 py-2 rounded-lg w-full 
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                      focus:placeholder-gray-500
                      focus:bg-white 
                      focus:border-gray-600  
                      focus:outline-none">
                      </div>
                    </div>
                    <div class="flex justify-between"><label class="block text-gray-500 font-bold my-4"><input type="checkbox"
                          class="leading-loose text-pink-600"> <span class="py-2 text-sm text-gray-600 leading-snug"> Remember
                          Me </span></label> <label class="block text-gray-500 font-bold my-4"><a
                          href="#"
                          class="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"><span>Forgot
                            Password?</span></a></label></div> <button type="submit" class="mt-3 text-lg font-semibold 
                      bg-gray-800 w-full text-white rounded-lg
                      px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                      Login
                    </button>
                  </div>
                </form>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                username: document.querySelector("#username").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });

            document.location.href = "/signin";
        });
    },
};

export default signUp;