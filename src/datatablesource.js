export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Image",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img}
            alt="avatar"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "20px",
            }}
          />
        </div>
      );
    },
  },
  {
    field: "username",
    headerName: "Username",
    width: 160,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },

  {
    field: "birthYear",
    headerName: "Birth year",
    width: 100,
  },

  {
    field: "workStartDate",
    headerName: "Start date",
    width: 120,
  },
  {
    field: "contractType",
    headerName: "Contract type",
    width: 120,
  },
  {
    field: "contractDuration",
    headerName: "Contract duration",
    width: 140,
  },
  {
    field: "department",
    headerName: "Department",
    width: 110,
  },
];

const duration = (date) => {
  let d1 = new Date();
  let d2 = new Date(date);
  console.log(d1.getTime() / (1000 * 3600 * 24));
  return Math.floor((d1 - d2) / (1000 * 3600 * 24));
};

//temporary data
export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    username: "John Doe",

    gender: "male",
    birthYear: 1995,
    workStartDate: "12/9/2022",
    contractType: "fixed-term",
    contractDuration: duration("9/12/2022") + " days",
    department: "Finance",
    vacationLeave: 20,
    holidayLeave: 3,
    sickLeave: 7,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    username: "Jane Doe",

    gender: "female",
    birthYear: 1985,
    workStartDate: "1/2/2020",
    contractType: "full time",
    contractDuration: duration("2/1/2020") + " days",
    department: "HR",
    vacationLeave: 30,
    holidayLeave: 6,
    sickLeave: 10,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    username: "Jack Smith",

    gender: "male",
    birthYear: 1999,
    workStartDate: "1/1/2022",
    contractType: "full time",
    contractDuration: duration("1/1/2022") + " days",
    department: "IT",
    vacationLeave: 28,
    holidayLeave: 5,
    sickLeave: 8,
  },
];
