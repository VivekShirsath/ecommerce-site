import "./profile.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";


export const Profile = () => {
    const {user,address,setAddress,setToken} = useAuth();
    const [isFieldForm,setFiedldForm] =  useState(false);
    const [Index,setIndex] = useState();
    const [isNewAddress,setNewAddress] = useState(false);
    const [initial] = useState({
        roomNo : "",
        area : "",
        city:"",
        state:"",
    })
    const [fieldValues,setFieldValues] = useState({
           roomNo : "",
            area : "",
            city:"",
            state:"",
    })
    const navigate = useNavigate();
    
    const handleEdit = (item,index) => {
        console.log(index,item);
         setFiedldForm(!isFieldForm);
         setIndex(index);
        setFieldValues(item);
    }
    const handleSave = (e) => {
        e.preventDefault();
        console.log(fieldValues);
        if(isNewAddress){
            setAddress([...address,fieldValues])
        }
        else{
            const arr = address.map((item,index) => {
                if(index === Index){
                    return fieldValues
                }
                else{
                    return item
                }
            })
            setAddress(arr);
        }
        setNewAddress(false);
     setFiedldForm(!isFieldForm)
    }

    const handleAdd = () => {
        setFieldValues(initial);
        setNewAddress(true);
        setFiedldForm(!isFieldForm)
    }

    const handleDelete = (item,index) => {
        setAddress(address.filter((item,index) => index===Index))
    }

    const handleLog = () => {
        localStorage.removeItem('loginDetails');
        setToken("");
        navigate('/login');
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFieldValues({ ...fieldValues, [name]: value });
      };
    return(
        <div className="profile-container">
        <div className={isFieldForm ? "profile off" : "profile"}>
           <h2 className="profile_title">Profile Information</h2>
           <hr></hr>
           <div className="profile_details">
            <div className="profile_name"><span className="profile_bold">Name</span> : {user?.firstName} {user?.lastName}</div>
            <div className="profile_email"><span className="profile_bold">Email</span> : {user?.email}</div>
           </div>
           <hr></hr>
           <div className="profile_address">
            {address?.map(({roomNo,area,city,state,pinCode},index) =>{
                const item = {roomNo,area,city,state,pinCode}
            return(
               <div className="address" key={index}>
                <div><span className="profile_bold">Address</span> : 
                {roomNo},{area},{city},{state}</div>
                <div className="address-btn">
                <button className="profile-btn" onClick = {() => handleEdit(item,index)}>Edit</button>
                <button className="profile-btn delete" onClick= {() => handleDelete(item,index)}>Delete</button>
                </div>
                <hr></hr>
                </div>
                )})}
                <div className="address-add" onClick = {() => handleAdd()}>Add New Address</div>
           <button className="card_btn" onClick={() => handleLog()}>Log Out</button>
        </div>
        </div>
        <form className={isFieldForm ? "address-form" : "address-form off"}>
                <h3>Add New Address</h3>
                <input className="input-fields" type = "text" placeholder='Enter RoomNo.'
                value={fieldValues.roomNo}
                onChange={(e) => handleChange(e)}
                name="roomNo"
                required/>
                <input className="input-fields" type = "text" 
                placeholder='Enter Area'
                value={fieldValues.area}
                onChange={(e) => handleChange(e)}
                name="area"
                required/>
                <input className="input-fields" type = "text" 
                placeholder='Enter City'
                name="city"
                value={fieldValues.city}
                onChange={(e) => handleChange(e)}
                required/>
                <input className="input-fields" type = "text" 
                placeholder='Enter State'
                name="state"
                value={fieldValues.state}
                onChange={(e) => handleChange(e)}
                required/>
                <button className="profile-btn save" onClick={(e) => handleSave(e)}>
                    Save
                 </button>
            </form>
        </div>
    )
}