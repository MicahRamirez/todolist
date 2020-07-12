import { ToDoContainer } from "../components/ToDoContainer";

const IndexPage = () => {
  return (
    <div>
      <ToDoContainer />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
