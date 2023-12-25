import Button from "./Button";
import { list } from "../utils/constants";



const ButtonList = () => {
  return (
    <div className="flex ml-4">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
      {/*                    
            <Button name="All" />
            <Button name="Mixes" />
            <Button name="Music" />
            <Button name="Cricket" />
            <Button name="Gaming" />
            <Button name="News" />
            <Button name="Lofi" />
            <Button name="Thrillers" />
            <Button name="Standup" />
            <Button name="Live" />
            <Button name="React" />
            <Button name="JavaScript" />
             */}
    </div>
  );
};

export default ButtonList;
