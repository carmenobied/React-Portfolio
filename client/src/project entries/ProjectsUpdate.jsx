import React, { Component } from 'react'
import API from '../utils/API'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``
const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`
const Label = styled.label`
    margin: 5px;
`
const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`
const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`
const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ProjectsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            rating: '',
            time: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleUpdateProject = async () => {
        const { id, name, rating, time } = this.state
        // const { id, name, client, role, technologies, location, year } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, time: arrayTime }

        await API.updateProjectById(id, payload).then(res => {
            window.alert(`Project updated successfully`)
            this.setState({
                name: '',
                rating: '',
                time: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const project = await API.getProjectById(id)

        this.setState({
            name: project.data.data.name,
            rating: project.data.data.rating,
            time: project.data.data.time.join('/'),
        })
    }

    render() {
        const { name, rating, time } = this.state
        return (
            <Wrapper>
                <Title>Create Project</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Time: </Label>
                <InputText
                    type="text"
                    value={time}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleUpdateProject}>Update Projects</Button>
                <CancelButton href={'/projects/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ProjectsUpdate