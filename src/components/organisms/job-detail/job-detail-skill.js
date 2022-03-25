import SkillItem from "./job-skill-item";

const SkillList = (props) => {
  return (
    <ul>
      {props.skills.tools.map((item) => {
        return <SkillItem title={item} />;
      })}
    </ul>
  );
};
export default SkillList;
