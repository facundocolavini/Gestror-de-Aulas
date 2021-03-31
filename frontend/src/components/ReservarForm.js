import React  from 'react'

class ReservarForm extends React.Component {
    

    render() {
        return (
            <div>
                <div className="card card-body col col-md-6 offset-md-3 mt-4">
                    <h1>Reservar Aula</h1>
                    <form>
                        <div className="form-group">
                            <label>Curso</label>
                            <input
    /*                             onChange={(e) => {
                                    setFirstName(e.target.value)
                                    changeValues(e);
                                    console.log(e,'que es')
                                }} */
                                className="form-control"
                                type="text"
    /*                             name="firstName"
                                value={formValues.firstName} */
                            />
                        </div>
                        <div className="form-group">
                            <label>Materia</label>
                            <input
    /*                             onChange={(e) => {
                                    setLastName(e.target.value);
                                    changeValues(e);
                                }} */
                                className="form-control"
                                type="text"
                                name="lastName"
                /*                 value={formValues.lastName} */
                            />
                        </div>
                        <div className="form-group">
                            <label>Profesor</label>
                            <input
    /*                             onChange={(e) => {
                                    setEmail(e.target.value);
                                    changeValues(e);
                                }} */
                                className="form-control"
                                type="text"
    /*                             name="email"
                                value={formValues.email}     */
                            />
                        </div>
                        <div className="form-group">
                            <label>Job Title</label>
                            <input
    /*                             onChange={(e) => {
                                    setJobTitle(e.target.value);
                                    changeValues(e);
                                }} */
                                className="form-control"
                                type="text"
                                /* name="jobTitle"
                                value={formValues.jobTitle}    */
                            />
                        </div>
                        <div className="form-group">
                            <label>Twitter</label>
                            <input
    /*                             onChange={(e) => {
                                    setTwitter(e.target.value);
                                    changeValues(e);
                                }} */
                                className="form-control"
                                type="text"
                            /*  name="twitter"
                                value={formValues.twitter} */
                            />
                        </div>
                        <button /* onClick={(e) => {e.preventDefault(); console.log('Button was clicked')}}  */className="btn btn-primary">Reservar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReservarForm;