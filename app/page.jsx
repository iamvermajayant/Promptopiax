import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompt</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        temporibus, laborum amet iste omnis unde illo porro velit facere natus
        autem animi dignissimos libero pariatur ipsa, impedit iusto odio sequi.
      </p>

      {/* {feed} */}
      <Feed/>
    </section>
  );
};

export default Home;
