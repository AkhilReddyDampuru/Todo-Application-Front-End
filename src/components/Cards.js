import React from "react";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import "../css/cards.css";
function Cards({ index, todo, deleteHandler, handledit }) {
  return (
    <div className="card-contaner" style={{ marginLeft: "50px" }}>
      <Paper
        elevation={5}
        sx={{
          height: "60px",
          width: "70%",
          backgroundColor: "#fff",
          marginBottom: "4px",
        }}
        square={false}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            style={{
              marginLeft: "10px",
              marginTop: "12px",
              marginRight: "20px",
            }}
            gutterBottom
          >
            {todo}
          </Typography>
          <div>
            <Button
              variant="contained"
              style={{
                marginLeft: "20px",
                marginTop: "12px",
                marginRight: "20px",
              }}
              onClick={deleteHandler}
            >
              Finished
            </Button>
            <Button
              variant="contained"
              style={{
                marginLeft: "20px",
                marginTop: "12px",
                marginRight: "20px",
              }}
              onClick={() => handledit(todo, index)}
            >
              Edit
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Cards;
