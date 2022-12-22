import React from 'react';
import constant from "./config/constant";

export default function createform(){

    return(
        <div>
        <form>
            Select Service:<select name="ddlservice">
                <option value="0">select</option>
                <option value="1">Service Name 1</option>
                <option value="2">Service Name 2</option>
                </select>
            Name:<input type="text" name="name"/>
            label:<input type="text" name="label"/>
            Control Type:<select name="ddlcontroltype">
                {constant.controltype.map((item,index)=>
                <option value={item}>{item}</option>
                )}
            </select>
            Input Type:<select name="ddlservice">
                <option value="0">select</option>
                {constant.inputtype.map((item,index)=>
                <option value={item}>{item}</option>
                )}
                </select>
            PlaceHolder:<input type="text" name="placeholder"/>
            DataType:<select name="ddldatatype">
                {constant.datatype.map((item,index)=>
                <option value={item}>{item}</option>
                )}
            </select>
            DataType:<select name="ddldatatype">
                {constant.datatype.map((item,index)=>
                <option value={item}>{item}</option>
                )}
            </select>
            Is Mandatory:<input type="checkbox" name="chkismandatory"/>
        </form>
        </div>
    )
}