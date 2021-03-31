import React  from 'react';
import ReservarForm from '../components/ReservarForm';
 

class Reservar extends React.Component {
    state = {
        form:{}
    };
    handleChange = async e =>{
        e.preventDefault();
 
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        
        console.log("Form",this.state.form );
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <ReservarForm onChange={this.handleChange} />
                </div>
            </React.Fragment>
        )
    }
}

export default Reservar;
