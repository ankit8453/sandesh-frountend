import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout';
import Tables from '../../components/shared/Tables';
import { Avatar } from '@mui/material';
import { userManageData } from '../../constants/sampleData';
import {transformImage} from '../../lib/features'


const columns = [{
  field: "id",
  headerName: "ID",
  headerClassName: "table-header",
  width: 200,
},
{
  field: "avatar",
  headerName: "Avatar",
  headerClassName: "table-header",
  width: 150,
  renderCell: (params) => (
    <Avatar alt={params.row.name} src={params.row.avatar} />
  )
},
{
  field: "name",
  headerName: "Name",
  headerClassName: "table-header",
  width: 200,
},
{
  field: "username",
  headerName: "User name",
  headerClassName: "table-header",
  width: 200,
},
{
  field: "friends",
  headerName: "Friends",
  headerClassName: "table-header",
  width: 150,
},
{
  field: "groups",
  headerName: "Groups",
  headerClassName: "table-header",
  width: 200,
},
{
  field: "datejoined",
  headerName: "Date Joined",
  headerClassName: "table-header",
  width: 200,
},
];

const UserManage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(userManageData.users.map((i) => ({ ...i, id: i._id, avatar: transformImage(i.avatar, 50), })));
  }, []);

  return (
    <AdminLayout>
        <Tables heading={"All Users"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default UserManage;