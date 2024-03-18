import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import instance from "../services/axiosiinstancce";
import InputForm from "./InputForm";
import CardList from "./CardList";
import Pagination from "./Pagination";
import FormDialog from "./FormDialog";
function Main() {
  const [inputFieldData, setInputField] = useState("");
  const [open, setOpen] = useState(false);
  const [editvalue, setEditvalue] = useState({ todovalue: "", index: null });
  const [data, setData] = useState([]);
  const [limit] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPaginatedUsers();
  }, []);

  const handleInputChange = (e) => {
    setInputField(e.target.value);
  };

  const handleAddClick = () => {
    instance
      .post("/tasks", {
        title: inputFieldData,
        completed: false,
      })
      .then((res) => {
        console.log(res.data, "data updated successfully");
        getPaginatedUsers();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteClick = (index) => {
    instance
      .delete(`/tasks/${index._id}`)
      .then((res) => {
        console.log(res.data, "userData");
        getPaginatedUsers();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditClick = (value, index) => {
    setOpen(true);
    console.log(value, index);
    setEditvalue({
      todovalue: value.title,
      index: value._id,
    });
  };

  const handleupdate = (value, index) => {
    instance
      .put(`/tasks/${index}`, {
        title: value,
        completed: true,
      })
      .then((res) => {
        console.log(res.data, "userData");
        getPaginatedUsers();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage + 1);
    getPaginatedUsers();
  };

  function getPaginatedUsers() {
    instance
      .get(`/tasks?page=${currentPage}&limit=${limit}`)
      .then((res) => {
        console.log(res.data, "userData");
        setPageCount(res.data.pageCount);
        setData(res.data.tasks);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <Typography
        variant="h2"
        className="underline"
        gutterBottom
        style={{ textAlign: "start", marginBottom: "50px", marginLeft: "60px" }}
      >
        To-Do Task Application
      </Typography>
      <div style={{ marginBottom: "50px", marginLeft: "60px" }}>
        <InputForm
          handleInputChange={handleInputChange}
          handleAddClick={handleAddClick}
          inputFieldData={inputFieldData}
        />
      </div>

      <Typography
        variant="h6"
        className="underline"
        gutterBottom
        style={{ textAlign: "start", marginTop: "20px", marginLeft: "60px" }}
      >
        List Page
      </Typography>
      <CardList
        data={data}
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
      />
      <Pagination
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        currentPage={currentPage}
      />
      {open && (
        <FormDialog
          open={open}
          setOpen={setOpen}
          editvalue={editvalue}
          handleupdate={handleupdate}
        />
      )}
    </div>
  );
}

export default Main;
