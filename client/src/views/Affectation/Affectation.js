import React, { useState, useEffect } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0",
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF",
        },
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1",
        },
    },
}));




function Affectation() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };



    const [nosClasses, setNosClasses] = useState([])
    const [Enseignant, setEnseignant] = useState([])
    const [Matiere, setMatiere] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [idEnseignant, setIdEnseignant] = useState("")
    const [idAnnee, setIdAnnee] = useState("")
    const [idClasse, setIdClasse] = useState("")
    const [idMatiere, setIdMatiere] = useState("")
    const [niveau, setNiveau] = useState()
    const classes = useStyles();
    const [state, setState] = React.useState({
        classe: '',
        name: 'hai',
    });

    const handleOnchange = (e) => {
        setIdClasse(e.target.value)
        fetch(`http://localhost:4000/classes/${idClasse}`).then(response =>
            response.json()
        ).then(data => {
            console.log(data)
        })
    }

    useEffect(() => {
        if (!isLoaded) {
            console.log("loaded")
            fetch("http://localhost:4000/classes").then(response =>
                response.json()
            ).then(data => {
                setIsLoaded(true)
                setNosClasses(data)
                console.log(data)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [nosClasses])
    fetch("http://localhost:4000/matiere").then(response =>
        response.json()
    ).then(data => {
        setIsLoaded(true)
        setMatiere(data)
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
    fetch("http://localhost:4000/enseignants").then(response =>
        response.json()
    ).then(data => {
        setIsLoaded(true)
        setEnseignant(data)
        console.log(data)
    }).catch(err => {
        console.log(err)
    })


    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        تعيين المعلمين
                    </Typography>
                </Toolbar>
            </AppBar>
            <Paper>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">القسم</InputLabel>
                    <Select
                        native
                        onChange={handleOnchange}
                        label="Age"
                        inputProps={{
                            name: 'classe',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        {nosClasses.map((classe) => {
                            return (
                                <option value={classe._id}>{classe.nom}</option>)
                        })}
                        {console.log(idClasse)}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">المعلم</InputLabel>
                    <Select
                        native
                        onChange={handleOnchange}
                        label="Enseignant"
                        inputProps={{
                            name: 'Enseignant',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        {Enseignant.map((ens) => {
                            return (
                                <option value={ens._id}>{ens.nom} {ens.prénom}</option>)
                        })}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">المادة</InputLabel>
                    <Select
                        native
                        onChange={handleOnchange}
                        label="Matiere"
                        inputProps={{
                            name: 'liebele',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        {Matiere.map((Matiere) => {
                            return (
                                <option value={Matiere._id}>{Matiere.libele}</option>)
                        })}
                        {console.log(idMatiere)}
                    </Select>
                </FormControl>
                <TextField
                    label="السنة الدراسية"
                    id="outlined-size-normal"
                    variant="outlined"
                />
            </Paper>
        </div>
    )
}

export default Affectation
