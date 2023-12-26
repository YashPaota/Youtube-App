const SidebarOption = ({name , icon}) => {
  return (
    <div className="flex hover:bg-gray-200 rounded-lg  px-4 py-3 cursor-pointer">
        <img className="w-6 mr-5 h-6" src={icon} alt="Icon" />
        <h2 className="text-md font-normal">{name}</h2>

    </div>
  )
}

export default SidebarOption;