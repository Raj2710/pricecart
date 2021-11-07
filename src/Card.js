import React from 'react'

function Card(props) {
    return (
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.type.title}</h5>
            <h6 class="card-price text-center">${props.type.price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li class={props.type.userEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.title==="FREE"?<>{props.type.user}</>:<b>{props.type.user}</b>}</li>
              <li class={props.type.storageEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.storage}</li>
              <li class={props.type.publicProjectsEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.publicProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.publicProjects}</li>
              <li class={props.type.communityAccessEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.communityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.communityAccess}</li>
              <li class={props.type.privateProjectsEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.privateProjects}</li>
              <li class={props.type.phoneSupportEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.phoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.phoneSupport}</li>
              <li class={props.type.subdomainEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.subdomainEnabler?"fas fa-check":"fas fa-times"}></i></span><b>{props.type.subdomainPrefix} </b>{props.type.subdomain}</li>
              <li class={props.type.reportsEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.reportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.reports}</li>
            </ul>
            <div class="d-grid">
              <a href="https://react-bootstrap.github.io/getting-started/introduction/" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card
