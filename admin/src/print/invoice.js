
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCTCDashboardByID_invoice } from "../config/api";
import converter from "number-to-words";
import { COMPANY_DETAILS } from '../config/constant';

export default function Invoice() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [show, setShow] = useState(true);

    useEffect(() => {
        bindData();
    }, []);
    async function bindData() {
        debugger;
        await getCTCDashboardByID_invoice(id)
            .then((response) => {
                setData(response[0]);
            })
            .catch((error) => {
                alert(error);
            });
    }
    const styles = `
    .contentTable th td{
        border: 1px solid #000;
    }
    .contentTable tr td{
        border-bottom: 1px solid #000;
    }
    @media print {@page{size: auto;}}
    `;
    
    setTimeout(() => {
        window.print();        
    }, 1000);
    window.onafterprint = window.close;
    return (
        <>
            <style>
                {styles}
            </style>
            {data ? data.map((item, index) => (
                <table style={{ border: '0px solid #000', width: 750, margin: '0 auto' }}>
                    <tbody>
                        <tr>
                            <td>
                                <img src='/logo.png' alt='' style={{ display: 'block', float: 'left' }} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    paddingTop: 30
                                }}>
                                    <div style={{ width: '50%', paddingRight: 20 }}>
                                        <label style={{ marginBottom: 6, fontWeight: 600 }}>Company Name: </label>
                                        <div style={{ fontWeight: 500 }}>{item.CompanyName}</div>
                                        {item.CompanyGSTNo?<div><b>GSTIN No. :- </b>{item.CompanyGSTNo}</div>:""}
                                        {/* <p style={{ marginBottom: 6 }}>Shri Swami Samarth Complex, Suvarnayug Colony, Pimple Gurav, Pune, Maharashtra - 421027</p> */}
                                        {/* <div>+91 {item.Mobile}</div> */}
                                    </div>
                                    <div style={{ width: '50%', paddingLeft: 20 }}>
                                        <label style={{ marginBottom: 6, fontWeight: 600 }}>BILL FROM: </label>
                                        <div style={{ fontWeight: 500 }}>{COMPANY_DETAILS.Name}</div>
                                        <p style={{ marginBottom: 3 }}>{COMPANY_DETAILS.address}</p>
                                        <div style={{ marginBottom: 8 }}>{COMPANY_DETAILS.mobile}</div>
                                        <div><b>Date :- </b> {item.createdDate}</div>
                                        <div><b>Invoice No. :- </b> {"LV" + item.ID}</div>                                        
                                    <div><b>GSTIN No. :- </b>{COMPANY_DETAILS.gstno}</div>
                                    {/* <div><b>PAN No. :- </b>{COMPANY_DETAILS.pancard}</div> */}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    paddingTop: 10
                                }}>
                                    <div style={{ width: 518, paddingRight: 20 }}>
                                        <div style={{ display: 'flex', marginBottom: 10, textTransform: 'capitalize' }}>
                                            <b>Candidate Name : </b>
                                            <span>&nbsp;{item.fullname}</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table style={{ width: '100%', border:'1px solid',borderCollapse:'collapse' }} className="contentTable">
                                    <thead align="center">
                                        <tr>
                                            <th rowSpan={2} width={40}>Sr. No.</th>
                                            <th rowSpan={2} width={356}>Description</th>
                                            {/* <th rowSpan={2} width={100}>Amount</th>
                                            <th colSpan={2} width={180}>GST</th> */}
                                            <th rowSpan={2} width={108}>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {[1].map((item1, idx) =>  */}
                                        {/* <tr>
                                            <td align='right' style={{ paddingRight: 6, fontWeight: 500 }}></td>
                                            <td style={{ fontWeight: '800' }}>{item.CompanyName}</td>
                                            {/* <td>{Math.round((item.CTC) * 100) / 100}</td>
                                            <td>{Math.round((item.GST) * 100) / 100}</td> 
                                            <td></td>
                                        </tr> */}
                                        <tr>
                                            <td align='right' style={{ paddingRight: 6, fontWeight: 500 }}>1.</td>
                                            <td>CTC/Commercial</td>
                                            {/* <td>{Math.round((item.CTC) * 100) / 100}</td>
                                            <td>{Math.round((item.GST) * 100) / 100}</td> */}
                                            <td>{Math.round((item.CTC) * 100) / 100}</td>
                                        </tr>
                                        <tr>
                                            <td align='right' style={{ paddingRight: 6, fontWeight: 500 }}>2.</td>
                                            <td>Professional Fee(%)</td>
                                            {/* <td>{Math.round((item.CTC) * 100) / 100}</td>
                                            <td>{Math.round((item.GST) * 100) / 100}</td> */}
                                            <td>{Math.round((item.CTCPer) * 100) / 100}</td>
                                        </tr>
                                        <tr>
                                            <td align='right' style={{ paddingRight: 6, fontWeight: 500 }}>3.</td>
                                            <td>Amount</td>
                                            {/* <td>{Math.round((item.CTC) * 100) / 100}</td>
                                            <td>{Math.round((item.GST) * 100) / 100}</td> */}
                                            <td>{Math.round((item.TotalAmount) * 100) / 100}</td>
                                        </tr>
                                        <tr>
                                            <td align='right' style={{ paddingRight: 6, fontWeight: 500 }}>4.</td>
                                            <td>GST(18%)</td>
                                            {/* <td>{Math.round((item.CTC) * 100) / 100}</td>
                                            <td>{Math.round((item.GST) * 100) / 100}</td> */}
                                            <td>{Math.round((item.GST) * 100) / 100}</td>
                                        </tr>
                                        <tr>
                                            <td align='right' style={{ paddingRight: 6, fontWeight: 500 }}></td>
                                            <td><b>Total Amount</b></td>
                                            {/* <td>{Math.round((item.CTC) * 100) / 100}</td>
                                            <td>{Math.round((item.GST) * 100) / 100}</td> */}
                                            <td><b>{(Math.round((item.TotalAmount) * 100) / 100)+(Math.round((item.GST) * 100) / 100)}</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    paddingTop: 10
                                }}>
                                    <div style={{ width: 518, paddingRight: 20 }}>
                                        <div style={{ display: 'flex', marginBottom: 10, textTransform: 'capitalize' }}>
                                            <b>(in word) : </b>
                                            <span>&nbsp;{converter.toWords((Math.round((item.TotalAmount) * 100) / 100)+(Math.round((item.GST) * 100) / 100))} Only</span>
                                        </div>
                                        {/* <div style={{ fontWeight: 500 }}>for NEFT / RTGS / IMPS :-</div> */}
                                        {/* {item.StampDutyFee!=='0' && item.StampDutyFee!==0?<div><b style={{ fontWeight: 500 }}>Stamp Duty Fee :- </b> <span>{item.StampDutyFee}</span></div>:""}
                                    {item.RegistrationFee!=='0' && item.RegistrationFee!==0?<div style={{marginBottom:10}}><b style={{ fontWeight: 500}}>Registration Fee :- </b> <span>{item.RegistrationFee}</span></div>:""}
                                     */}
                                        {/* {item.StampDutyFee!=='0' && item.StampDutyFee!==0 || 
                                    item.RegistrationFee!=='0' && item.RegistrationFee!==0
                                    ?<div style={{marginBottom:10}}><b style={{ fontWeight: 500 }}>Govt Fees :- </b> <span>{item.StampDutyFee+item.RegistrationFee}</span></div>:""}
                                     */}
                                        {/* <label style={{ marginBottom: 6, fontWeight: 600 }}>PAYMENT INFORMATION: </label>
                                        <div>
                                            <b style={{ fontWeight: 500 }}>Payment / Cheque to be made in the name  of :- </b>
                                            <div style={{ fontWeight: 600, marginBottom: 10 }}>{COMPANY_BANK_DETAILS.accountName}</div>
                                        </div>
                                        <div style={{ fontWeight: 500 }}>for NEFT / RTGS / IMPS :-</div>
                                        <div><b style={{ fontWeight: 500 }}>Account Name :- </b> <span style={finance_details_span}>{COMPANY_BANK_DETAILS.accountName}</span></div>
                                        <div><b style={{ fontWeight: 500 }}>Account No. :- </b> <span style={finance_details_span}>{COMPANY_BANK_DETAILS.accountNumber}</span></div>
                                        <div><b style={{ fontWeight: 500 }}>IFSC Code :- </b> <span style={finance_details_span}>{COMPANY_BANK_DETAILS.ifsc}</span></div>
                                        <div><b style={{ fontWeight: 500 }}>Name of bank :- </b> <span style={finance_details_span}>{COMPANY_BANK_DETAILS.bankName}</span></div>
                                        <div><b style={{ fontWeight: 500 }}>Name of branch :- </b> <span style={finance_details_span}>{COMPANY_BANK_DETAILS.branch}</span></div> */}
                                    </div>
                                    {/* <div style={{ width: 230, paddingLeft: 20 }}>
                                        <div style={total_parent_DIV}><b style={total_b}>Sub Total :- </b> <span style={total_span}>
                                            {item.ServiceID === '1' || item.ServiceID === 1 || item.ServiceID === '2' || item.ServiceID === 2 ? (item.ShowGST !== '0' && item.ShowGST !== 0 && item.ShowGST !== null ? Math.round((item.CompanyFee + item.StampDutyFee + item.RegistrationFee + item.AbhitaChallan) * 100) / 100 : Math.round((item.CompanyFee + item.GSTAmount + item.StampDutyFee + item.RegistrationFee + item.AbhitaChallan) * 100) / 100) :
                                                (item.ShowGST !== '0' && item.ShowGST !== 0 && item.ShowGST !== null ? Math.round((item.CompanyFee + item.StampDutyFee + item.RegistrationFee) * 100) / 100 : Math.round((item.CompanyFee + item.GSTAmount + item.StampDutyFee + item.RegistrationFee) * 100) / 100)}</span></div>
                                        <div style={total_parent_DIV}><b style={total_b}>Tax Rate(%) :- </b> <span style={total_span}>{item.ShowGST !== '0' && item.ShowGST !== 0 && item.ShowGST !== null ? '18' : '0'}</span></div>
                                        <div style={total_parent_DIV}><b style={total_b}>Total Tax :- </b> <span style={{ ...total_span, borderBottom: 0 }}>{item.ShowGST !== '0' && item.ShowGST !== 0 && item.ShowGST !== null ? Math.round((item.GSTAmount) * 100) / 100 : 0}</span></div>
                                        <div style={{ width: 210, borderBottom: '1px solid #000', marginBottom: 8, paddingTop: 3 }}></div>
                                        <div style={total_parent_DIV}><b style={total_b}>Total Payable :- </b> <span style={{ ...total_span, borderBottom: 0, fontWeight: 600 }}>₹ {item.TotalAmount}</span></div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style={{ width: '100%', paddingRight: 20, paddingTop: 10 }}>
                                    <label style={{ marginBottom: 6, fontWeight: 600 }}>DECLARATION: </label>
                                    <div>
                                        <b style={{ fontWeight: 500 }}>We declare that this invoice shows the actual price of the services described and that all particulars are true and correct.</b>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src='/LegavacSignStamp.png' alt='' style={{ width: '200px', height: '200px', display: 'block', float: 'right' }} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            )) : ""}
        </>
    )
}
