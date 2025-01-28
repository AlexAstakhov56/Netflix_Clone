import Banner from "../components/Banner";

const About = () => {
  const styles = "my-2 text-lg";
  return (
    <div className="min-h-screen container py-6">
      <Banner text="About Us" />
      <div className="py-10 xl:py-20 px-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl lg:text-3xl mb-4 font-semibold tracking-wide">
            Welcome to my Netflix Clone
          </h3>
          <div className={styles}>Here you can find:</div>
          <div className={styles}>
            <span className="text-secondary">- Movie Library:</span> An
            extensive catalog that includes both classic masterpieces and the
            latest news from the film industry.
          </div>
          <div className={styles}>
            <span className="text-secondary">- User-friendly interface:</span>{" "}
            I've made this website as easy to use as possible so that you can
            easily find the movies you are interested in.
          </div>
          <div className={styles}>
            <span className="text-secondary">- Favorites section:</span> You can
            add your favorite movies to your favorites so that you can easily
            find and watch them.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
