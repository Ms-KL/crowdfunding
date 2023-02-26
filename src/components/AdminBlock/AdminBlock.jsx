import { Link } from "react-router-dom";
//CSS
// import "./AdminBlock.css";


function AdminBlock(props) {


    return (
        <div id="admin-block">
            <h2>Admin Dashboard</h2>
            <p>Configure your content</p>
            <Link 
            target="_blank" 
            to="https://icy-dew-540.fly.dev/admin" className="button">
                Admin Portal
            </Link> 
            <Link 
            target="_blank" 
            to="https://icy-dew-540.fly.dev/admin/users/customuser/" className="button">
                Edit Users
            </Link> 
            <Link 
            target="_blank" 
            to="https://icy-dew-540.fly.dev/admin/projects/project/" className="button">
                Edit Projects
            </Link> 
            <Link 
            target="_blank" 
            to="https://icy-dew-540.fly.dev/admin/projects/pledge/" className="button">
                Edit Pledges
            </Link> 
            <Link 
            target="_blank" 
            to="https://icy-dew-540.fly.dev/admin/projects/comment/" className="button">
                Edit Comments
            </Link> 
        </div>
    );
}

export default AdminBlock;






