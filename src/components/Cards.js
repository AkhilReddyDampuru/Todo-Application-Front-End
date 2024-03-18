import React from "react";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import "../css/cards.css";

function Cards({ index, todo, deleteHandler, handledit }) {
  return (
    <div className="card-container" style={{ marginLeft: "50px" }}>
      <Paper
        elevation={5}
        sx={{
          height: "60px",
          width: "70%",
          backgroundColor: "#fff",
          marginBottom: "4px",
          display: "flex",
          justifyContent: "space-between",
          overflowx: "auto",
        }}
        square={false}
      >
        <Typography
          variant="h6"
          style={{
            marginLeft: "10px",
            marginTop: "12px",
            marginRight: "20px",
            flex: "1 1 60%",
            whiteSpace: "wrap",
            overflow: "auto",
            textOverflow: "ellipsis",
          }}
          gutterBottom
        >
          {todo}
        </Typography>
        <div style={{ flex: "0 1 40%", display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            style={{ marginLeft: "20px", marginRight: "20px" }}
            onClick={deleteHandler}
          >
            Finished
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "20px", marginRight: "20px" }}
            onClick={() => handledit(todo, index)}
          >
            Edit
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Cards;
