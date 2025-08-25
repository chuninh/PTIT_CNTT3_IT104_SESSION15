import { Component } from 'react'

type Date={
    date:string,
    check:boolean
}

export default class PTIT_CNTT3_IT04_SESSION15_EX03 extends Component<{},Date> {
    constructor(props:{}){
        super(props);
        this.state={
            date:"",
            check:false
        }
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({check:true})
      };
    
      handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            date:e.target.value
        });
        this.setState({check:false})
      };
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <h1>ngay sinh :{this.state.check?this.state.date:""}</h1>
                    <input type="date" onChange={this.handleChange}/>
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}
