import React from "react";

interface Props {}
interface HeroProps {}
interface LayoutProps {}

const Hero: React.FC<HeroProps> = (props) => {
  console.log(props);
  return (
    <div className="hero">
      <span>TD</span>
      <style jsx>{`
        span {
          color: white;
        }
        .hero {
          display: flex;
          background-color: #009ac1;
          height: 50px;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

const Layout: React.FC<LayoutProps> = (props) => {
  console.log(props);
  return (
    <div>
      <Hero />
      <div className="container-grid">{props.children}</div>
    </div>
  );
};

const ToDoContainer: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <Layout>
      <div>
        <p>hello world</p>
      </div>
    </Layout>
  );
};

export { ToDoContainer };
