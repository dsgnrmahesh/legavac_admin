import React, { useEffect, useState } from "react";
import { getFaqDetail, getFaqDelete } from "../config/api";
import { Link } from "react-router-dom";

export default function ManageFaq() {
  const [data, setData] = useState([]);

  useEffect(() => {
    bindData();
  });
  async function bindData() {
    await getFaqDetail()
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function DeleteData(id) {
    await getFaqDelete(id)
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
            <td>FaqID</td>
            <td>Question</td>
            <br />
            <td>Answer</td>
            <br />
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{item.FaqID}</td>
                <td>{item.Question}</td>
                <br />
                <td>{item.Answer}</td>
                <br />
                <td>
                  <Link to={"/Faq/update/" + item.FaqID}>Edit</Link>|
                  <Link onClick={() => DeleteData(item.FaqID)}>Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
