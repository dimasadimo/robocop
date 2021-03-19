import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getUsers } from "../actions/userAction";

function CardView({data}) {

    return (
        <div className="col">
            <div className="card h-100">
                    <div className="card-body">
                        <h5 className="d-inline-block">{data.name}</h5>
                        <a href="#" className="btn btn-primary" style={{float: "right"}}>Get Info</a>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.</p>
                    </div>
                <img src="..." className="card-img-top" alt="..."/>
            </div>
        </div>
    )
}

function RobotList (props) {

    useEffect(() => {
        props.getUsers()
    })

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4" >
            {props.loading ? "Loading..." : props.error ? props.error.message :
                props.data.map((u, i) => <CardView key={i} data={u}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.findAllUser.error,
        data: state.findAllUser.data,
        loading: state.findAllUser.loading
    }
}

const mapDispatchToProps = { getUsers }

export default connect(mapStateToProps, mapDispatchToProps)(RobotList);