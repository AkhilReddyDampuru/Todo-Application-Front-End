import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ open, setOpen, editvalue, handleupdate }) {
  const [editedTodo, setEditedTodo] = React.useState("");

  React.useEffect(() => {
    setEditedTodo(editvalue.todovalue);
  }, [open, editvalue.todovalue]);

  const handlechange = (e) => {
    setEditedTodo(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleupdatetolist = () => {
    handleupdate(editedTodo, editvalue.index);

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Todo List</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please update the todo task in the input field below, and Click
            Update Todo List button.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Edit Todo..."
            type="text"
            fullWidth
            value={editedTodo}
            variant="outlined"
            onChange={handlechange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={editedTodo.length === 0}
            onClick={handleupdatetolist}
          >
            Update TodoList
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
