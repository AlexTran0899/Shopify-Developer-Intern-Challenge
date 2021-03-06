import './Nav.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Input, Space } from 'antd';
import { Button } from 'antd';
import "antd/dist/antd.css";
import Upload from '../Upload/Upload'

function clearToken(){
    localStorage.removeItem('token')
    window.location.reload(false)
}

const { Search } = Input;
function Mynav(props) {
    const { setSearch } = props
    const onSearch = value => {
        setSearch(value)
    }
    return (
        <div className="NavLogedIn">
            <div className='inner'>
                <Search
                    placeholder="Search for your item"
                    enterButton="Search"
                    size="large"
                    className='searchbar'
                    onSearch={onSearch}
                />
                <Upload />
                <Button size='large'className='button' onClick={clearToken}>
                    Logout
                </Button>
            </div>
        </div >
    );
}

export default Mynav;
