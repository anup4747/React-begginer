import Menu_list from "./menu-list.jsx";

export default function TreeView({ menus = [] }){
    return (
        <div style={{display:"flex"}}>
         <div className="tree-view-container">
           
           <Menu_list list={menus} />
       </div>
        <h1 style={{margin:45}}>Tree View Components</h1>
        </div>
       
    )
}