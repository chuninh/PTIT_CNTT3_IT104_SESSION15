import { Component } from 'react'

type User = {
    email: string
}
type State = {
    user: User
}
export default class PTIT_CNTT3_IT04_SESSION15_EX01 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            user: {
                email: ""
            }
        }
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("email:", this.state.user);
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Form</h1>
                    <label>Email: </label>
                    <input type="text" onChange={this.handleChange} name='email' />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
