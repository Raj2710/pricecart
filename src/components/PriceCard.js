import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

function PriceCard(props) {
    console.log(props.data)
    return <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.product}</h5>
            <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
                {/* With FAS ICONS */}
              {/* <li className={props.data.userEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.users}</li>
              <li className={props.data.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
              <li className={props.data.publicProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.publicProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicProjects}</li>
              <li className={props.data.communityAccessEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.communityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.communityAccess}</li>
              <li className={props.data.privateProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.privateProjects}</li>
              <li className={props.data.phoneSupportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.phoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.phoneSupport}</li>
              <li className={props.data.subDomainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.subDomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.subDomain}</li>
              <li className={props.data.reportsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.reportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.reports}</li> */}
              
                {/* With MUI ICONS  */}
              <li className={props.data.userEnabler?"":"text-muted"}><span className="fa-li">{props.data.userEnabler?<CheckIcon/>:<ClearIcon/>}</span>{props.data.users}</li>
              <li className={props.data.storageEnabler?"":"text-muted"}><span className="fa-li">{props.data.storageEnabler?<CheckIcon/>:<ClearIcon/>}</span>{props.data.storage}</li>
              <li className={props.data.publicProjectsEnabler?"":"text-muted"}><span className="fa-li">{props.data.publicProjectsEnabler?<CheckIcon/>:<ClearIcon/>}</span>{props.data.publicProjects}</li>
              <li className={props.data.communityAccessEnabler?"":"text-muted"}><span className="fa-li">{props.data.communityAccessEnabler?<CheckIcon/>:<ClearIcon/>}</span>{props.data.communityAccess}</li>
              <li className={props.data.privateProjectsEnabler?"":"text-muted"}><span className="fa-li">{props.data.privateProjectsEnabler?<CheckIcon/>:<ClearIcon/>}</span>{props.data.privateProjects}</li>
              <li className={props.data.phoneSupportEnabler?"":"text-muted"}><span className="fa-li">{props.data.phoneSupportEnabler?<CheckIcon/>:<ClearIcon/>}</span>{props.data.phoneSupport}</li>
              <li className={props.data.subDomainEnabler?"":"text-muted"}><span className="fa-li">{props.data.subDomainEnabler?<CheckIcon/>:<ClearIcon/>}</span>{props.data.subDomain}</li>
              <li className={props.data.reportsEnabler?"":"text-muted"}><span className="fa-li">{props.data.reportsEnabler?<CheckIcon/>:<ClearIcon/>}</span>{props.data.reports}</li>
            </ul>
            
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default PriceCard
