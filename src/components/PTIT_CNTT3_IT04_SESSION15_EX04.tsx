import { Component } from 'react'

type Range={
    range:string,
    check:boolean
}

export default class PTIT_CNTT3_IT04_SESSION15_EX04 extends Component<{},Range> {
    constructor(props:{}){
        super(props);
        this.state={
            range:"",
            check:false
        }
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({check:true})
      };
    
      handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            range:e.target.value
        });
        this.setState({check:false})
      };
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <h2>tien do hoan thanh:{this.state.check?this.state.range:""}%</h2>
                    <input type="range" onChange={this.handleChange}/>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}
