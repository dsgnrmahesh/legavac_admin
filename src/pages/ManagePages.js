import React, { useEffect, useState } from "react";
import { getLPageDetail, getLPageDelete } from "../config/api";
import { Link } from "react-router-dom";

export default function ManagePages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    bindData();
  });
  async function bindData() {
    await getLPageDetail()
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function DeleteData(id) {
    await getLPageDelete(id)
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
            <td>PageID</td>
            <td>Pagename</td>
            <br />
            <td>Title</td>
            <br />
            <td>Description</td>
            <br />
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{item.PageID}</td>
                <td>{item.Pagename}</td>
                <br />
                <td>{item.Title}</td>
                <br />
                <td>{item.Description}</td>
                <br />
                <td>
                  <Link to={"/Pages/update/" + item.PageID}>Edit</Link>|
                  <Link onClick={() => DeleteData(item.PageID)}>Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
