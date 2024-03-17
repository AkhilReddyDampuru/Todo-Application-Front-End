import React, { useRef, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import styles from "../css/styles.module.css";
function InputForm({ handleInputChange, handleAddClick, inputFieldData }) {
  const iref = useRef(0);
  useEffect(() => {
    iref.current.focus();
  }, []);
  return (
    <>
      <div className="input-form">
        <TextField
          inputRef={iref}
          id="outlined-basic"
          label="Add Item..."
          type="text"
          onChange={handleInputChange}
          variant="outlined"
          className={styles.textfield}
          value={inputFieldData}
          helperText={
            inputFieldData.length === 0 ? "Please Enter The Todo" : null
          }
        />
      </div>
      <Button
        variant="contained"
        className={styles.addButton}
        onClick={handleAddClick}
        disabled={inputFieldData.length === 0}
      >
        ADD
      </Button>
    </>
  );
}

export default InputForm;
