import "../styles/SidebarRow.css";

function SidebarRow({ Icon, title }) {
  return (
    <div className="sidebarRow">
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
