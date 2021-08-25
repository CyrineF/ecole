import React, { useState, useEffect } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function Affectation() {
    const [nosClasses, setNosClasses] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [idClasse, setIdClasse] = useState()
    const [niveau, setNiveau] = useState(0)
    const classes = useStyles();
    const [matieres, setMatieres] = useState([])
    const [state, setState] = React.useState({
        classe: '',
        name: 'hai',
    });

    const handleOnchange = (e) => {
        setIdClasse(e.target.value)
        fetch(`http://localhost:4000/classes/${idClasse}`).then(response =>
            response.json()
        ).then(data => {
            setNiveau(data.niveau)
        })
        fetch(`http://localhost:4000/matiere/${niveau}`).then(response =>
            response.json()
        ).then(data => {
            setMatieres(data)
            console.log(matieres)
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

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
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
                </Select>
            </FormControl>
            <div>
                {idClasse && 
                    < GridContainer >
                    <GridItem xs={12} sm={12} md={12}>
                      <Card>
                        <CardHeader color="primary">
                          <h4 className={classes.cardTitleWhite}>Simple Table</h4>
                          <p className={classes.cardCategoryWhite}>
                            Here is a subtitle for this table
                          </p>
                        </CardHeader>
                        <CardBody>
                          <Table
                            tableHeaderColor="primary"
                            tableHead={["Matiere", "ChargeHoraire", "Enseignant"]}
                            matieres={matieres}
                          />
                        </CardBody>
                      </Card>
                    </GridItem>
                  </GridContainer>

                }
        </div>


        </div >
    )
}

export default Affectation