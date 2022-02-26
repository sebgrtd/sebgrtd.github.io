import React from 'react'
import { Button } from 'react-bootstrap'
import './CardCompetence.css'
import { useNavigate } from 'react-router-dom'

export default function CardCompetence(props) {
  const navigate = useNavigate();

  return <div className={'card-competence-container' + (props.isVisible ? ' visible' : '')}>
    <div style={{height:'480px', width:'300px'}} className='card-body bg-dark text-light d-flex flex-column justify-content-between'>
        <div>
            <h3 className='text-primary text-center'>{props.title}</h3>
            <p className='mt-4'>{props.text}</p>
        </div>
        {/* <Link to={{pathname:'/voirplus', state: {test: 12}}} ></Link> */}
        <Button style={{width:'120px'}} className='btn-primary' onClick={() => {
            navigate('/voirplus',
             {state: {
                img : props.img,
                t1 : props.t1,
                t2 : props.t2,
                title : props.title,
             }
            })
          }}
        >Voir plus</Button>
    </div>
  </div>
}
