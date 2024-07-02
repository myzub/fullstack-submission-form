import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, Paper} from "@mui/material"
import {useEffect} from "react";

export default function Student() {
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [students, setStudents] = React.useState([]);

    const paperStyle = {padding: '30px 20px', width: 600, margin: "20px auto"}

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(response => response.json())
            .then(data => setStudents(data))
    }, [students]);

    const handleClick = (e) => {
        e.preventDefault();
        const student = {name, address};
        console.log(student);
        fetch("http://localhost:8080/student/add    ",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(student)
            }).then(() => {
            console.log("New Student added!")
        })
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Paper elevation={3} style={paperStyle}>
                <h1><u>Add Student</u></h1>
                <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                           style={{marginBottom: '10px'}}
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                />
                <TextField id="outlined-basic2" label="Student Address" variant="outlined" fullWidth
                           style={{marginBottom: '10px'}}
                           value={address}
                           onChange={(e) => setAddress(e.target.value)}/>
                <Button variant="contained" onClick={handleClick}>Submit</Button>
            </Paper>
            <h2>Students List</h2>
            {students.map(student =>
                <Paper elevation={3} style={{margin: '10px', padding: '15px', textAlign: 'left'}} key={student.name}>
                    Name: {student.name}
                    <br/>
                    Address: {student.address}
                </Paper>)}
        </Box>
    );
}
