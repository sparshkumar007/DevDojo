import React,{ useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import MyContext from '../../context/Mycontext';


function Problem_list(props) {
    const sharedData=useContext(MyContext);
    const title=props.title;
    const total=props.total_submissions;
    const correct=props.correct_submissions;
    const tag=props.tag;
    const statement=props.problem_statement;
    const cases=props.test_cases;
    const func1=() => {
        sharedData.set_statement(statement);
        sharedData.set_cases(cases);
    }
    return (
        <>
            <div>
                <li class="list-group-item d-flex justify-content-between align-items-start mx-3 my-2 ">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">
                            <Link onClick={func1()} to="/problem_statement">
                                {title}
                            </Link>
                        </div>
                        {tag}
                    </div>
                    <span class="badge bg-primary rounded-pill">{correct}</span>
                </li>
            </div>
        </>
    )
}

Problem_list.propTypes={

}

export default Problem_list

