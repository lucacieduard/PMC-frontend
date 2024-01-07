import { Delete, Edit } from "@mui/icons-material";
import { GridActionsCellItem, GridRowParams } from "@mui/x-data-grid";
import { useState } from "react";
import ModalMessage from "../../../components/Modal/ModalMessage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser, updateUser } from "../../../utils/fetch/users";
import { toast } from "react-toastify";
type Props = {
  type: "edit" | "delete";
  params: GridRowParams;
};
const Action = ({ type, params }: Props) => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
        exact: true,
      });
      toast("Utilizator sters cu succes!");
    },
  });
  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
        exact: true,
      });
      toast("Utilizator editat cu succes!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return (
    <>
      {type === "delete" ? (
        <ModalMessage
          buttonText="Sterge"
          type="message"
          text="Esti sigur ca doresti sa stergi acest utilizator?"
          state={open}
          closeModal={() => setOpen(false)}
          action={() => deleteMutation.mutate(params.row._id)}
        />
      ) : (
        <ModalMessage
          buttonText="Editeaza"
          type="children"
          text="Confirma editarea utilizatorului"
          state={open}
          closeModal={() => setOpen(false)}
          action={() => {
            delete params.row._id;
            console.log(params.row);
            return updateMutation.mutate(params);
          }}
        >
          {Object.entries(params.row).map(([key, value]) => {
            if (key !== "_id") {
              return (
                <div key={key}>
                  {key}: {String(value)}
                </div>
              );
            } else {
              return null;
            }
          })}
        </ModalMessage>
      )}

      {type === "edit" ? (
        <GridActionsCellItem
          icon={<Edit />}
          label="Edit"
          onClick={() => setOpen(true)}
        />
      ) : (
        <GridActionsCellItem
          icon={<Delete />}
          label="Delete"
          onClick={() => setOpen(true)}
        />
      )}
    </>
  );
};

export default Action;
