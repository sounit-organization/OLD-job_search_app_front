import SkillItem from "./job-skill-item";

const SkillList = (props) => {
  console.log(props.skills);
  return (
    <ul>
      {props.skills.map((item) => {
        return <SkillItem title={item} />;
      })}
    </ul>
  );
};
export default SkillList;
