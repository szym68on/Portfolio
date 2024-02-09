function ItemProject({ description, codeUrl, imgPath, demoUrl }) {
  return (
    <div className="bg-dark-surface-container-low w-[95%] rounded-lg flex flex-col justify-center items-center py-5 max-h-[400px]">
      <div className="w-[80%]  rounded-lg">
        <img src={`${imgPath}`} alt="project" className="rounded-lg"></img>
      </div>
      <div className="pl-3 mt-2 w-[80%]">
        <p className="text-[0.7rem]">Web App</p>
        <h3 className="text-[0.9rem] mt-1">{description}</h3>
      </div>
      <div className="w-[100%] flex justify-between px-3 mt-2">
        <a
          href={`${codeUrl}`}
          className="text-dark-on-background opacity-30 text-[0.7rem]"
          target="blank"
        >
          Code
        </a>
        <a
          href={`${demoUrl}`}
          className="text-dark-on-background opacity-30 text-[0.7rem]"
          target="blank"
        >
          Demo
        </a>
      </div>
    </div>
  );
}

export default ItemProject;
