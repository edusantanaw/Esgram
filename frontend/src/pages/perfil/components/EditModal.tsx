import React, { useRef, useState } from "react";
import * as yup from "yup";
import { useApi } from "../../../hooks/useApi";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../../store/store";
import { userUpdate } from "../../../slices/userSlices";
import { EditContainer } from "./styles/edit";
import Loading from "../../../components/loading/Loading";

const loginForm = yup.object().shape({
  name: yup.string().min(5).max(15).required(),
  email: yup.string().required("Email is required!").email(),
});

const EditModal = ({
  handleEdit,
  id,
}: {
  handleEdit: () => void;
  id: string;
}) => {
  const { data, loading } = useApi(`/users/perfil/${id}`);
  const bio = useRef<HTMLTextAreaElement | null>(null);
  const [image, setImage] = useState<File | string>("");
  const dispatch = useAppDispatch();

  const handleImage = (e: React.FormEvent<HTMLInputElement>) => {
    const img = (e.target as HTMLInputElement).files;
<<<<<<< HEAD
=======
    console.log(img);
>>>>>>> f174fc661d8f9cdaea1388c195722ebff6b7eb08
    if (img) setImage(img[0]);
  };

  async function handleUpdate(data: FieldValues) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("image", image);
    if (bio.current) formData.append("bio", bio.current.value);

    await dispatch(userUpdate(formData))
    handleEdit()
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginForm) });

  if(loading) return <Loading />
  return (
    <EditContainer>
      <div className="close" onClick={handleEdit}></div>
      <div className="content">
        <form onSubmit={handleSubmit(handleUpdate)}>
          <div className="picture">
            <img
              src={`http://localhost:5001/users/${data.perfilPhoto}`}
              alt="user photos"
            />
            <div>
              <label htmlFor="image">Change photo</label>
              <input type="file" id="image" onChange={(e) => handleImage(e)} />
            </div>
          </div>
          <div className="input">
            <label htmlFor="name">Name</label>
            <input
              className={errors.name ? "error_input" : ""}
              type="text"
              {...register("name")}
              placeholder="edusantanaw"
<<<<<<< HEAD
              defaultValue={data.name}
=======
              value={data.name}
>>>>>>> f174fc661d8f9cdaea1388c195722ebff6b7eb08
            />
            <p className="error">
              {errors?.name && <>{errors.name.message} </>}
            </p>
          </div>
          <div className="input">
            <label htmlFor="email">E-mail</label>
            <input
              className={errors.email ? "error_input" : ""}
              type="text"
              {...register("email")}
              placeholder="edusantanaw"
<<<<<<< HEAD
              defaultValue={data.email}
=======
              value={data.email}
>>>>>>> f174fc661d8f9cdaea1388c195722ebff6b7eb08
            />
            <p className="error">
              {errors?.email && <>{errors.email.message} </>}
            </p>
          </div>
          <div className="input">
            <label htmlFor="bio">Bio</label>
<<<<<<< HEAD
            <textarea name="bio" defaultValue={data.bio} ref={bio} maxLength={255}></textarea>
=======
            <textarea name="bio" value={data.bio} ref={bio} maxLength={255}></textarea>
>>>>>>> f174fc661d8f9cdaea1388c195722ebff6b7eb08
          </div>
          <input type="submit" />
        </form>
      </div>
    </EditContainer>
  );
};

export default EditModal;

