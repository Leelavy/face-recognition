import React, { useState } from "react";
import { ContainerCenter, ContainerColumn } from "../style/general";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  inputArea: {
    margin: "0 3rem",
    display: "flex",
    flexDirection: "row",
  },
  outlinedInput: {
    width: "100%",
    backgroundColor: "white",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  button: {
    marginLeft: "2rem",
  },
}));

const ImageLinkForm = ({ onRecognizeClick }) => {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const onClick = () => {
    onRecognizeClick(input);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <ContainerColumn>
      <ContainerCenter>
        <FormControl fullWidth className={classes.inputArea} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-imageUrl">
            Image URL
          </InputLabel>
          <OutlinedInput
            className={classes.outlinedInput}
            id="outlined-adornment-imageUrl"
            value={input}
            onChange={onInputChange}
            startAdornment={
              <InputAdornment position="start">
                <ImageSearchIcon />
              </InputAdornment>
            }
            labelWidth={80}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            className={classes.button}
          >
            Recognize
          </Button>
        </FormControl>
      </ContainerCenter>
    </ContainerColumn>
  );
};

export default ImageLinkForm;
