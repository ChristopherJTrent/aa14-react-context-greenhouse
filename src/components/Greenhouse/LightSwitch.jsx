import { useTheme } from '../../context/ThemeContext';
import './LightSwitch.css';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme()
  
  const toggle = (e) => {
    e.stopPropagation()
    setThemeName(old => old === "day" ? "night" : "day") 
  }

  return (
    <div className="light-switch day" onClick={toggle}>
      <div className={themeName === "day" ? "on" : "off"}>DAY</div>
      <div className={themeName === "night" ? "on" : "off"}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
