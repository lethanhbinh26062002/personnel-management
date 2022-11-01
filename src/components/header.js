import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */`
        <div class="bg-orange-500">
            <ul class="flex">
            <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Home</a></li>
            ${localStorage.getItem("user") ? `<ul class="flex">
            <li><a href="/admin/dashboard" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Admin Page</a></li>
            <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
            <li><a  id="logout" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white cursor-pointer">Logout</a></li>
        </ul>` : `<li><a href="/signin"class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Signin</a></li>
        <li><a href="/signup" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Signup</a></li>`}
        </div>
        
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");
        document.querySelector("#account-email").innerHTML = user.email;
        // logout
        logout.addEventListener("click", () => {
            toastr.success("Logout thành công");
            localStorage.removeItem("user");
            reRender(Header, "#header");
        });
    },
};
export default Header;