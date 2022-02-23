import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Beranda from './beranda';
import DataSiswa from './datasiswa';
import DataKelas from './datakelas';
import DataPetugas from './datapetugas';
import DataSpp from './dataspp';
import DataPembayaran from './datapembayaran';
import DataLaporan from './datalaporan';

const utama = () => (
    <Routes>
        <Route exact path = "/" element = {<Beranda/>} />
        <Route path = "/datasiswa" element = {<DataSiswa/>} />
        <Route path = "/datakelas" element = {<DataKelas/>} />
        <Route path = "/datapetugas" element = {<DataPetugas/>} />
        <Route path = "/dataspp" element = {<DataSpp/>} />
        <Route path = "/datapembayaran" element = {<DataPembayaran/>} />
        <Route path = "/datalaporan" element = {<DataLaporan/>} />
    </Routes>
)

export default utama;