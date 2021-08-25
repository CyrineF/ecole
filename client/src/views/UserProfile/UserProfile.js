import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import avatar from "../../assets/img/faces/marc.jpg";
import Axios from "axios"
import { StepButton } from "@material-ui/core";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [isDisabled, setIsDisabled] = useState(true)
  const [familyname, setFamilyname] = useState("");
  const [firstname, setFirstname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [poste, setPoste] = useState("")
  const [adresse, setAdresse] = useState("")
  const [numero, setNumero] = useState()
  const [button, setButton] = useState("تعديل المعلومات الشخصية")
  const classes = useStyles();



  const updateAdministrateur = (id) => {
    Axios.put("http://localhost:4000/update", {
      id: id,
      familyname: familyname,
      firstname: firstname,
      email: email,
      password: password,
    });
  };
  useEffect(() => {
    Axios.get(`http://localhost:4000/update/611274e163995f4438dc24c7`)
      .then(data => {
        console.log(data.data)
        setFamilyname(data.data.familyname)
        setFirstname(data.data.firstname)
        setPoste(data.data.poste)
        setEmail(data.data.email)
        setAdresse(data.data.adresse)
        setNumero(data.data.numero)

      })
      .catch(err => {
        console.log(err)
      })
  }
    , [])
  console.log(familyname)

 
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>المعلومات الشّخصيّة</h4>
              <p className={classes.cardCategoryWhite}>أدخل المعلومات الشّخصيّة</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    value={familyname}
                    labelText="الإسم"
                    id="Nom"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: isDisabled,
                    }}
                    onChange={(e)=>setFamilyname(e.target.value)}

                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    value={firstname}
                    labelText="اللقب"
                    id="Prénom"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: isDisabled,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    value={email}
                    labelText="البريد الإلكتروني "
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: isDisabled,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    value={numero}
                    labelText="رقم الهاتف"
                    id="Numéro"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: isDisabled,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="مكان"
                    id="Adresse"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: isDisabled,
                    }}
                    value={adresse}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="الوظيفة"
                    id="poste"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                    value={poste}
                  />
                </GridItem>

              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => { setIsDisabled(false) 
                setButton("تسجيل")}}>{button}</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>{firstname} {familyname}</h4>
              <p className={classes.description} style={{textAlign:"center"}}>
                {poste}
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
