function ItemTechnology({ imgTech, nameTech }) {
  return (
    <div className="flex items-center bg-dark-surface-container-low py-3 px-3 gap-x-2 rounded-lg">
      <img src={`${imgTech}`} alt="html" className="w-[20%] h-auto" />
      <p>{nameTech}</p>
    </div>
  );
}

export default ItemTechnology;
