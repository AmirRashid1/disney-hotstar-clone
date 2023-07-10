

 function Headeritem({name,Icon}) {
  return (
    <div className="text-white flex items-center gap-3 text-[1.2rem] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
        <Icon />
        <h1 className="">{name}</h1>
    </div>
  )
}
export default Headeritem;