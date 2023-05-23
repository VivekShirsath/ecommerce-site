import "./profile.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const {user,address} = useAuth();
    const navigate = useNavigate();
    const handleEdit = item => {
        console.log(item);
        navigate("/address")
    }
    return(
        <div className="profile_container">
        <div className="profile">
           <h2 className="profile_title">Profile Information</h2>
           <hr></hr>
           <div className="profile_details">
            <div className="profile_name"><span className="profile_bold">Name</span> : {user.firstName} {user.lastName}</div>
            <div className="profile_email"><span className="profile_bold">Email</span> : {user.email}</div>
           </div>
           <hr></hr>
           <div className="profile_address">
            {address?.map(({roomNo,area,city,state,pinCode}) =>{
                const item = {roomNo,area,city,state,pinCode}
            return(
               <div className="address">
                <div><span className="profile_bold">Address</span> : 
                {roomNo},{area},{city},{state}</div>
                <div className="address-btn">
                <button className="profile-btn" onClick = {() => handleEdit(item)}>Edit</button>
                <button className="profile-btn delete">Delete</button>
                </div>
                <hr></hr>
                </div>
                )})}
                <div className="address-add">Add New Address</div>
           <button className="card_btn">Log Out</button>
        </div>
        </div>
        </div>
    )
}