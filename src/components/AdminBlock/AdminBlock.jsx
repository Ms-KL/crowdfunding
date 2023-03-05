import { Link } from "react-router-dom";
//CSS
// import "./AdminBlock.css";


function AdminBlock() {


    return (
        <div id="admin-block">
            <h2>Admin Dashboard</h2>
            <p>Configure your content in the admin portal</p>
            <Link 
            target="_blank" 
            to="https://icy-dew-540.fly.dev/admin" className="button">
                Database
            </Link> 
            <Link 
            target="_blank" 
            to="https://icy-dew-540.fly.dev/admin/users/customuser/" className="button">
                Users
            </Link> 
            <Link 
            target="_blank" 
            to="https://icy-dew-540.fly.dev/admin/projects/project/" className="button">
                Projects
            </Link> 
            <Link 
            target="_blank" 
            to="https://icy-dew-540.fly.dev/admin/projects/pledge/" className="button">
                Pledges
            </Link> 
            <Link 
            target="_blank" 
            to="https://icy-dew-540.fly.dev/admin/projects/comment/" className="button">
                Comments
            </Link> 
        </div>
    );
}

export default AdminBlock;






