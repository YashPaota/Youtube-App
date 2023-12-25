const SidebarOption = ({name , icon}) => {
  return (
    <div className="flex hover:bg-gray-200 rounded-lg mt-1 px-5 py-3 cursor-pointer">
        <img className="w-6 mr-5 h-6" src={icon} alt="Icon" />
        <h2 className="text-lg font-semibold">{name}</h2>

    </div>
  )
}

export default SidebarOption;