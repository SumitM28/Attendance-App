import React, { useEffect, useState } from 'react'
import { teachers as data } from '../../teachers.js'
import {student} from '../../data';
import {AiOutlineUser} from 'react-icons/ai'
const Teacher = () => {
    const [studentData,setStudentData]=useState([])
    const [teachers, setTeachers] = useState([])
    const [form, setForm] = useState(true)

    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    // Errors
    const [nameErr, SetNameErr] = useState(false);
    const [idErr, SetIdErr] = useState(false);

    // Errors Message
    const [IdErrMsg, SetIdErrMsg] = useState('')
    const [nameErrMsg, SetNameErrMsg] = useState('')

    useEffect(() => {
        setTeachers(data)
        const objData=student.filter(item=> item.checkedIn===true);
        setStudentData(objData);
    }, [])

    const handleId = (e) => {
        SetIdErr(false);
        setId(e.target.value)
    }
    const handleName = (e) => {
        SetNameErr(false);
        setName(e.target.value)
    }

    const handleCheckIN = (e) => {
        e.preventDefault();

        if (id === 0) {
            // when id is not given in the input.
            SetIdErr(true);
            SetIdErrMsg('Enter your id.')
        }
        else {

            // check data id the match to the id given to input
            const userData = teachers.filter(data => data.id === Number(id));

            if (userData.length === 0) {
                SetIdErr(true);
                SetIdErrMsg('Invalid id.')
            }
            else {
                // when name is not given in the input.
                if (name === undefined || name === '') {
                    SetNameErr(true)
                    SetNameErrMsg("Enter your name")
                }
                else {
                    const data = userData[0];
                    if (data.name === name) {
                        setForm(false)
                    } else {
                        SetNameErr(true)
                        SetNameErrMsg("Invalid name")
                    }
                }

            }
        }

    }
    
    return (
        <div className="teacher section">
            <h1 className='sectionTitle'>Teachers Dashboard</h1>
            {
                form ?
                    <form action="" className='studentForm' onSubmit={handleCheckIN}>

                        <label htmlFor="name" className="formLable">Teacher Id.</label>
                        <input type="text" className="formInput" placeholder='Enter your roll no' onChange={handleId} />
                        {idErr && <p className="error">{IdErrMsg}</p>}

                        <label htmlFor="name" className="formLable" name='name'>Teacher Name</label>
                        <input type="text" className="formInput" placeholder='Enter your name' onChange={handleName} />
                        {nameErr && <p className="error">{nameErrMsg}</p>}

                        <button className="formBtn" type='submit'>Get IN</button>
                    </form>
                    :<>
                    <div className='teacherInfo'>
                        <AiOutlineUser className='icon'/>
                        <h2 className="teacherName">{name}</h2>
                        <button className="checkOutBtn" type='submit' onClick={()=>setForm(true)}>Check Out</button>
                    </div>
                   
                    <div className="studentInfo">
                        <h1 className="infoTitle">Student, those are checked in school.</h1>
                        <div className="infoContainer">
                            {studentData.map(item=> 
                                <div className="infoItem">
                                <h3>Student Name: <span>{item.name}</span></h3>
                                <h3>Student RollNo.: <span>{item.rollNo}</span></h3>
                                <h3>Check in: <span>10:42 AM</span></h3>
                                <h3>Check out: <span>5:20 PM</span></h3>
                            </div>
                                
                                )}
                            
                        </div>
                    </div>
                    </>
                    
            }
        </div>
    )
}

export default Teacher