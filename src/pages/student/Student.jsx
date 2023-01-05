import { useEffect, useState } from "react";
import { student as data } from "../../data";

const Student = () => {
    const [student, setStudent] = useState([])
    const [form, setForm] = useState(true)
    const [rollNo, setRollNo] = useState(0);
    const [name, setName] = useState('');

    // Error
    const [rollNoErr, SetRollNoErr] = useState(false);
    const [nameErr, SetNameErr] = useState(false);

    // Error message
    const [RollErrMsg,SetRollErrMsg]=useState('')
    const [nameErrMsg,SetNameErrMsg]=useState('')

    useEffect(() => {
        setStudent(data)
    }, [])


    const handleRollNo=(e)=>{
        SetRollNoErr(false);
        setRollNo(e.target.value)
    }
    const handleName=(e)=>{
        SetNameErr(false);
        setName(e.target.value)
    }

    const handleCheckIN = (e) => {
        e.preventDefault();
        
        if(rollNo===0){
            SetRollNoErr(true);
            SetRollErrMsg('Enter roll no.')
        }
        else{
            const userData = student.filter(data => data.rollNo === Number(rollNo));
            if(userData.length===0){
                SetRollNoErr(true);
                SetRollErrMsg('Invalid Roll No.')
            }else{

                if(name===undefined || name===''){
                    SetNameErr(true)
                    SetNameErrMsg("Enter your name")
                }else{
                    const data=userData[0];
                    if(data.name===name){
                        setForm(false)
        
                    }else{

                        SetNameErr(true)
                        SetNameErrMsg("Invalid name")
                    }
                }
                
            }
        }

    }

    const handleCheckOut = (e) => {
        e.preventDefault();
        setForm(true)
    }
    

    return (
        <div className="student section">
            <h1 className='sectionTitle'>Student Dashboard</h1>

            {form ?
                <form action="" className='studentForm' onSubmit={handleCheckIN}>

                    <label htmlFor="name" className="formLable">Student Roll No.</label>
                    <input type="number" className="formInput" placeholder='Enter your roll no' onChange={(e)=>handleRollNo(e)} />
                    {rollNoErr && <p className="error">{RollErrMsg}</p>}

                    <label htmlFor="name" className="formLable" name='name'>Student Name</label>
                    <input type="text" className="formInput" placeholder='Enter your name' onChange={handleName} />
                    {nameErr && <p className="error">{nameErrMsg}</p>}
                    <button className="formBtn" type='submit'>Check IN</button>
                </form>

                :
                <form action="" className='studentForm' onSubmit={handleCheckOut}>
                    <p className="infoDesc">{name}, You are checked in the School.</p>
                    <button className="formBtn" type='submit'>Check Out</button>
                </form>
            }

        </div>
    )
}

export default Student