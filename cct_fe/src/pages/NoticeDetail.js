import React,{ useEffect, useState } from "react";
import '../css/WriteNotice.css';
import axios from 'axios';
import FilterPopup from "../components/FilterPopup";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from 'moment';
import 'moment/locale/ko';

export default function NoticeDeatil () {
    const [page, setpage] = useState([]);


    return(
        <div>
            공고 디테일 페이지 입니다.
        </div>

    )
}