import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/featured.jpeg"
import "./featured.css"
const Featured = () => {
    return (
        <section className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured Item"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-40 pb-20 pt-12 px-36 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <div className="mb-2">
                        <p>Aug 2-, 2024</p>
                        <p className="uppercase">Where can I get some?</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolor sit repudiandae optio quo adipisci consequuntur ullam sunt quaerat voluptatem tempore veniam blanditiis assumenda nihil, repellendus ratione accusamus obcaecati dicta laboriosam eos porro. Error pariatur nostrum facilis aliquam rerum voluptas qui temporibus, quas obcaecati eum fugiat alias sunt provident est.</p>
                    <button className="btn btn-outline mt-4 border-o border-b-4">Order Now</button>
                </div>
            </div>

        </section>
    );
};

export default Featured;