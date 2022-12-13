
import React, { useState, useEffect } from "react";
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import '../Components/tripplanner.css';

let today = "";
let maxDate = "";
const Date = (props) => {
    const { RangePicker } = DatePicker;
    const dateFormat = 'YYYY/MM/DD';
    const weekFormat = 'MM/DD';
    const monthFormat = 'YYYY/MM';
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    useEffect(() => {

    }, []);

    today = new window.Date().toISOString().split('T')[0];
    const datePicker = {
        width: "100%",
        height: "55px",
        borderRadius: "5px",
        border: "1px black gray"
    }

    const handleDate = (dateString) => {
        // console.log('===========', dateString);
        props.onChange(dateString);
    }
    return (
        <Space direction="vertical">
            <RangePicker className="date-picker" style={datePicker}
                defaultValue={[moment(`${today}`, dateFormat), moment('2022/10/30', dateFormat)]}
                format={dateFormat}
                onChange={(value, dateString) => handleDate(dateString)}
            />
        </Space>
    )
}

export default Date;