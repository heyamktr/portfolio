import React, {useState} from 'react'
import './index.css';
import html from '../../assets/skills/html.svg';
import css from '../../assets/skills/css.svg';
import bootstrap from '../../assets/skills/bootstrap.svg';
import git from '../../assets/skills/git.svg';
import docker from '../../assets/skills/docker.svg';
import javascript from '../../assets/skills/javascript.svg';
import postgresql from '../../assets/skills/postgresql.svg';
import react from '../../assets/skills/react.svg';
import mongoDB from '../../assets/skills/mongoDB.svg';
import node from '../../assets/skills/node.svg';
import R from '../../assets/skills/R.svg';
import cplusplus from '../../assets/skills/cplusplus.svg';
import tableau from '../../assets/skills/tableau.svg';
import vue from '../../assets/skills/vue.svg';

import SkillIcon from '../SkillIcon';
import TagSphere from '../TagSphere';
import Switch from 'react-switch';

const ToggleContent = ({toggle}) => {
  const size = 50;
  if(!toggle) {
    return (
      <div className="skills-icon">
        <div className="skills-row">
          <SkillIcon icon={html} name="html" />
          <SkillIcon icon={bootstrap} name="bootstrap" />
        </div>
        <div className="skills-row">
          <SkillIcon icon={git} name="git" />
          <SkillIcon icon={docker} name="docker" />
          <SkillIcon icon={javascript} name="javascript" />
        </div>
        <div className="skills-row">
          <SkillIcon icon={postgresql} name="postgresql" />
          <SkillIcon icon={react} name="react" />
          <SkillIcon icon={mongoDB} name="mongoDB" />
          <SkillIcon icon={node} name="node" />
        </div>
        <div className="skills-row">
          <SkillIcon icon={css} name="css" />
          <SkillIcon icon={R} name="Rstudio" />
          <SkillIcon icon={cplusplus} name="cplusplus" />
        </div>
        <div className="skills-row">
          <SkillIcon icon={tableau} name="tableau" />
          <SkillIcon icon={vue} name="vue" />
        </div>
      </div>
    )
  } else {
    return (
      <div className="skills-sphere">
        <TagSphere
          texts={[
            <img className='sphere-image' width={size} height={size} src={css} />,
            <img className='sphere-image' width={size} height={size} src={bootstrap}  />,
            <img className='sphere-image' width={size} height={size} src={git}/>,
            <img className='sphere-image' width={size} height={size} src={docker}/>,
            <img className='sphere-image' width={size} height={size} src={javascript}/>,
            <img className='sphere-image' width={size} height={size} src={postgresql}/>,
            <img className='sphere-image' width={size} height={size} src={react}/>,
            <img className='sphere-image' width={size} height={size} src={mongoDB}/>,
            <img className='sphere-image' width={size} height={size} src={node}/>,
            <img className='sphere-image' width={size} height={size} src={R}/>,
            <img className='sphere-image' width={size} height={size} src={cplusplus}/>,
            <img className='sphere-image' width={size} height={size} src={tableau}/>,
            <img className='sphere-image' width={size} height={size} src={vue}/>,
            <img className='sphere-image' width={size} height={size} src={html}  />
          ]}
          maxSpeed={7}
          initialSpeed={32}
          initialDirection={135}
          keepRollingAfterMouseOut={false}
          useContainerInlineStyles={true}
          fullWidth={false}
          fullHeight={false}
          // radius= {10%}
        />
      </div>
    )
  }
}

const SkillsPage = () => {

  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className='skills-container' id="skills">
      <div className="skills-toggle">
        <Switch 
          onChange={onToggle} 
          checked={toggle}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor='#c4543d'
          offColor= '#1ebc9a' 
        />
      </div>
      <ToggleContent toggle={toggle} />
    </div>
  )
}

export default SkillsPage;

