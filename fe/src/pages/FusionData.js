import React, { Component } from 'react';
import axios from 'axios';
import FusionDataTable from '../components/FusionDataTable';
import FusionDataPagination from '../components/FusionDataPagination';

class FusionDataPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storedData: [],
            currentPage: 0,
            limit: 100,
        }
        this.fetchData = this.fetchData.bind(this);
        this.selectPage = this.selectPage.bind(this);
        this.selectRowsPerPage = this.selectRowsPerPage.bind(this);
    }

    async componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        // Whenever the user updates the rows per page or current page, re-fetch the data
        if (prevState.limit !== this.state.limit || prevState.currentPage !== this.state.currentPage ) {
            this.fetchData();
        }
    }

    fetchData() {
        const params = {
            pageStart: this.state.currentPage * this.state.limit, 
            limit: this.state.limit,
        };
        
        axios.get('/api/fusion_data', { params }).then((response) => {
            this.setState({ storedData: response.data.data });
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }

    selectPage(e, newPage) {
        this.setState({ currentPage: newPage });
    }

    selectRowsPerPage(e) {
        this.setState({ limit: e.target.value });
    }

    render() {
        return (
            <div>
                <FusionDataPagination
                    currentPage={this.state.currentPage}
                    selectPage={this.selectPage}
                    limit={this.state.limit}
                    selectRowsPerPage={this.selectRowsPerPage}
                />

                <FusionDataTable
                    tableData={this.state.storedData}
                />
            </div>
        );
    }
}

export default FusionDataPage;