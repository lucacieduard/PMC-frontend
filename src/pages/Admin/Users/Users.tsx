import { useQuery } from "@tanstack/react-query";
import Header from "../../../components/PageHeader/Header";
import styles from "./Users.module.scss";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { getAllUsers } from "../../../utils/fetch/users";
import { User } from "../../../types/user";
import { useMemo } from "react";
import Action from "./Action";

type Props = {
  openSidebar: () => void;
};

const Users = ({ openSidebar }: Props) => {
  const queryUsers = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    staleTime: 1000 * 60 * 5,
  });

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "nume",
        headerName: "Nume",
        width: 150,
        sortable: true,
        filterable: true,
        editable: true,
      },
      { field: "prenume", headerName: "Prenume", width: 150, editable: true },
      { field: "email", headerName: "Email", width: 250, editable: true },
      { field: "telefon", headerName: "Telefon", width: 150, editable: true },
      {
        field: "clubSportiv",
        headerName: "Club Sportiv",
        width: 150,
        editable: true,
      },
      {
        field: "role",
        headerName: "Rol",
        width: 150,
        type: "singleSelect",
        valueOptions: ["admin", "user"],
        editable: true,
      },
      {
        field: "actions",
        type: "actions",
        width: 150,
        headerName: "Actions",
        disableClickEventBubbling: true,
        getActions: (params: GridRowParams) => [
          <Action type="edit" params={params} />,
          <Action type="delete" params={params} />,
        ],
      },
    ],
    []
  );

  if (queryUsers.isLoading) return <div>Loading...</div>;
  if (queryUsers.isError) return <div>Eroare</div>;

  return (
    <div className={styles.container}>
      <Header openSidebar={openSidebar} message="Utilizatori" />
      <main className={styles.page}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={queryUsers.data?.data ? queryUsers.data.data : []}
            columns={columns}
            loading={queryUsers.isLoading}
            getRowId={(row: User) => row._id}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5, page: 0 } },
            }}
            editMode="cell"
            density="comfortable"
            getRowSpacing={(params) => ({
              top: params.isFirstVisible ? 0 : 5,
              bottom: params.isLastVisible ? 0 : 5,
            })}
          />
        </div>
      </main>
    </div>
  );
};

export default Users;
