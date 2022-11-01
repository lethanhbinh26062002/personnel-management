/* eslint-disable no-unused-vars */
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/users";
import AdminAddPost from "./pages/admin/users/add";
import AdminEditPost from "./pages/admin/users/edit";
import HomePage from "./pages/home";
import signIn from "./pages/SignIn";
import signUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            document.location.href = "/";
            toastr.error("Bạn cần phải đăng nhập mới vào được trang này");
        } else {
            done();
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/signup": () => print(signUp),
    "/signin": () => print(signIn),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/users": () => print(AdminNewsPage),
    "/admin/users/add": () => print(AdminAddPost),
    "/admin/users/:id/edit": ({ data }) => print(AdminEditPost, data.id),
});

router.resolve();