import "./datatable.scss";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = async (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      disableExport: true,
      width: 200,
      renderCell: (params) => {
        return (
          <div
            className="cellAction"
            style={{ display: "flex", alignItems: "center", gap: "15px" }}
          >
            <Link to={`/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div
                className="viewButton"
                style={{
                  padding: " 2px 5px",
                  borderRadius: "5px",
                  color: "darkblue",
                  border: "1px dotted rgba(0, 0, 139, 0.596)",
                  cursor: "pointer",
                }}
              >
                View
              </div>
            </Link>
            <div
              className="deleteButton"
              style={{
                padding: " 2px 5px",
                borderRadius: "5px",
                color: "crimson",
                border: "1px dotted rgba(220, 20, 60, 0.6)",
                cursor: "pointer",
              }}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer sx={{ justifyContent: "flex-end" }}>
        <GridToolbarExport
          csvOptions={{
            fileName: "employeesDataBase",
            delimiter: ";",
            utf8WithBom: true,
          }}
          printOptions={{
            hideFooter: true,
            hideToolbar: true,
          }}
        />
      </GridToolbarContainer>
    );
  }

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Employees
        <Link to="/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default Datatable;
