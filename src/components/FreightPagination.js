import React, { Component } from 'react';
import { Pagination } from "antd";
import "antd/lib/pagination/style/index.css";

class FreightPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { total, pageSize, onChange, current } = this.props;
        return ( 
            <Pagination
            onChange={e => {
              window.scrollTo(0, 0);
              onChange(e);
            }}
            total={total} // total number of data items
            pageSize={pageSize} // number of data items per page
            defaultCurrent={1}
            current={current}
          />
         );
    }
}
 
export default FreightPagination;