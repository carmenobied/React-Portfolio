import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import API from '../utils/API';
import styled from 'styled-components';
import 'react-table-6/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`
const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateProject extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/projects/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteProject extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the project ${this.props.id} permanently?`,
            )
        ) {
            API.deleteProjectById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class ProjectsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await API.getAllProjects().then(projects => {
            this.setState({
                projects: projects.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { projects, isLoading } = this.state
        console.log('projectsList -> render -> projects', projects)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Client',
                accessor: 'client',
                filterable: true,
            },
            {
                Header: 'Location',
                accessor: 'location',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteProject id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateProject id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!projects.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={projects}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ProjectsList;