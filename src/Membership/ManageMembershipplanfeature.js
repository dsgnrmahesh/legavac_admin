// import React, { useEffect, useState } from "react";
// import {
//   getMembershipplanfeatureDetail,
//   getMembershipPlanFeatureDelete,
// } from "../config/api";
// import { Link } from "react-router-dom";

// export default function ManageMembershipplanfeature() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     bindData();
//   });
//   async function bindData() {
//     await getMembershipplanfeatureDetail()
//       .then((response) => {
//         setData(response.data[0]);
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }

//   async function DeleteData(id) {
//     await getMembershipPlanFeatureDelete(id)
//       .then((response) => {
//         alert("deleted");
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <td>MembershipplanfeatureID</td>
//             <td>Name</td>
//             <br />
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => {
//             return (
//               <tr>
//                 <td>{item.MembershipplanfeatureID}</td>
//                 <td>{item.Name}</td>
//                 <br />
//                 <td>
//                   <Link
//                     to={
//                       "/Membershipplanfeature/update/" +
//                       item.MembershipplanfeatureID
//                     }
//                   >
//                     Edit
//                   </Link>
//                   |
//                   <Link
//                     onClick={() => DeleteData(item.MembershipplanfeatureID)}
//                   >
//                     Delete
//                   </Link>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import {
  getMembershipplanfeatureDetail,
  getMembershipPlanFeatureDelete,
} from "../config/api";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function ManageMembershipplanfeature({ handleAddNew, handleEdit }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    bindData();
  //});
  },[]);
  async function bindData() {
    await getMembershipplanfeatureDetail()
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function DeleteData(id) {
    // await getMembershipPlanFeatureDelete(id)
    //   .then((response) => {
    //     alert("deleted");
    //   })
    if(window.confirm('Are you sure delete data?')){
      await getMembershipPlanFeatureDelete(id)
        .then((response) => {
          alert("Data Deleted Successfully");
          bindData();
        })
      .catch((error) => {
        alert(error);
      });
  }
}


return (
  <>
    <Col xs={12} sm={12} md={6}>
      <div className="contentBox">
        <div className="contentBoxHeader">
          <h4>Membership Plan Feature</h4>
          <button
            className="bxAddAction"
            onClick={handleAddNew}
            data-name="membershipplanfeature"
          >
            add new
          </button>
        </div>
        <div className="contentBoxBody">
          <ul className="contentBoxItems">
            {data.map((item, index) => (
              <li key={index}>
                <span className="d-flex">
                  <p className="m-0 pe-2">{index + 1}.</p>
                  <label className="bxName">{item.Name}</label>
                </span>
                <span className="d-flex">
                  <button
                    className="bxAction edit"
                    data-id={item.MembershipplanfeatureID}
                    data-name="membershipplanfeature"
                    onClick={handleEdit}
                  >
                    <Icon path={mdiPencilOutline} />
                  </button>
                  <button
                    className="bxAction del"
                    onClick={() => DeleteData(item.MembershipplanfeatureID)}
                  >
                    <Icon path={mdiTrashCanOutline} />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  </>
);
}
