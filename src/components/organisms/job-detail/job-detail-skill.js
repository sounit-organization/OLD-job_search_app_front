import SkillItem from "./job-skill-item";

const SkillList = (props) => {
  return (
    <ul>
      {props.skills.map((item) => {
        return <SkillItem key={item.id} id={item.id} title={item.title} />;
      })}
    </ul>
  );
};
export default SkillList;
