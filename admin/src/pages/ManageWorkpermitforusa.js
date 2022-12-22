import React, { useEffect, useState } from "react";
import {
  getWorkpermitforusaDetail,
  getWorkpermitforusaDelete,
} from "../config/api";
import { Link } from "react-router-dom";

export default function ManageWorkpermitforusa() {
  const [data, setData] = useState([]);

  useEffect(() => {
    bindData();
  });
  async function bindData() {
    await getWorkpermitforusaDetail()
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function DeleteData(id) {
    await getWorkpermitforusaDelete(id)
      .then((response) => {
        alert("deleted");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <br />
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{item.ID}</td>
                <td>{item.Name}</td>
                <br />
                <td>
                  <Link to={"/Workpermitforusa/update/" + item.ID}>Edit</Link>|
                  <Link onClick={() => DeleteData(item.ID)}>Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
