
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerInvoiceDetailByID } from "../config/api";
import converter from "number-to-words";

export default function PrintReceipt() {
    
  const {id}=useParams();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  //console.log(id);
    useEffect(() => {
        bindData();
      }, []);
    async function bindData() {
        await getCustomerInvoiceDetailByID(id)
          .then((response) => {
            setData(response[0]);
          })
          .catch((error) => {
            alert(error);
          });
      }
    const styles = `
.rightNested td:not([colspan]):nth-child(1){
    border-style: solid;
    border-color: #000;
    border-right-width: 1px
}
.rightNested tr:not(:last-child){
    border-bottom: 1px solid #000;
}
.reciptContent th{
    padding: 5px;
}
.reciptContent tbody td{
    padding: 5px;
}
    `
    //window.print();
    //window.onafterprint = window.close;
    const Print = ()=>{
        //setShow(false);
        window.print();
    }
    // function Submit(){
    //     window.location.href="/dashboard";
    // }
    return (
        <>
            <style>
                {styles}
            </style>
            {show&&
            <div>
                <button onClick={Print} className="btn btn-indigo">Print</button>
                {/* <button onClick={Submit} className="btn btn-success">Submit</button> */}
            </div>
            }
            {data?data.map((item,index)=>(
            <table style={{ border: '1px solid #000', width: 750, margin: '0 auto' }}>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #000' }}>
                        <td style={{ padding: 10, borderRight: '1px solid #000' }}>
                            <img src='/images/logo.png' alt='' style={{ display: 'block', float: 'left' }} />
                            <span style={{ display: 'block', float: 'right', fontSize: 21, lineHeight: "21px", fontWeight: 500, textAlign: 'center', paddingRight: 20, paddingTop: 10 }}>
                                Abhita Land <br />
                                Solutions Pvt. Ltd.
                            </span>
                            <div style={{ width: '100%', clear: 'both', paddingTop: 20 }}>
                                Office No. 1006, 10th Floor, International Trade Center,<br />
                                Kamdhenu, Sector - 14, Kharghar, Navi Mumbai - 410210<br />
                                Contact No. - 77100 73844<br />
                                Email - info@abhitalandsolutions.com
                            </div>
                        </td>
                        <td style={{ padding: 0, textAlign: 'center' }}>
                            <table className='rightNested' width='100%'>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: 5 }}>
                                            Invoice No.<br />
                                            <b>{item.InvoiceNo}</b>
                                        </td>
                                        <td style={{ padding: 5 }}>
                                            Dated<br />
                                            <b>{item.Date}</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: 5 }}>
                                            Supplier's Ref.<br />
                                            <b>{item.SName}</b>
                                        </td>
                                        <td style={{ padding: 5 }}>
                                            Other Reference(s)<br />
                                            <b>NA</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: 5 }}>
                                            Buyer's Order No.<br />
                                            <b>NA</b>
                                        </td>
                                        <td style={{ padding: 5 }}>
                                            Dated<br />
                                            <b>NA</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} style={{ padding: 5 }}>
                                            Payment Term : &nbsp;
                                            <b>Immediate</b>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #000' }}>
                        <td style={{ verticalAlign: 'top', padding: '5px 8px', borderRight: '1px solid #000' }}>
                            Buyer,{item.BName}<br />
                        </td>
                        <td>
                            <div style={{ minHeight: 40 }}></div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{ padding: 0 }}>
                            <table style={{ width: '100%', marginBottom: 200 }} className='reciptContent'>
                                <thead>
                                    <tr>
                                        <th style={{
                                            width: '40px',
                                            padding: '5px',
                                            textAlign: 'center',
                                            borderRight: '1px solid #000'
                                        }}>Sr. No.</th>
                                        <th style={{
                                            width: '430px',
                                            padding: '5px',
                                            textAlign: 'center',
                                            borderRight: '1px solid #000'
                                        }}>Description of services</th>
                                        <th style={{
                                            width: '70px',
                                            padding: '5px',
                                            textAlign: 'center',
                                            borderRight: '1px solid #000'
                                        }}>Quantity</th>
                                        {/* <th style={{
                                            width: '70px',
                                            padding: '5px',
                                            textAlign: 'center',
                                            borderRight: '1px solid #000'
                                        }}>Rate</th>
                                        <th style={{
                                            width: '70px',
                                            padding: '5px',
                                            textAlign: 'center',
                                            borderRight: '1px solid #000'
                                        }}>Per</th> */}
                                        <th style={{
                                            width: '71px',
                                            padding: '5px',
                                            textAlign: 'center',
                                        }}>Amount</th>
                                    </tr>
                                </thead>
                                <tbody style={{ borderTop: '1px solid #000' }}>
                                    {/* {[1].map((item, idx) => */}
                                        <tr>
                                            <td style={{ borderRight: '1px solid #000' }}>1.</td>
                                            <td style={{ borderRight: '1px solid #000' }}>{item.ServiceName}</td>
                                            <td style={{ borderRight: '1px solid #000',padding: '2px 8px 2px 2px', textAlign: 'right', borderBottom: '1px solid #000' }}>1</td>
                                            {/* <td style={{ borderRight: '1px solid #000' }}>&nbsp;</td>
                                            <td style={{ borderRight: '1px solid #000' }}>&nbsp;</td> */}
                                            <td style={{ padding: '2px 8px 2px 2px', textAlign: 'right', borderBottom: '1px solid #000' }}>{item.CompanyFee}</td>
                                        </tr>
                                    {/* )} */}
                                </tbody>
                                <tfoot>
                                    <tr style={{ border: '1px solid #000', borderWidth: '1px 0px' }}>
                                        <td colSpan={2} align="right" style={{ padding: '2px 10px 2px 10px', borderRight: '1px solid #000' }}><b>TOTAL</b></td>
                                        <td style={{ padding: 2, borderRight: '1px solid #000' }}></td>
                                        {/* <td style={{ padding: 2, borderRight: '1px solid #000' }}></td>
                                        <td style={{ padding: 2, borderRight: '1px solid #000' }}></td> */}
                                        <td style={{ padding: '2px 8px 2px 2px', textAlign: 'right', borderBottom: '1px solid #000' }}>{item.CompanyFee}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} rowSpan={3} style={{ verticalAlign: 'top', padding: '4px 8px 2px 8px' }}>
                                            <div style={{ minHeight: 40 }}>
                                                (in word) - <b>{converter.toWords(item.TotalAmount)}</b>
                                            </div>
                                        </td>
                                        <td>GST(18%)</td>
                                        <td style={{ padding: '2px 8px 2px 2px', textAlign: 'right', borderBottom: '1px solid #000' }}>{item.GSTAmount}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Net Balance</b></td>
                                        <td style={{ padding: '2px 8px 2px 2px', textAlign: 'right', borderBottom: '3px solid #000' }}><b>{item.TotalAmount}</b></td>
                                    </tr>
                                    {/* <tr>
                                        <td colSpan={2} rowSpan={3} style={{ verticalAlign: 'top', padding: '4px 8px 2px 8px' }}>
                                            <div style={{ minHeight: 40 }}>
                                                (in word) - <b>amount in word here</b>
                                            </div>
                                        </td>
                                        <td colSpan={2}>GST(18%)</td>
                                        <td style={{ padding: '2px 8px 2px 2px', textAlign: 'right', borderBottom: '1px solid #000' }}>{item.GSTAmount}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} rowSpan={3} style={{ verticalAlign: 'top', padding: '4px 8px 2px 8px' }}>
                                            <div style={{ minHeight: 40 }}>
                                                {/* (in word) - <b>amount in word here</b> *
                                            </div>
                                        </td>
                                        <td colSpan={2}>Total Amount</td>
                                        <td style={{ padding: '2px 8px 2px 2px', textAlign: 'right', borderBottom: '1px solid #000' }}>{item.TotalAmount}</td>
                                    </tr> 
                                    <tr>
                                        <td colSpan={2}><b>Net Balance</b></td>
                                        <td style={{ padding: '2px 8px 2px 2px', textAlign: 'right', borderBottom: '3px double #000' }}><b>0.00</b></td>
                                    </tr>*/}
                                </tfoot>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            )):""}
        </>
    )
}
