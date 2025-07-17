import mongoose from "mongoose";
const departmentschema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique:true,
    },
},
{timestamps: true}
);
const Department =mongoose.model('Department',departmentschema);
export default Department;