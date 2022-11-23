import React, {useState , useEffect} from "react";
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import '../Components/tripplanner.css';

let today = "";
let maxDate = "";
const Date = (props) =>{
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


useEffect(() => {

}, []);




 today = new window.Date().toISOString().split('T')[0];


const datePicker = {
    height:"44px",
    borderRadius: "5px",
    border: "1px solid gray"
}



return (
<div>

<Space direction="vertical">

  <RangePicker className="date-picker" style={datePicker}

   defaultValue={[moment(`${today}`, dateFormat), moment('2022/10/30', dateFormat)]}
   format={dateFormat}
   onChange={props.onChange}
  />
</Space>

</div>
)
}

export default Date;