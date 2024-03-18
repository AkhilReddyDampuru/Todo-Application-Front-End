import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import ReactPaginate from "react-paginate";
import instance from "../services/axiosiinstancce";
import InputForm from "./InputForm";
import CardList from "./CardList";
import FormDialog from "./FormDialog";
import "../css/pagination.css";
function Main() {
  const [inputFieldData, setInputField] = useState("");
  const [open, setOpen] = useState(false);
  const [editValue, setEditValue] = useState({ todovalue: "", index: null });
  const [data, setData] = useState([]);
  const [limit] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef(1);

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
    setEditValue({
      todovalue: value.title,
      index: value._id,
    });
  };

  const handleUpdate = (value, index) => {
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
    currentPage.current = selectedPage + 1;
    getPaginatedUsers();
  };
  function getPaginatedUsers() {
    instance
      .get(`/tasks?page=${currentPage.current}&limit=${limit}`)
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
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={({ selected }) => handlePageClick(selected)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        forcePage={currentPage.current - 1}
      />
      {open && (
        <FormDialog
          open={open}
          setOpen={setOpen}
          editvalue={editValue}
          handleupdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default Main;
