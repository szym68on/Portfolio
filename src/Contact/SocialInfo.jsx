function SocialInfo({ path, link }) {
  return (
    <div className="w-[30px] h-auto cursor-pointer">
      <a href={`${link}`} target="blank">
        <img src={`${path}`} alt="media" />
      </a>
    </div>
  );
}

export default SocialInfo;
