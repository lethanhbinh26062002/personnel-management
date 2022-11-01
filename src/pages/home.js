import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";

const HomePage = {
    async render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
        <div id="header">
            ${Header.render()}
        </div>
            <main>
                <div class="news">
                    ${await News.render()}
                </div>
            </main>
            ${Footer.render()}
        </div>
            
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;